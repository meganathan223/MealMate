<<<<<<< HEAD
 function loadComponent(elementId, filePath) {
=======
function loadComponent(elementId, filePath, isInPagesFolder) {
>>>>>>> 8422e390cba49f51e9c637c670db6c66a2248718
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(elementId);
            container.innerHTML = data;
            initializeMenu()

            // FIX LINKS DYNAMICALLY IF INSIDE THE PAGES FOLDER
            if (isInPagesFolder) {
                const links = container.querySelectorAll('a');

                links.forEach(link => {
                    const href = link.getAttribute('href');

                    if (href) {
                        // If link goes back to index.html, step out of the folder
                        if (href === 'index.html') {
                            link.setAttribute('href', '../index.html');
                        }
                        // If link goes to a subpage, remove the 'pages/' prefix since we are already inside it
                        else if (href.startsWith('pages/')) {
                            link.setAttribute('href', href.replace('pages/', ''));
                        }
                    }
                });
            }
        })
        .catch(error => console.error(error));
}

// Load components when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
    loadComponent("navbar-placeholder", "components/navbar.html");
    loadComponent("footer-placeholder", "components/footer.html");
});
=======
    // Check if the current URL contains the "/pages/" folder
    const isInPagesFolder = window.location.pathname.includes('/pages/');

    // if in subfolder, step out with '../'
    const navbarPath = isInPagesFolder ? '../components/navbar.html' : 'components/navbar.html';
    const footerPath = isInPagesFolder ? '../components/footer.html' : 'components/footer.html';

    loadComponent("navbar-placeholder", navbarPath, isInPagesFolder);
    loadComponent("footer-placeholder", footerPath, isInPagesFolder);
});
>>>>>>> 8422e390cba49f51e9c637c670db6c66a2248718
