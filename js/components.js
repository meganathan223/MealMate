function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Load components when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-placeholder", "components/navbar.html");
    loadComponent("footer-placeholder", "components/footer.html");
});