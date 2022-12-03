export class ProductCard {
	constructor(parent) {
		this.parent = parent;
	}

	render(title, description) {
		const container = document.createElement('div');
		container.classList.add('task');

		const taskSpec = document.createElement('div');

		const headText = document.createElement('div');
		headText.textContent = title;
		taskSpec.append(headText);
		headText.classList.add('product-card-title');

		const specTask = document.createElement('div');

		const descriptionTask = document.createElement('div');
		descriptionTask.textContent = `${description}`;
		specTask.append(descriptionTask);
		descriptionTask.classList.add('product-card-description');

		specTask.classList.add('product-card-spec-main');
		taskSpec.classList.add('product-card-text');
		taskSpec.append(specTask);

		container.append(taskSpec);
		this.parent.append(container);
	}
}
