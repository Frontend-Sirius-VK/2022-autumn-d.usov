import { TasksCardRender } from '../components/TasksCardRender/TasksCardRender.js';
import EventBus from '../utils/EventBus.js';

export class MainView {
	constructor() {
		this.tasks = null;

		EventBus.on('getTasks', this.update.bind(this));
	}

	render() {
		const root = document.querySelector('#root');
		this.container = document.createElement('div');

		const tasksContainer = document.createElement('div');
		tasksContainer.classList.add('main-container');
		this.tasks = new TasksCardRender(tasksContainer);

		this.container.append(tasksContainer);
		root.append(this.container);
	}

	update(data = {}) {
		if (!data || !Array.isArray(data) || data.length === 0) {
			return;
		}
		this.tasks.update(data);
	}
}
