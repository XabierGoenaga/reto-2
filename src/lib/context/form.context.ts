import { createContext } from 'svelte';

interface FormContext {
	isSubmitted: boolean;
}

export const [getFormContext, setFormContext] = createContext<FormContext>();
