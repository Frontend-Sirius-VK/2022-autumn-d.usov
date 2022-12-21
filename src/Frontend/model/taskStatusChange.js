import EventBus from '../utils/eventBus.js';

export class TaskStatusChange {
	constructor() {
		this.status = null;
	}

	fetchData(id) {
		fetch(`/api/taskStatus/${id}`, {
			method: 'post',
		})
			.then((response) => response.json())
			.then((data) => {
				this.products = data;
				EventBus.emit('taskStatus', data);
			});
	}
}
