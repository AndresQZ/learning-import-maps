System.register(['lodash'], (function () {
	'use strict';
	var startCase;
	return {
		setters: [function (module) {
			startCase = module.startCase;
		}],
		execute: (function () {

			//import startCase from '@lodash/startCase';


			const el = document.createElement('h1');
			const words = "hello, world";
			const text = document.createTextNode(startCase(words));
			el.appendChild(text);

			document.body.appendChild(el);

		})
	};
}));
//# sourceMappingURL=hello.js.map
