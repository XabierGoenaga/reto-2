import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

const API = "http://localhost:8055/items/proyecto";
const TOKEN = "cuWO6JdeAVKw5quxR7mdAYCo7Ip0yv-g";

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(API, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        }
    });

    const json = await res.json();

    return {
        data: json.data ?? []
    };
};

export const actions: Actions = {
    create: async ({ request, fetch }) => {
        const form = await request.formData();

        const data = {
            Titulo: form.get("Titulo"),
            Objetivo: form.get("Objetivo"),
            Presupuesto: Number(form.get("Presupuesto")) || 0,
            InicioProyecto: form.get("InicioProyecto"),
            FinProyecto: form.get("FinProyecto"),
            IDEmpSupervisor: Number(form.get("IDEmpSupervisor")),
            Pais: form.get("Pais")
        };

        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }
        }).then((res) => res.json())

        const exits = response.find(({ IDEmpSupervisor }) => (data.IDEmpSupervisor === IDEmpSupervisor));

        if (exits) {
            return fail(400, {
                IDEmpSupervisor: {
                    message: "No se a encontrado un supervisor con ese error."
                }
            })
        }

        await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify(data)
        });
    },

    update: async ({ request, fetch }) => {
        const form = await request.formData();
        const id = form.get("id");

        await fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
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
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify({
                Pais: "Actualizado"
            })
        });
    },

    delete: async ({ request, fetch }) => {
        const form = await request.formData();
        const id = Number(form.get("id"));

        if (!Number.isFinite(id)) {
            return fail(400, {
                id: {
                    message: "El id no es valido"
                }
            });
        }
        /- -/
        const res = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${TOKEN}`
            }
        });

        console.log(res.status);
        console.log(await res.text());
        /- -/
        await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${TOKEN}`
            }
        });
    }
};