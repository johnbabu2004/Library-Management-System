
    // Function to create cards dynamically
    export function createCards(books) {
        const container = document.getElementById('books-container'); // Container for cards
      
        // Clear the container first to avoid appending duplicate cards
        container.innerHTML = '';
      
        books.forEach(book => {
          // Create card elements
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-4 col-sm-6 m-4';
      
          card.innerHTML = `
            <div class="card">
              <img src="${book.image}" class="card-img-top" alt="${book.title}">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text"><strong>Author:</strong> ${book.author}</p>
                <p class="card-text"><strong>Price:</strong> ${book.price}</p>
                <p class="card-text"><strong>Rental-price:</strong> ${book.rental_price}</p>
  
                <button class="btn btn-primary mb-2" 
                  data-bs-toggle="modal" 
                  data-bs-target="#bookModal" 
                  data-title="${book.title}" 
                  data-author="${book.author}" 
                  data-price="${book.price}" 
                  data-image="${book.image}" 
                  data-rent="${book.rental_price}"
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

