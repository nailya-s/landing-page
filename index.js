const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const navigation = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo');
const networks = document.querySelector('.header__networks');
const dropdown = document.querySelector('.header__dropdown');
const btnArrow = document.querySelector('#btnArrow');
const languages = document.querySelector('.header__languages')




btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
  
    if(btnHamburger.classList.contains('open')){ // Close Hamburger Menu;
        btnHamburger.classList.remove('open');
        header.classList.remove('overlay'); 
        navigation.classList.add('hide-for-tablets');
        navigation.classList.remove('overlay');  
        logo.classList.remove('hide-for-tablets');
        networks.classList.remove('hide');
        dropdown.classList.remove('hide-for-tablets');
      
        
    }
    else { // Open Hamburger Menu
        btnHamburger.classList.add('open');
        header.classList.add('overlay');
        navigation.classList.remove('hide-for-tablets');
        navigation.classList.add('overlay');
        logo.classList.add('hide-for-tablets');
        networks.classList.add('hide');
        dropdown.classList.add('hide-for-tablets');
    }  
  });


  btnArrow.addEventListener('click', function(){
    console.log('click hamburger');
  
    if(btnArrow.classList.contains('clicked')){ // ;
        btnArrow.classList.remove('clicked');
        languages.classList.remove('clicked');
    }
    else { // Open Hamburger Menu
        btnArrow.classList.add('clicked');
        languages.classList.add('clicked');
    }  
  });