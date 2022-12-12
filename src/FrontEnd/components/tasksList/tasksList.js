export class TasksList {
	constructor(parent) {
		this.parent = parent;
	}

	render(id, header, is_done) {
		const container = document.createElement('div');

		const tasksContainer = document.createElement('li');
		tasksContainer.classList.add('task-container');

		const taskField = document.createElement('div');
		taskField.classList.add('task-field');

		const customСheckboxInput = document.createElement('input');
		customСheckboxInput.setAttribute('type', 'checkbox');
		customСheckboxInput.setAttribute('id', `checkbox-input-${id}`);
		customСheckboxInput.classList.add('custom-checkbox-input');

		if (is_done) {
			customСheckboxInput.checked = true;
		} else {
			customСheckboxInput.checked = false;
		}

		const taskHeader = document.createElement('label');
		taskHeader.textContent = header;
		taskHeader.setAttribute('for', `checkbox-input-${id}`);
		taskHeader.classList.add('task-header');

		taskField.append(customСheckboxInput, taskHeader);
		tasksContainer.append(taskField);
		container.append(tasksContainer);
		this.parent.append(container);
	}
}
