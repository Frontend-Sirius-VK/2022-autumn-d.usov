import { MainView } from '../view/MainView.js';
import { Task } from '../model/Task.js';

export class MainController {
	process() {
		const view = new MainView();
		view.render();

		const model = new Task();
		model.fetchData();
	}
}
