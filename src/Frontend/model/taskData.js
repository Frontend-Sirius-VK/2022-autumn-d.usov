import EventBus from '../utils/eventBus.js';

export class TaskData {
	constructor() {
		this.products = null;
	}

	fetchData() {
		setTimeout(() => {
			fetch('/api/tasks')
				.then((response) => response.json())
				.then((data) => {
					this.products = data;
					EventBus.emit('tasks', data);
				});
		}, 4500);
	}
}
