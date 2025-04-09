export class ToDoModel {
	constructor(content) {
		this.content = content;
		this.status = "Pendente";
		this.date = new Date();
	}
}
