//import startCase from '@lodash/startCase';

import { startCase } from 'lodash';  // SystemJS


const el = document.createElement('h1');
const words = "hello, world";
const text = document.createTextNode(startCase(words));
el.appendChild(text);

document.body.appendChild(el);