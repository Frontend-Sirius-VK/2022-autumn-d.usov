import EventBus from '../utils/eventBus.js';

export class TaskStatusChange {
	constructor() {
		this.status = null;
	}

	fetchData(id) {
		fetch(`/taskStatus/${id}`)
			.then((response) => response.json())
			.then((data) => {
				this.status = data.is_done;
				EventBus.emit('taskStatus', data);
			});
	}
}
