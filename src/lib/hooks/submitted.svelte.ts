interface IsSubmittedState {
	ref: HTMLFormElement | undefined;
	submitted: boolean;
}

export const isSubmitted = () => {
	const state: IsSubmittedState = $state({
		ref: undefined,
		submitted: false
	});

	const check = (e: SubmitEvent) => {
		e.preventDefault();

		state.submitted = true;
	};

	$effect(() => {
		state.ref!.addEventListener('submit', check);

		return () => {
			state.ref!.removeEventListener('submit', check);
		};
	});

	return state;
};
