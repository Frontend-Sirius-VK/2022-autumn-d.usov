import { TasksList } from '../TasksList/TasksList.js';

export class TasksCardRender {
	constructor(parent) {
		this.parent = parent;
		this.container = null;
	}

	render(data) {
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
			taskCard.render(task.header, task.description);
		});

		this.parent.append(this.container);
	}

	update(data) {
		if (this.container) {
			this.container.innerHTML = '';
		}
		this.render(data);
	}
}
