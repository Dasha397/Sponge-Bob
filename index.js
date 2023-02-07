let count = 0;
let theme = 'Светлая';

function myFunc(name) {
	let items;

	if (!document.querySelectorAll('.shadow').length) {
		count = 0;
	}
	if (!count) {
		count++;
		items = document.querySelectorAll('.block');
		for (let i of items) {
			i.classList.add('shadow');
		}
	}

	items = document.querySelectorAll("." + name);
	for (let i of items) {
		i.classList.remove('shadow');
	}
}

function setTheme() {
	if (theme == 'Светлая') {
		theme = 'Темная';
		document.body.classList.remove('light-theme');
		document.body.classList.add('dark-theme');

		let btn = document.querySelector('.btn-theme');
		btn.classList.remove('btn-light');
		btn.classList.add('btn-dark');

	} else {
		theme = 'Светлая';
		document.body.classList.add('light-theme');
		document.body.classList.remove('dark-theme');

		let btn = document.querySelector('.btn-theme');
		btn.classList.remove('btn-dark');
		btn.classList.add('btn-light');
	}
}