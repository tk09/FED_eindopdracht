// Responsive uitklapmenu


var responsivenav = document.querySelector('header > nav > ul');

responsivenav.classList.add('in-visible');

document.querySelector('header > nav > a').onclick = function() { 
    responsivenav.classList.toggle('visible');
}

