import { MainComponent } from './src/components/MainComponent.js'

const body = document.querySelector('body');
const helloWorld = new MainComponent(body);
const text = 'Hello world';
helloWorld.render(text);
