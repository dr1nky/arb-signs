const menuButton = document.querySelector(".toggle");
const menuItems = document.querySelectorAll(".item");

// menuButton.addEventListener('click', () => {
  //   for (var i = 0; i < menuItems.length; i++) {
    //     menuItems[i].classList.toggle('active');
    //   }
    // });
    
    menuButton.addEventListener('click', () => {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].toggleAttribute('active');
      }
    });
    
    // menuButton.addEventListener('click', () => {
      //   menuButton.classList.toggle('active');
      // });
      
      menuButton.addEventListener('click', () => {
        menuButton.toggleAttribute('active');
      });