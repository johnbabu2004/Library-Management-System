export function loadHome() {
    const container = document.getElementById('books-container');

    // Fetch the content of home.html
    fetch('home.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching home.html: ${response.statusText}`);
            }
            return response.text(); // Convert the response to text
        })
        .then(html => {
            container.innerHTML = html; // Inject the HTML content into the container
        })
        .catch(error => {
            console.error('Error loading content:', error);
            container.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
}