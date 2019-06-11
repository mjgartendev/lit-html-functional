import './style.css'
import {render} from 'lit-html'
import {App} from './view';
import {Store} from './model'

console.log(Store);

const root = document.querySelector('#app');
render(
  App(Store), 
  root
);