const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');



btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
  
    if(btnHamburger.classList.contains('open')){ // Close Hamburger Menu;
        btnHamburger.classList.remove('open');  
    }
    else { // Open Hamburger Menu
        btnHamburger.classList.add('open');
    }  
  });