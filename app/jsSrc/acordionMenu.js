//accordion vertical

let menuAccoJS = () => {
    let menuList = document.querySelector(".menu__accordion");
    const wrapperWidth = document.querySelector(".menu-burger");
    const step = Math.ceil(parseFloat(window.getComputedStyle(wrapperWidth, null).width));
    const titleWidth = document.querySelector(".menu__checkbox-title");
    const stepTitle = Math.ceil(parseFloat(window.getComputedStyle(titleWidth, null).width));

    menuList.addEventListener("click", function(e) {
        //e.preventDefault(); //чтобы ссылка не прыгала на вверх
          let target = e.target;        
          const item = target.closest('.menu__trigger');
          let itemContent = item.querySelector(".menu__content");
          const items = document.querySelectorAll(".menu__trigger");
  
          if (target.className === 'menu__checkbox') {
              if (!item.classList.contains('is-active')) {
                  for (let index = 0; index < items.length; index++) {
                    items[index].classList.remove('is-active');   
                    items[index].querySelector(".menu__content").style.width=0;           
                  }
                  if (step<=768) {
                    item.classList.add('is-active');
                    itemContent.style.width = (step- (stepTitle*3)) + 'px';
                  } 
                  else {
                    item.classList.add('is-active');
                    itemContent.style.width = "340px";
                  }                  
              }
              else{
                  item.classList.remove('is-active');  
              }
          }
    });
  };
  
  menuAccoJS();
  