import { check, date, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const proyecto = pgTable('proyecto', {
	id: serial('ID').primaryKey().notNull(),
	titulo: varchar('TITULO', { length: 30 }).notNull(),
	objectivo: varchar('TITULO', { length: 30 }).notNull(),
	fecha_inicio: date('FECHA_INICIO', { mode: 'date' }).notNull(),
	fecha_fin: date('FECHA_FIN', { mode: 'date' }).notNull(),
	// IDEmpSupervisor
	pais: varchar('PAIS').notNull()
});
