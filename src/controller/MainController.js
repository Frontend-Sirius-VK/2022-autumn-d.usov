export class MainController {
	constructor(parent) {
		this.parent = parent;
	}

	render(text) {
		const element = document.createElement('h1');
		element.textContent = text;
		this.parent.appendChild(element);
	}
}
