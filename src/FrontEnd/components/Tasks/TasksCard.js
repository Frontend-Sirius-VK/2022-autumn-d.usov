export class TasksCard {
	constructor(parent) {
		this.parent = parent;
	}

	ender(
		title_data,
		description_data
	) {
		const cards = document.createElement('div');
		cards.classList.add('container_post');

		const info_text = document.createElement('div');
		const title_post = document.createElement('div');
		title_post.classList.add('author');

		const subscribers_post = document.createElement('div');
		subscribers_post.classList.add('subscribers');
		info_text.classList.add('info-div');

		const header = document.createElement('div');
		const header_text = document.createElement('div');
		header_text.classList.add('header-text');

		header_text.textContent = title_data;

		header.append(header_text);

		const main_text = document.createElement('div');
		const content = document.createElement('div');
		content.classList.add('content-text');

		content.textContent = description_data;

		main_text.append(content);

		cards.append(info_text, header, main_text);
		this.parent.append(cards);
	}
}
