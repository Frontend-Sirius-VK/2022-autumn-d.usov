import { MainView } from '../view/mainView.js';
import { TaskData } from '../model/taskData.js';

export class MainController {
	process() {
		const view = new MainView();
		view.render();

		const model = new TaskData();
		model.fetchData();
	}
}
