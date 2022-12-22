import { MainView } from '../view/mainView.js';
import { TaskData } from '../model/taskData.js';
import { TaskStatusChange } from '../model/taskStatusChange.js';
import  EventBus  from '../utils/eventBus.js';

export class MainController {
	process() {
		const mainView = new MainView();
		mainView.render();

		const taskData = new TaskData();
		EventBus.emit('tasks:loading');
		taskData.fetchData();
	}

	static changeStatus(id) {
		const taskStatus = new TaskStatusChange();
		taskStatus.fetchData(id);
	}
}
