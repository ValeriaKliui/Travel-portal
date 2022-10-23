const menuCloseItem = document.querySelector('.header__nav-close', 'account');
const menuCloseItems = document.querySelectorAll('.header__item');
const toggleMenu = () => {
    menu.classList.toggle('active');
    menu.classList.toggle('shadow');
}

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});

for (let menuClose of menuCloseItems) {
    menuClose.addEventListener('click', () => menu.classList.remove('active', 'shadow')
    );
}
burger.addEventListener('click', () => {
    menu.classList.add('active', 'shadow');
})

menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('active', 'shadow');
})

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_burger = target == burger;
    let menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_burger && menu_is_active) {
        toggleMenu();
    }
})

