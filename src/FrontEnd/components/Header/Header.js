export class Header {
	constructor(parent) {
		this.parent = parent;
	}

	render() {
		const container = document.createElement('div');
		const header = document.createElement('div');
		header.textContent = 'To-Do list';
		header.classList.add('header-text');
		this.parent.appendChild(header);
		this.parent.append(container);
	}
}
