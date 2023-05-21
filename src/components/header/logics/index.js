const burgerBtn = document.querySelector('.burger__btn');
const navigation = document.querySelector('.header__nav-main');
const burger = document.querySelector('.burger');

burgerBtn.addEventListener('click', function () {
    navigation.classList.toggle('hidden');
    burger.classList.toggle('burger--clicked');
})

const windowResizes = () => {
    if (window.matchMedia("(min-width: 1422px)").matches) {
        navigation.classList.remove('hidden');
        
    } else {
        navigation.classList.add('hidden');
  }
};

window.addEventListener("resize", windowResizes);
windowResizes();