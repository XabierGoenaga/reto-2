import type { RemoteFormIssue } from '@sveltejs/kit';

import { getFormContext } from '$lib/context';
import { InputStates } from '$lib/type';

interface State {
	status: InputStates;
}

interface Args {
	issues: () => RemoteFormIssue[] | undefined;
}

export const inputValidationStatus = ({ issues }: Args) => {
	const state = $state<State>({ status: InputStates['UNDEFINED'] });

	const form_state = getFormContext();

	$effect(() => {
		if (!form_state.isSubmitted) {
			state.status = InputStates['UNDEFINED'];

			return;
		}

		if (issues() === undefined) {
			state.status = InputStates['SUCCESS'];

			return;
		}

		state.status = InputStates['ERROR'];
	});

	return state;
};
