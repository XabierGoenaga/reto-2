import { form } from '$app/server';

import { ContactDTO } from '$lib/dto';

export const newContactMessage = form(ContactDTO.CREATE, () => {
	return { success: true };
});
