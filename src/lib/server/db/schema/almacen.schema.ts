import { pgTable, varchar } from 'drizzle-orm/pg-core';

export const almacen = pgTable('ALMACEN', {
	codigo: varchar({ length: 5 }).primaryKey(),
	tamano: varchar({ length: 8 }),
	ubicacion: varchar({ length: 30 }).notNull()
});
