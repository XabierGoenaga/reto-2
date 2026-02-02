import { command, query } from '$app/server';
import { QuestionDTO } from '$lib/dto/quetion.dto';
import { db, schema } from '$lib/server';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const getQuestions = query(async () => {
	return await db.query.questions.findMany({});
});

export const getQuestionById = query(QuestionDTO.ID, async (id) => {
	const question = await db.query.questions.findFirst({
		where: {
			id
		}
	});

	if (!question) {
		throw error(404, 'No se a encontrado la pregunta');
	}

	return question;
});

export const toogleStateQuestion = command(QuestionDTO.ID, async (id) => {
	const question = await getQuestionById(id);

	try {
		await db
			.update(schema.questions)
			.set({ answered: !question.answered })
			.where(eq(schema.questions.id, question.id));
	} catch (_) {
		throw error(500, 'No se a podido realizar la solicitud');
	}

	await getQuestions().refresh();

	return { success: true };
});

export const deleteQuestion = command(QuestionDTO.ID, async (id) => {
	const question = await getQuestionById(id);

	try {
		await db.delete(schema.questions).where(eq(schema.questions.id, question.id));
	} catch (_) {
		throw error(500, 'No se a podido realizar la solicitud');
	}

	await getQuestions().refresh();

	return { success: true };
});
