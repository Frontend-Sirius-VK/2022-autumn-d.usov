import EventBus from '../utils/EventBus.js';

export class TaskData {
	constructor() {
		this.products = null;
	}

	fetchData() {
		fetch('/getTasks')
			.then((response) => response.json())
			.then((data) => {
				this.products = data;
				EventBus.emit('getTask', data);
			});
	}
}
