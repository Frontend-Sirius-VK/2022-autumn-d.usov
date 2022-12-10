export class TasksList {
	constructor(parent) {
		this.parent = parent;
	}

	render(header) {
		const container = document.createElement('div');

		const tasksContainer = document.createElement('li');
		tasksContainer.classList.add('task-container');

		const taskField = document.createElement('div');
		taskField.classList.add('task-field');

		const checkbox = document.createElement('div');
		checkbox.classList.add('check-box');

		const customСheckbox = document.createElement('label');
		customСheckbox.classList.add('custom-checkbox');

		const customСheckboxInput = document.createElement('input');
		customСheckboxInput.setAttribute('type', 'checkbox');
		customСheckboxInput.classList.add('custom-checkbox-input');

		const taskHeader = document.createElement('div');
		taskHeader.textContent = header;
		taskHeader.classList.add('task-header');

		customСheckbox.append(customСheckboxInput);
		checkbox.append(customСheckbox);
		taskField.append(checkbox, taskHeader);
		tasksContainer.append(taskField);
		container.append(tasksContainer);
		this.parent.append(container);
	}
}
