import { TasksCardRender } from '../components/TasksRender/TasksCardRender.js';
import EventBus from '../utils/EventBus.js';

export class MainView {
	constructor() {
		this.container = null;
		this.tasks = null;

		EventBus.on('taskCard:got-info', this.update.bind(this));
	}

	render() {
		const root = document.querySelector('#root');
		this.container = document.createElement('div');
		this.container.classList.add('page-container');

		const task_container = document.createElement('div');
		task_container.classList.add('tasks');
		this.tasks = new TasksCardRender(task_container);

		this.container.append(task_container);
		root.append(this.container);
	}

	update(data = {}) {
		if (!data || !Array.isArray(data) || data.length === 0) {
			return;
		}
		this.tasks.update(data);
	}
}
