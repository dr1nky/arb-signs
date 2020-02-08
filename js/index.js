const menuButton = document.querySelector(".toggle");
const menuItems = document.querySelectorAll(".item");
  
menuButton.addEventListener('click', () => {
  menuButton.toggleAttribute('active');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].toggleAttribute('active');
  }
});