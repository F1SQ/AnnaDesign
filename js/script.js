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


AOS.init({
  startEvent: 'DOMContentLoaded',
  once: true,
  disable: function() { var maxWidth = 992; return window.innerWidth < maxWidth; }
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
      console.log('click')     
      mobileMenu.classList.remove('hidden-menu--visible');
      menuButton.classList.remove('_active');
    }); 
  });
  }



});

 