//accordion horizontal

let teamAccoJS = () => {
  let teamList = document.querySelector(".team__accordion");

    teamList.addEventListener("click", function(e) {
      //e.preventDefault(); //чтобы ссылка не прыгала на вверх
        let target = e.target;        
        const item = target.closest('.team__trigger');
        let itemContent = item.querySelector(".team__content");
        const items = document.querySelectorAll(".team__trigger");

        if (target.className === 'team__checkbox') {
            if (!item.classList.contains('is-active')) {
                for (let index = 0; index < items.length; index++) {
                    items[index].classList.remove('is-active');   
                    items[index].querySelector(".team__content").style.height=0;           
                }
                item.classList.add('is-active');
                itemContent.style.height = itemContent.scrollHeight + "px";
            }
            else{
                item.classList.remove('is-active');  
            }
        }
  });
};

teamAccoJS();
