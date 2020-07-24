const body = document.querySelector('body');
const checkbox = document.querySelector('#checkbox');

window.addEventListener('load', () => {
	body.classList.add('is-dark-mode');
	checkbox.setAttribute('checked', true);
});

checkbox.addEventListener('change', function(event){
	if (this.checked) {
		document.body.classList.remove('is-light-mode');
		document.body.classList.add('is-dark-mode');
	}
	else {
		document.body.classList.remove('is-dark-mode');
		document.body.classList.add('is-light-mode');
	}
});
