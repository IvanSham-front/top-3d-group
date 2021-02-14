function toggleNav() {
    firstNavEl.classList.toggle('open-first-nav');
    secondNavEl.classList.toggle('open-second-nav');
    overlayEl.classList.toggle('overlay_open');
    btnCloseEl.classList.toggle('first-nav__button_open');
}


btnMenuEl.addEventListener('click' , () => {
   toggleNav()
   document.body.style.overflow = 'hidden';
})

btnCloseEl.addEventListener('click', () => {
    toggleNav()
    document.body.style.overflow = 'auto';
})

overlayEl.addEventListener('click', () => {
    toggleNav();
    document.body.style.overflow = 'auto';
})