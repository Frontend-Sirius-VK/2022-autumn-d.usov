import EventBus from '../utils/eventBus.js';

export class TaskStatusChange {
	constructor() {
		this.status = null;
	}

	fetchData(id) {
		fetch(`/taskStatus/${id}`, {
			method: 'put',
		})
			.then((response) => response.json())
			.then((data) => {
				this.status = data.is_done;
				EventBus.emit('taskStatus', data);
			})
			.catch((error) => {
				error.message;
			});
	}
}
