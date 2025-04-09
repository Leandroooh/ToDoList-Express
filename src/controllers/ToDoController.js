import { ToDoManager } from "../models/ToDoManager.js";

const manager = new ToDoManager();

export const splashScreen = (req, res) => {
	res.status(200).render("index");
};

export const manageScreen = async (req, res) => {
	const tasks = await manager.getAllTodo();
	console.log(tasks);
	res.status(200).render("manager", { tasks });
};

export const create = async (req, res) => {
	const { content } = req.body;

	try {
		await manager.todoCreate(content);
		res.status(200).redirect("/tasks");
	} catch (error) {
		console.log(error.message);
	}
};

export const updateStatus = async (req, res) => {
	const { id } = req.params;
	console.log("ID recebido:", id);

	try {
		const task = await manager.getTodoById(id);
		console.log("Task retornada:", task);

		if (!task) {
			console.error("Tarefa não encontrada para o ID:", id);
			return res.status(404).send("Tarefa não encontrada");
		}

		const taskUpdate = {
			id: id,
			content: task.content,
			status: "Concluído",
			date: task.date,
			updatedAt: new Date(),
		};
		await manager.updateTodo(id, taskUpdate);
		res.status(200).redirect("/tasks");
	} catch (error) {
		console.log(error.message);
	}
};

export const remove = (req, res) => {
	const { id } = req.params;

	try {
		manager.deleteTodo(id);
		res.status(200).redirect("/tasks");
	} catch (error) {
		console.log(error.message);
	}
};
