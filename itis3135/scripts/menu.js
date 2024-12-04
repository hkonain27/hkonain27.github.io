document.addEventListener("DOMContentLoaded", () => {
    // Menu data
    const navMainData = [
        { name: "Home", url: "index.html" },
        { name: "Introduction", url: "introduction.html" },
        { name: "Contract", url: "contract.html" },
        { name: "About", url: "about.html" },
        { name: "Website Evaluations", url: "website_evaluations.html" },
        { name: "Tables", url: "tables.html" },
        { name: "Forms", url: "forms.html" },
        { name: "Project Overview", url: "project_overview.html" },
        { name: "Peer Review 1", url: "peerreview1.html" },
        { name: "Peer Review 2", url: "peerreview2.html" },
        { name: "First Scripts", url: "firstscripts.html" },
        { name: "BYO", url: "byo_intro.html" },
        { name: "Slideshow", url: "slideshow.html" },
        { name: "Drawing", url: "drawing.html" },
        { name: "CRAPPY", url: "stuff/c+@@pp^yy.htm" },
        { name: "Hobby", url: "hobby/index.html" },
        { name: "Client Project", url: "client_project/index.html" }
    ];

    const navFooterData = [
        { name: "Webpage", url: "https://webpages.charlotte.edu/ghowale/" },
        { name: "Freecodecamp", url: "https://www.freecodecamp.org/grishmahowale" },
        { name: "Codeacademy", url: "https://www.codecademy.com/profiles/grishmahowale" },
        { name: "Github", url: "https://github.com/grishmahowale12/" },
        { name: "Github.io", url: "https://grishmahowale12.github.io/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/grishma-howale-75a2b1274/" }
    ];

    // Helper function to create menu links and prevent duplication
    const createMenuLinks = (data, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Prevent duplication if links are already added
        data.forEach((item, idx) => {
            // Check if the link already exists
            if (![...container.getElementsByTagName('a')].some((link) => link.href === item.url)) {
                const link = document.createElement("a");
                link.textContent = item.name;
                link.href = item.url;
                link.target = item.url.startsWith("http") ? "_blank" : "_self";

                container.appendChild(link);

                // Add separators unless it's the last item
                if (idx < data.length - 1) {
                    container.appendChild(document.createTextNode(" | "));
                }
            }
        });
    };

    // Populate menus
    createMenuLinks(navMainData, "menu-main");
    createMenuLinks(navFooterData, "menu-footer");

    // Footer additional content
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML += `
            <p>
                Pages built by
                <a href="ghboutique.com.html">Gh Boutique</a> © 2024
            </p>
            <p>
                <a href="https://www.freecodecamp.org/certification/grishmahowale/responsive-web-design" target="_blank">
                    Certified in Responsive Web Design
                </a>,
                <a href="https://www.freecodecamp.org/certification/grishmahowale/javascript-algorithms-and-data-structures-v8" target="_blank">
                    Certified in JS
                </a>
            </p>
            <a id="validation-link-html" href="">
                <img src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png" alt="HTML Validation">
            </a>
            <a id="validation-link-css" href="">
                <img src="https://jigsaw.w3.org/css-validator/images/vcss" alt="CSS Validation">
            </a>
        `;
    }

    // jQuery AJAX to fetch and populate menu data (if needed)
    $(document).ready(() => {
        // Prevent multiple AJAX calls to avoid duplication
        if ($("#menu-main").children().length === 0) {
            $.ajax({
                url: "json/menuData.json", // Path to your JSON file
                method: "GET",
                dataType: "json",
                success: (data) => {
                    // Populate the main menu
                    data.mainMenu.forEach((item) => {
                        if (![...$("#menu-main a")].some((link) => link.href === item.url)) {
                            const link = $("<a>").text(item.name).attr("href", item.url);
                            $("#menu-main").append(link).append(" | ");
                        }
                    });

                    // Populate the footer menu
                    data.footerMenu.forEach((item) => {
                        if (![...$("#menu-footer a")].some((link) => link.href === item.url)) {
                            const link = $("<a>").text(item.name).attr("href", item.url);
                            $("#menu-footer").append(link).append(" | ");
                        }
                    });
                },
                error: (err) => {
                    console.error("Error fetching menu data:", err);
                }
            });
        }
    });
});