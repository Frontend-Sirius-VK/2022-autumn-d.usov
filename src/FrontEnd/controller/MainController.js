import { MainView } from '../view/MainView.js';
import { TaskData } from '../model/TaskData.js';

export class MainController {
	process() {
		const view = new MainView();
		view.render();

		const model = new TaskData();
		model.fetchData();
	}
}
