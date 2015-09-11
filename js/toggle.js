// selecteer de fieldset die we aan en uit willen zetten
var setFieldSetOne = document.querySelector("fieldset fieldset");

var setFieldSetTwo = document.querySelector("fieldset fieldset:last-of-type");

// hide de tweede fieldset
setFieldSetOne.classList.add("is-invisible");
setFieldSetTwo.classList.add("is-invisible");

// select first radio button you can find
document.querySelector("input[type='radio']").onclick = function() {
	setFieldSetOne.classList.add("is-visible"),
	setFieldSetOne.classList.remove("is-invisible"),
	setFieldSetTwo.classList.add("is-invisible"),
	setFieldSetTwo.classList.remove("is-visible");
}

// select last radio button you can find
document.querySelector("input[type='radio']:last-of-type").onclick = function() {
	setFieldSetOne.classList.add("is-invisible"),
	setFieldSetOne.classList.remove("is-visible"),
	setFieldSetTwo.classList.add("is-visible"),
	setFieldSetTwo.classList.remove("is-invisible");
}