import EventBus from '../utils/EventBus.js';

export class Task {
	constructor() {
		this.task = null;
	}

	fetchData() {
		fetch('/Tasks')
			.then((response) => response.json())
			.then((data) => {
				this.task = data;
				EventBus.emit('Tasks', data);
			});
	}
}
