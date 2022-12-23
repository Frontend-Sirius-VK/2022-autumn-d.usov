import { MainController } from '../../controller/mainController.js';

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

		const customCheckboxInput = document.createElement('input');
		customCheckboxInput.setAttribute('type', 'checkbox');
		customCheckboxInput.setAttribute('id', `checkbox-input-${id}`);
		customCheckboxInput.classList.add('custom-checkbox-input');

		const taskHeader = document.createElement('label');
		taskHeader.textContent = header;
		taskHeader.setAttribute('for', `checkbox-input-${id}`);
		taskHeader.classList.add('task-header');

		customCheckboxInput.addEventListener('click', () => {
			MainController.changeStatus(id);
		});

		if (is_done) {
			customCheckboxInput.checked = true;
			taskField.classList.add('checked');
			customCheckboxInput.classList.add('checked');
			taskHeader.classList.add('checked');
		} else {
			customCheckboxInput.checked = false;
			taskField.classList.remove('checked');
			customCheckboxInput.classList.remove('checked');
			taskHeader.classList.remove('checked');
		}

		taskField.append(customCheckboxInput, taskHeader);
		tasksContainer.append(taskField);
		container.append(tasksContainer);
		this.parent.append(container);
	}
}
