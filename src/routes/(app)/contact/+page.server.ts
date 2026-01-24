import { ContactDTO } from '$lib/dto';
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { flatten } from 'valibot';
import { safeParse } from 'valibot';

interface TEST {
	success: boolean;
	issues: { [key: string]: string[] | undefined };
}

export const actions: Actions = {
	newContactMessage: async ({ request }) => {
		const formdata = await request.formData();

		const json_data = {
			full_name: formdata.get('full_name'),
			email: formdata.get('email'),
			phone: formdata.get('phone'),
			affair: formdata.get('affair'),
			message: formdata.get('message')
		};

		const result = safeParse(ContactDTO.CREATE, json_data);

		if (!result.success) {
			// console.log(flatten(result.issues).nested as unknown as string[]);

			return fail<TEST>(400, {
				success: false,
				issues: flatten(result.issues).nested ?? {}
			});
		}
	}
};
