$(function() {

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header-wrapper').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
      return false;
    }
  }
}

  $('.gallery-button').click(function() {
      if($(this).data('index') == "all") {
          $('.gallery-item').fadeIn();          
          $('.gallery-button').removeClass('active');
          $(this).addClass('active');
      } else {
          $('.gallery-button').removeClass('active');
          $(this).addClass('active');
          let index = $(this).data('index');
          console.log(index);
          $('.gallery-item').hide(); 
          $('.gallery-item[data-index=' + index + "]").fadeIn();
      }
      return false;
  });


    $('.gallery-item a').fancybox({
        backFocus: false
    });



const menuButton = document.querySelector('.header-button');
const mobileMenu = document.querySelector('.hidden-menu');

menuButton.addEventListener("click", function(){
  menuButton.classList.toggle('_active');
  mobileMenu.classList.toggle('hidden-menu--visible');
});  

const hiddenLinks = document.querySelectorAll('.hidden-link');
if (hiddenLinks.length > 0) {
  hiddenLinks.forEach(hiddenLink => {
    hiddenLink.addEventListener("click", function(){
      console.log('click');     
      mobileMenu.classList.remove('hidden-menu--visible');
      menuButton.classList.remove('_active');
    }); 
  });
  }

const popupButton = document.querySelector('.popup-button');
const popup = document.querySelector('.contacts-popup');

popupButton.addEventListener('click', () => {  
  popup.classList.add('active');
  copyToClipboard();

});

popup.addEventListener('animationend', () => {
  popup.classList.remove('active');
});

function copyToClipboard() {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('readonly', '');
  textarea.style.position= 'absolute';
  textarea.value = ('https://www.instagram.com/anna.ndesign/');
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

});

 