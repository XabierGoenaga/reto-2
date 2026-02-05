# Usamos Node.js 20 (Alpine para imagen más ligera)
FROM node:20-alpine AS base

# Instalar PNPM globalmente
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ==========================================
# STAGE 1: Dependencias
# ==========================================
FROM base AS deps

WORKDIR /app

# Copiar archivos de configuración de PNPM
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias usando el store de PNPM
# --frozen-lockfile asegura que use exactamente las versiones del lockfile
#RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm install --frozen-lockfile

# ==========================================
# STAGE 2: Build
# ==========================================
FROM base AS builder

WORKDIR /app

# Copiar dependencias desde la stage anterior
COPY --from=deps /app/node_modules ./node_modules

# Copiar el código fuente
COPY . .

#
ENV DATABASE_URL=postgresql://root:mysecretpassword@192.168.1.2:5432/local

# Construir la aplicación
# SvelteKit generará la salida en ./build
RUN pnpm run build

# Instalar solo dependencias de producción
#RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
RUN pnpm install --prod --frozen-lockfile

# ==========================================
# STAGE 3: Runner (Producción)
# ==========================================
FROM base AS runner

WORKDIR /app

# Crear usuario no-root por seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

# Copiar archivos necesarios
COPY --from=builder --chown=sveltekit:nodejs /app/build ./build
COPY --from=builder --chown=sveltekit:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=sveltekit:nodejs /app/package.json ./package.json

# Si usas archivos estáticos
COPY --from=builder --chown=sveltekit:nodejs /app/static ./static

# Cambiar a usuario no-root
USER sveltekit

# Exponer puerto
EXPOSE 3000

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Comando para ejecutar la aplicación
CMD ["node", "build"]
