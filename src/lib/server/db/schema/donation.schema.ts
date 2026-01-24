import { char, pgTable, serial, text, varchar, integer } from 'drizzle-orm/pg-core';

export const donante = pgTable('DONANTE', {
	id: serial('ID').primaryKey().notNull(),
	name: varchar('NOMBRE', { length: 30 }).notNull(),
	type: text('TIPO', { enum: ['Persona', 'Empresa'] }),
	direccion: varchar('DIRECCION', { length: 50 }),
	contacto: char('CONTACTO', { length: 9 }).notNull()
});

export const financia = pgTable('FINANCIA', {
	id: serial('ID_DONACION').notNull().primaryKey(),
	ID_PROYECTO: serial('ID_PROYECTO').primaryKey().notNull(),
	ID_DONANTE: serial('ID_DONANTE')
		.notNull()
		.references(() => donante.id),
	tipo: text('TIPO', { enum: ['monthly', 'single', 'sponsorship'] }),
	cantidad: integer('CANTIDAD').notNull(), // TODO: Hacer que no pueda ser negativo
	iban: char('IBAN', { length: 24 }).notNull()
});
