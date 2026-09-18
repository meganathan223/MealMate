function initializeMenu() {
    const menuBtn = document.getElementById('menuButton');
    const closeBtn = document.getElementById('closeButton');
    const mobileMenu = document.getElementById('mobileMenu');

    // Functions for opening and closing mobile menu
    // Open menu logic
    menuBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.remove('hidden');
    });

    // Close menu logic
    closeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.add('hidden');
    });

    // Color change for active Navbar link 
    // Get the current page filename 
    const currentPath = window.location.pathname.split("/").pop();

    // If visiting the root directory (like ://domain.com), default it to "index.html"
    const currentPage = (currentPath === "" || currentPath === "index.html") ? "index.html" : currentPath;

    // Select ALL anchor tags inside both the desktop nav and mobile nav containers
    const allLinks = document.querySelectorAll('nav a, #mobileMenu a');

    allLinks.forEach(link => {
        // Get the link destination file name
        const linkHref = link.getAttribute('href').split('/').pop();

        if (linkHref === currentPage) {
            // Add the active color class
            link.classList.add('text-sky-400');
        }
    });
}