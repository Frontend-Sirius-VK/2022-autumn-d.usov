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
				// console.log(data);
				EventBus.emit('getTasks', data);
			});
	}
}
