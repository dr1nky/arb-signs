const menuButton = document.querySelector(".menu-icon");
const menuItems = document.querySelectorAll(".navigation");
const overlayPanel = document.querySelector(".overlay");

menuButton.addEventListener('click', () => {
  menuButton.toggleAttribute('active');
  overlayPanel.toggleAttribute('active');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].toggleAttribute('active');
  }
});