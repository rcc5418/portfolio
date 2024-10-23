window.addEventListener('DOMContentLoaded', init, false);

function init() {
    var buttons = document.querySelectorAll('.button');
    var logo = document.querySelector('#logoContainer');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.2s';
        });
        
        button.addEventListener('mouseout', function () {
            button.style.transform = 'scale(1)';
        });
    });
    logo.addEventListener('mouseover', function () {
        logo.style.transform = 'scale(1.05)';
        logo.style.transition = 'transform 0.2s';
    });
    logo.addEventListener('mouseout', function () {
        logo.style.transform = 'scale(1)';
    });
}