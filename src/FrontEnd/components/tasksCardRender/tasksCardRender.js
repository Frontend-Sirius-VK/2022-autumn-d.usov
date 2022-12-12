import { TasksList } from '../tasksList/tasksList.js';

export class TasksCardRender {
	constructor(parent) {
		this.parent = parent;
		this.container = null;
	}

	render(data) {
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
			this.container.innerHTML = '';
		}
		this.render(data);
	}
}
