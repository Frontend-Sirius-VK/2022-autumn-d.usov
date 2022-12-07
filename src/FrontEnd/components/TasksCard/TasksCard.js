export class TasksCard {
	constructor(parent) {
		this.parent = parent;
	}

	render(header, description) {
		const container = document.createElement('div');
		container.classList.add('tasks-cards');

		const tasksCard = document.createElement('ul');
		tasksCard.classList.add('ul-tasks');

		const tasksHeader = document.createElement('li');
		tasksHeader.textContent = header;

		tasksHeader.classList.add('task-header');

		// const tasksDescription = document.createElement('div');
		// tasksDescription.textContent = description;

		// tasksDescription.classList.add('task-description');

		// tasksCard.append(tasksHeader, tasksDescription);

		tasksCard.append(tasksHeader);

		container.append(tasksCard);
		this.parent.append(container);
	}
}
