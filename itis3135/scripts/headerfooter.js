document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data for the first navbar menu
    fetch("mainmenu.json")
    .then(response => response.json())
    .then(data => {
      const menuContainer = document.getElementById("menu-container");
      data.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        menuContainer.appendChild(menuItem);
      });
    })
    .catch(error => console.error("Error fetching Main Menu:", error));
  

    //Fetch JSON data for the subnav bar menu (submenu.json)
    fetch("submenu.json")
  .then(response => response.json())
  .then(data => {
    const subnavContainer = document.getElementById("subnav-container");
    data.forEach(item => {
      const subMenuItem = document.createElement("div");
      subMenuItem.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
      subnavContainer.appendChild(subMenuItem);
    });
  })
  .catch(error => console.error("Error fetching Submenu:", error));

    // Fetch JSON data for the footer menu
    fetch("lastmenu.json")
  .then(response => response.json())
  .then(data => {
    const footerContainer = document.getElementById("footer-container");
    data.forEach(item => {
      const footerItem = document.createElement("div");
      footerItem.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
      footerContainer.appendChild(footerItem);
    });
  })
  .catch(error => console.error("Error fetching Footer Links:", error));


    // Function to create a menu item
    function createMenuItem(item) {
        const menuItem = document.createElement("a");
        menuItem.classList.add("menu-item");
        menuItem.textContent = item.name;
        menuItem.href = item.url;

        // Create and append the butterfly
        const butterfly = document.createElement("img");
        butterfly.src = "images/butterflyPNG.png";
        favicon.alt = "butterfly";
        butterfly.classList.add("butterfly");
        menuItem.appendChild(butterfly)

        return menuItem;
    }

    // Set font size for menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.style.fontSize = "20px";
    });
});

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://webaim.org/search/?q=afsd", "_blank");
}