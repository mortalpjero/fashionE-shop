const products = document.querySelector('#infProducts');
const services = document.querySelector('#infServices');
const contacts = document.querySelector('#infContacts');
const btnProducts = document.querySelector('#btnProducts');
const btnServices = document.querySelector('#btnServices');
const btnContacts = document.querySelector('#btnContacts');
const btnExpand = document.querySelectorAll('.expand');
const informationItems = document.querySelectorAll('.information__list');

function toggleSection(element, section) {
  element.classList.toggle('expand--opened');
  section.classList.toggle('invisible');
}

btnProducts.addEventListener('click', function () {
    toggleSection(this, products);
});

btnServices.addEventListener('click', function () {
    toggleSection(this, services);
});

btnContacts.addEventListener('click', function () {
    toggleSection(this, contacts);
});

const windowResize = () => {
    if (window.matchMedia("(min-width: 999.2px)").matches) {
      btnExpand.forEach(button => {
        button.classList.add('invisible');
      });
      informationItems.forEach(item =>{
        item.classList.remove('invisible');
      });
    } else {
      btnExpand.forEach(button => {
        button.classList.remove('invisible');
      });
      informationItems.forEach(item =>{
        item.classList.add('invisible');
      });
    }
  };

  window.addEventListener("resize", windowResize);
  windowResize();