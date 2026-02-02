import * as schema from './schema';
import { defineRelations } from 'drizzle-orm';

export const relations = defineRelations(schema, (r) => ({
	financia: { donante: r.one.donante({ from: r.financia.ID_DONANTE, to: r.donante.id }) }
}));
