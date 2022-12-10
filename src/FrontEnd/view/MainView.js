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

		const headerContainer = document.createElement('div');
		headerContainer.classList.add('main-header-container');

		const tasksContainer = document.createElement('div');
		tasksContainer.classList.add('main-tasks-container');
		this.tasks = new TasksCardRender(tasksContainer);

		this.container.append(headerContainer, tasksContainer);

		if (root !== null) {
			root.append(this.container);
		} else {
			console.log('root is null');
		}
	}

	update(data = []) {
		if (!data || !Array.isArray(data) || data.length === 0) {
			return;
		}
		this.tasks.update(data);
	}
}
