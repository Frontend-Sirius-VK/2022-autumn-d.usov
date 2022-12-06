import { TasksCard } from '../TasksCard/TasksCard.js';

export class TasksCardRender {
	constructor(parent) {
		this.parent = parent;
		this.container = null;
	}

	render(data) {
		this.container = document.createElement('div');
		data.forEach((task) => {
			const taskCard = new TasksCard(this.container);
			taskCard.render(task.title, task.description);
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
