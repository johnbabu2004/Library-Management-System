document.getElementById("computer_books").addEventListener("click", () => {
    fetch('books/computer_books.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
      createCards(data);     
    })
    .catch(err => console.error('Error loading JSON:', err));
  

  });
document.getElementById("art_books").addEventListener("click", () => {
    fetch('books/artbooks.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
          createCards(data);    
    })
    .catch(err => console.error('Error loading JSON:', err));
  

  });
  document.getElementById("law_books").addEventListener("click", () => {
    fetch('books/lawbooks.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
          createCards(data);    
    })
    .catch(err => console.error('Error loading JSON:', err));
  

  });

  document.getElementById("medical_books").addEventListener("click", () => {
    fetch('books/medical_books.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
          createCards(data);    
    })
    .catch(err => console.error('Error loading JSON:', err));
  

  });


    // Function to create cards dynamically

    function createCards(books) {
      const container = document.getElementById('books-container'); // Container for cards
    
      // Clear the container first to avoid appending duplicate cards
      container.innerHTML = '';
    
      books.forEach(book => {
        // Create card elements
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-4 col-sm-6 m-4';
    
        card.innerHTML = `
          <div class="card h-100">
            <img src="${book.image}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Author: ${book.author}</p>
              <p class="card-text">Price: ${book.cost}</p>
              <button class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#bookModal" 
                data-title="${book.title}" 
                data-author="${book.author}" 
                data-cost="${book.cost}" 
                data-image="${book.image}" 
                data-description="${book.description}">
                Learn More
              </button>
            </div>
          </div>
        `;
    
        // Append card to container
        container.appendChild(card);
      });
    }
    
  function loadHome() {
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
window.addEventListener('DOMContentLoaded', loadHome);

  document.addEventListener('DOMContentLoaded', () => {
  const bookModal = document.getElementById('bookModal');
  const bookModalLabel = document.getElementById('bookModalLabel');
  const bookModalImage = document.getElementById('bookModalImage');
  const bookModalDescription = document.getElementById('bookModalDescription');
  const bookModalAuthor = document.getElementById('bookModalAuthor');
  const bookModalcost = document.getElementById('bookModalcost');

  bookModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget; // Button that triggered the modal
    const title = button.getAttribute('data-title');
    const author = button.getAttribute('data-author');
    const cost = button.getAttribute('data-cost');
    const image = button.getAttribute('data-image');
    const description = button.getAttribute('data-description');

    // Update modal content
    bookModalLabel.textContent = title;
    bookModalImage.src = image;
    bookModalDescription.textContent = description;
    bookModalAuthor.textContent = `Author: ${author}`;
    bookModalcost.textContent = `cost: ${cost}`;
  });

  // Handle Rent and Buy button clicks
  document.getElementById('renta').addEventListener('click', () => {
    alert('Book added to your rented list!');
    // Add your rent logic here
  });

  document.getElementById('buya').addEventListener('click', () => {
    alert('Book added to your purchased list!');
    // Add your buy logic here
  });
});

