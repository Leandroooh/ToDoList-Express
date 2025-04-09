import { ToDoManager } from "./ToDoManager.js";

async function test() {
	try {
		const dbManager = new ToDoManager();
		const data = await dbManager.getAllTodo("tasks");
		console.log(typeof data);
	} catch (error) {
		console.log(error.message);
	}
}
test();
