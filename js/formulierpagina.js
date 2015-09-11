// selecteer de fieldsets die we aan en uit willen zetten
var project = document.querySelector('fieldset:nth-of-type(2)');
var stage = document.querySelector('fieldset:nth-of-type(3)');

// hide deze fieldsets
project.classList.add('is-invisible');
stage.classList.add('is-invisible');

// select first radio button you can find
document.querySelector('input[type="radio"]').onclick = function() {
	project.classList.add('is-visible');
}

// select last radio button you can find
document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	stage.classList.add('is-visible');
	project.classList.remove('is-visible');
}