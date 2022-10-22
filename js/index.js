console.log(
    "1. Вёрстка соответствует макету. Ширина экрана 390px +48.\n" +
    "2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15.\n" +
    "3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22:\n" +
    "при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2:\n" +
    "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n" +
    "адаптивное меню соответствует макету +4\n" +
    "при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n" +
    "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\n" +
    "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n"+
    "Итого: 75"
);
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

