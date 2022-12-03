import EventBus from '../utils/EventBus.js';

export class Task {
	constructor(title = null, description = null) {
		this.title = title;
		this.description = description;
	}

	fetchData() {
		fetch('/tasks')
			.then((response) => response.json())
			.then((data) => {
				console.log('Tasks ::', data);
				this.title = data.title;
				this.description = data.description;

				EventBus.emit('yaskCard:got-info', data);
			});
	}
}
