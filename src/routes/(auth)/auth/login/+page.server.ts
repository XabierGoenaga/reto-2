import type { Actions } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import { resolve } from '$app/paths';
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        
            cookies.set('logged', 'true', { path: "/" });
        
            redirect(302, resolve('/admin/almacen'));
    }
};