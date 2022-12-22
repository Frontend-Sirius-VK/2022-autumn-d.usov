export class Loader {
	constructor(parent) {
		this.parent = parent;
	}
	render() {
		const loader = document.createElement('div');
		loader.classList.add('loader');

		const loaderInner = document.createElement('div');
		loaderInner.classList.add('loader-inner');

		const liensCounter = 5;
		for (let index = 0; index < liensCounter; index++) {
			const loaderLineWrap = document.createElement('div');
			loaderLineWrap.classList.add('loader-line-wrap');

			const loaderLine = document.createElement('div');
			loaderLine.classList.add('loader-line');

			loaderLineWrap.append(loaderLine);
			loaderInner.append(loaderLineWrap);
		}

		loader.append(loaderInner);
		this.parent.append(loader);
	}
}
