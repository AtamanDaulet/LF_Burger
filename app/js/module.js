

////  menu__overlay  ////

let menu = (function(params) {
  let menuOpen = document.querySelector(params.menuOpen);
  let menuClose = document.querySelector(params.menuClose);
  let menuItems = document.querySelectorAll(params.menuItems);
  let menu = document.querySelector(params.overlay);
  let body = document.querySelector('body');

  let _toggleMenu = function(e) {
    menu.classList.toggle('overlay__open');
    body.classList.toggle('body-active-menu');    
  }
//debugger;
  let addListeners = function() {
    menuOpen.addEventListener('click', _toggleMenu);
    menuClose.addEventListener('click', _toggleMenu);
    for (let index = 0; index < menuItems.length; index++) {
      const element = menuItems[index];
      element.addEventListener('click', _toggleMenu);
    }    
  }
  //console.log(menuOpen.className);
  return{open: addListeners};
})({
  overlay: '#overlay',
  menuOpen: '.hamburger__menu',
  menuClose: '.menu__close',
  menuItems: '.overlay__menu-item'
});

menu.open();


////  slider ////

const left = document.querySelector("#offer__left");
const right = document.querySelector("#offer__right");
const items = document.querySelector("#offer__items");
const widthWrapper = document.querySelector(".wrapper");
const itemsArray = document.querySelectorAll(".offer__item");
const sectionOffer = document.querySelector(".section.offer");
let marginItem = null;


const step = parseFloat(window.getComputedStyle(widthWrapper, null).width);
const minRight = 0;
const maxRight = Math.floor(step*2);
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }
});


//  fancybox /

let fancyboxModal = () => {
  $('.review-text__btn').fancybox({
    touch: true,
    smallBtn: false
  });
  $('.popup__close').on('click', e => {
    e.preventDefault();
    $.fancybox.close();
  });
};
fancyboxModal();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKFwiaW5wdXQ6Y2hlY2tib3hcIilcclxuICAubm90KHRoaXMpXHJcbiAgLnByb3AoXCJjaGVja2VkXCIsIHRoaXMuY2hlY2tlZCk7XHJcblxyXG4vLyAgbWVudV9fb3ZlcmxheVxyXG5sZXQgbWVudSA9IChmdW5jdGlvbihwYXJhbXMpIHtcclxuICBsZXQgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5tZW51Q2xvc2UpO1xyXG4gIGxldCBtZW51Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5tZW51Q2xvc2UpO1xyXG4gIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLm1lbnVJdGVtKTtcclxuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLm92ZXJsYXkpO1xyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICBsZXQgX3RvZ2dsZU1lbnUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXlfX29wZW4nKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keS1hY3RpdmUtbWVudScpOyAgICBcclxuICB9XHJcblxyXG4gIGxldCBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIG9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RvZ2dsZU1lbnUpO1xyXG4gICAgbWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RvZ2dsZU1lbnUpO1xyXG4gICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdG9nZ2xlTWVudSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm57b3BlbjogYWRkTGlzdGVuZXJzfTtcclxuXHJcbn0pKHtcclxuICBvdmVybGF5OiAnI292ZXJsYXknLFxyXG4gIG1lbnVPcGVuOiAnLmhhbWJ1cmdlcl9fbWVudScsXHJcbiAgbWVudUNsb3NlOiAnLm1lbnVfX2Nsb3NlJyxcclxuICBtZW51SXRlbTogJy5tZW51LWl0ZW0nXHJcbn0pO1xyXG5cclxubWVudS5vcGVuKCk7XHJcblxyXG5jb25zb2xlLmxvZygn0L/RgNC+0LLQtdGA0LrQsCcpOyJdfQ==
