export class TasksCard {
	constructor(parent) {
		this.parent = parent;
	}

	render(title, description) {
		const container = document.createElement('div');
		container.classList.add('tasksCard');

		const taskSpec = document.createElement('div');

		const headText = document.createElement('div');
		headText.textContent = title;
		taskSpec.append(headText);
		headText.classList.add('task-card-title');

		const tasksDescription = document.createElement('div');

		const specifications = document.createElement('div');
		specifications.textContent = description;
		tasksDescription.append(specifications);
		specifications.classList.add('task-card-spec');

		tasksDescription.classList.add('task-card-spec-main');
		taskSpec.classList.add('task-card-text');
		taskSpec.append(tasksDescription);

		container.append(taskSpec);
		this.parent.append(container);
	}
}
