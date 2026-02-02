import { contactCategories } from '$lib/constant';
import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const questions = pgTable('PREGUNTAS', {
	id: serial('ID').primaryKey().notNull(),
	full_name: text('FULL_NAME').notNull(),
	email: text('EMAIL').notNull(),
	phone: text('PHONE').notNull(),
	affair: text({ enum: contactCategories }).notNull(),
	message: text('MENSAJE').notNull(),
	answered: boolean('answered').notNull().default(false),
	acceptedNotifications: boolean('ACUERDO_NOTIFICACIONES').notNull().default(false)
});
