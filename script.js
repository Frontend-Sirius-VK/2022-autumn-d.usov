import { MainController } from './src/controller/MainController.js';

const body = document.querySelector('body');
const helloWorld = new MainController(body);
const text = 'Hello world';
helloWorld.render(text);
