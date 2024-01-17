$(document).ready(function () {
    const mobileMenu = $('.mobile-menu');
    const menuBtnOpen = $('.menu-btn-open-js');
    const menuBtnClose = $('.menu-btn-close-js');
    let menuLinks = $('li.mobile-link-js');

    const openMenu = () => mobileMenu.addClass('is-open');
    const closeMenu = () => mobileMenu.removeClass('is-open');

    menuBtnOpen.click(openMenu);
    menuBtnClose.click(closeMenu);
    
    menuLinks.click(closeMenu);
});