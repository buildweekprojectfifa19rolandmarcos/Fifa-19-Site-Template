
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence.
    menu.classList.toggle('menu--open');
  }
  
  /*
  class Button{
    constructor(element){
      this.element = element;
    }
    
    click(){
        
        this.element.addEventListener('click', () => { this.toggleMenu() });
    }
  }
  */
  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelectorAll('.menu')[0];
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelectorAll('.menu-button');
  console.log(menuButton)
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton[0].addEventListener('click', (element)=>{ toggleMenu() });
  
  