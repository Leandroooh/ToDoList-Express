import { DataBaseManager } from "./DataBaseManager.js";
import { ToDoModel } from "./ToDoModel.js";

const db = new DataBaseManager("http://localhost:3000");

export class ToDoManager {
	async getAllTodo() {
		try {
			return await db.getAllData("tasks");
		} catch (error) {
			console.log(error.message);
		}
	}

	async getTodoById(id) {
		if (!id) {
			throw new Error(`A Tarefa #${id} não foi encontrada.`);
		}

		try {
			return await db.getDataById("tasks", id);
		} catch (error) {
			console.log(error.message);
		}
	}

	async todoCreate(action) {
		if (!action) {
			throw new Error(
				"ERROR! A criação do ToDo não pode ser conclúida por falta de informações!",
			);
		}

		const newTodo = new ToDoModel(action);

		try {
			await db.createItem("tasks", newTodo);
		} catch (error) {
			console.log(
				`ERRO! Não foi possível concluir a criação do ToDo \n${error.message}`,
			);
		}
	}

	async deleteTodo(id) {
		if (!id) {
			throw new Error(`A Tarefa #${id} não foi encontrada.`);
		}

		try {
			await db.deleteItem("tasks", id);
			console.log("Tarefa excluída com sucesso!");
		} catch (error) {
			console.log(
				`ERRO! Não foi possível concluir a criação do ToDo \n${error.message}`,
			);
		}
	}

	async updateTodo(id, data) {
		try {
			await db.updateItem("tasks", id, data);
			console.log("Atualizada com sucesso!");
		} catch (error) {
			console.log(error.message);
		}
	}
}
