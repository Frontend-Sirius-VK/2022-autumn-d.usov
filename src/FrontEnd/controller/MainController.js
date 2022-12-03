export class MainController {
	process() {
		const view = new MainView();
		view.render();

		const carCards = new ProductCarData();
		carCards.fetchData();
	}
}
