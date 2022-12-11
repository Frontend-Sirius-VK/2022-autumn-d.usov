import EventBus from '../utils/eventBus.js';

export class TaskData {
	constructor() {
		this.products = null;
	}

	fetchData() {
		fetch('/Tasks')
			.then((response) => response.json())
			.then((data) => {
				this.products = data;
				EventBus.emit('Tasks', data);
			});
	}
}
