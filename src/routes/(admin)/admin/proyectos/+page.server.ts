import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

const API = "http://localhost:8055/items/Proyecto";
const EMPLEADOS_API = "http://localhost:8055/items/Empleado";
const TOKEN = "cuWO6JdeAVKw5quxR7mdAYCo7Ip0yv-g";

const HEADERS = {
    "Content-Type": "application/json",
};

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(API, { headers: HEADERS });
    const json = await res.json();

    return {
        data: json.data ?? []
    };
};

export const actions: Actions = {
    create: async ({ request, fetch }) => {
        const form = await request.formData();

        const rawSupervisor = Number(form.get("IDEmpSupervisor"));
        const rawPresupuesto = Number(form.get("Presupuesto"));

        // Validaciones locales antes de tocar la API
        const errors: Record<string, { message: string }> = {};

        if (!Number.isFinite(rawSupervisor) || rawSupervisor <= 0) {
            errors.IDEmpSupervisor = { message: "El ID del supervisor debe ser un número positivo." };
        }

        if (!Number.isFinite(rawPresupuesto) || rawPresupuesto < 0) {
            errors.Presupuesto = { message: "El presupuesto no puede ser negativo." };
        }

        if (Object.keys(errors).length > 0) {
            return fail(400, errors);
        }

        // Verificar que el supervisor existe en la colección de empleados
        const supervisorRes = await fetch(`${EMPLEADOS_API}/${rawSupervisor}`, {
            headers: HEADERS
        });

        if (!supervisorRes.ok) {
            return fail(400, {
                IDEmpSupervisor: { message: "No se ha encontrado un supervisor con ese ID." }
            });
        }

        const data = {
            Titulo: form.get("Titulo"),
            Objetivo: form.get("Objetivo"),
            Presupuesto: rawPresupuesto,
            InicioProyecto: form.get("InicioProyecto"),
            FinProyecto: form.get("FinProyecto"),
            IDEmpSupervisor: rawSupervisor,
            Pais: form.get("Pais")
        };

        const createRes = await fetch(API, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(data)
        });

        if (!createRes.ok) {
            return fail(500, {
                general: { message: "Error al crear el proyecto. Inténtalo de nuevo." }
            });
        }
    },

    update: async ({ request, fetch }) => {
        const form = await request.formData();
        const id = form.get("id");

        await fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: HEADERS,
            body: JSON.stringify({
                Titulo: "Actualizado desde SvelteKit"
            })
        });
    },

    patch: async ({ request, fetch }) => {
        const form = await request.formData();
        const id = form.get("id");

        await fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: HEADERS,
            body: JSON.stringify({
                Pais: "Actualizado"
            })
        });
    },

    delete: async ({ request, fetch }) => {
        const form = await request.formData();
        const id = Number(form.get("id"));

        if (!Number.isFinite(id) || id <= 0) {
            return fail(400, {
                id: { message: "El id no es válido." }
            });
        }

        const res = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${TOKEN}` }
        });

        if (!res.ok) {
            return fail(500, {
                general: { message: "No se pudo eliminar el proyecto." }
            });
        }
    }
};