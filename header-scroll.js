let oldScrollY = 0;
window.addEventListener('scroll', function(event) {

    let header = document.querySelector(".header");

    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let dY = scrolled - oldScrollY;
    if ( dY > 0 ){
        header.classList.remove('header__section--show');
        header.classList.add('header__section--hide');
    }
    else if ( window.pageYOffset == 0 ) {
        header.classList.remove('header__section--hide');
        header.classList.remove('header__section--show');
    } 
    else {
        header.classList.add('header__section--show');
        header.classList.remove('header__section--hide');
    }  

    oldScrollY = scrolled;
});