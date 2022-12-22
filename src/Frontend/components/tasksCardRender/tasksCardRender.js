import { TasksList } from '../tasksList/tasksList.js';
import { Loader } from '../loader/loader.js';
import EventBus from '../../utils/eventBus.js';

export class TasksCardRender {
	constructor(parent) {
		const container = document.createElement('div');
		this.parent = parent;
		this.container = container;

		EventBus.on('tasks:loading', this.render.bind(this));
	}

	render(data) {
		if (!data) {
			this.container.innerHTML = '';
			const loader = new Loader(this.container);
			loader.render();
			this.parent.prepend(this.container);
			return;
		}
		if (Array.isArray(data)) {
			this.container = document.createElement('div');

			const infoTasksList = document.createElement('div');
			infoTasksList.classList.add('info-tasks-list');

			const inputCreateNewTask = document.createElement('div');
			inputCreateNewTask.classList.add('input-create-new-task');

			const tasksList = document.createElement('ul');
			tasksList.classList.add('tasks-list');

			this.container.append(infoTasksList, inputCreateNewTask, tasksList);

			data.forEach((task) => {
				const taskCard = new TasksList(tasksList);
				taskCard.render(task.id, task.header, task.is_done);
			});

			this.parent.append(this.container);
		} else {
			console.log('Не получилось получить данные с сервера');
		}
	}

	update(data) {
		if (this.container) {
			this.parent.innerHTML = '';
		}
		this.render(data);
	}
}
