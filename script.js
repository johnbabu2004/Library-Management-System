
document.getElementById("computer_books").addEventListener("click", () => {
    fetch('books/computer_books.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
      createCards(data);     
    })
    .catch(err => console.error('Error loading JSON:', err));
  

  });
document.getElementById("art_books").addEventListener("click", () => {
    fetch('books/arts_books.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
          createCards(data);    
    })
    .catch(err => console.error('Error loading JSON:', err));
  

  });
  document.getElementById("law_books").addEventListener("click", () => {
    fetch('books/law_books.json')
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
  const bookModalPrice = document.getElementById('bookModalPrice');
  const bookModalRent = document.getElementById('bookRentalPrice');
  bookModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget; // Button that triggered the modal
    const title = button.getAttribute('data-title');
    const author = button.getAttribute('data-author');
    const price = button.getAttribute('data-price');
    const image = button.getAttribute('data-image');
    const rentalPrice =button.getAttribute('data-rent')
    const description = button.getAttribute('data-description');

    // Update modal content
    bookModalLabel.textContent = title;
    bookModalImage.src = image;
    bookModalDescription.innerHTML = description;
    bookModalAuthor.innerHTML =`<strong>Author:</strong> ${author}`;
    bookModalPrice.innerHTML = `<strong>Price: </strong>${price}`;
    bookModalRent.innerHTML = `<strong>Rental price:</strong> ${rentalPrice}`;
  });
// Sample arrays to store purchased and rented books  
let purchasedBooks = [];  
let rentedBooks = [];  

// Function to open the book modal and populate its content  
// function openBookModal(title, author, price, image, description) {  
//     document.getElementById('bookModalLabel').textContent = title;  
//     document.getElementById('bookModalAuthor').textContent = 'Author: ' + author;  
//     document.getElementById('bookModalPrice').textContent = 'Price: ' + price;  
//     document.getElementById('bookModalImage').src = image;  
//     document.getElementById('bookModalDescription').textContent = description;  
    
//     // Show the modal  
//     const bookModal = new bootstrap.Modal(document.getElementById('bookModal'));  
//     bookModal.show();  
// }  

// Function to handle the buy action  
document.getElementById('buya').addEventListener('click', function () {  
  alert("Book Purchased Successfully");
    const title = document.getElementById('bookModalLabel').textContent;  
    const author = document.getElementById('bookModalAuthor').textContent.replace('Author: ', '');  
    const price = document.getElementById('bookModalPrice').textContent.replace('Price: ', '');  
    const book = { title, author, price };  
    purchasedBooks.push(book);  
    updatePurchasedBooksModal();  

    const bookModal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));  
    bookModal.hide();  
});  

// Function to handle the rent action  
document.getElementById('renta').addEventListener('click', function () {  
    alert("Book Rented Successfully");
    const title = document.getElementById('bookModalLabel').textContent;  
    const author = document.getElementById('bookModalAuthor').textContent.replace('Author: ', '');  
    const rentalPrice = document.getElementById('bookRentalPrice').textContent.replace('Rental-price: ', '')
     
    const book = { title, author,rentalPrice};  
    rentedBooks.push(book);  
    updateRentedBooksModal();  
     
    const bookModal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));  
    bookModal.hide();  
});  

// Function to update the purchased books modal view  
function updatePurchasedBooksModal() {  
    const purchasedBooksContainer = document.getElementById('purchasedBooksContainer');  
    purchasedBooksContainer.innerHTML = ''; // Clear previous entries  

    purchasedBooks.forEach(book => {  
        const listItem = document.createElement('li');  
        listItem.className = 'list-group-item';  
        listItem.textContent = `${book.title} by ${book.author} - ${book.price}`;  
        purchasedBooksContainer.appendChild(listItem);  
    });  
}  

// Function to update the rented books modal view  
function updateRentedBooksModal() {  
    const rentedBooksContainer = document.getElementById('rentedBooksContainer');  
    rentedBooksContainer.innerHTML = ''; // Clear previous entries  

    rentedBooks.forEach(book => {  
        const listItem = document.createElement('li');  
        listItem.className = 'list-group-item';  
        listItem.textContent = `${book.title} by ${book.author} - ${book.rentalPrice}`;  
        rentedBooksContainer.appendChild(listItem);  
    });  
}  

// // Example function to load book cards (already included in your code)  
// // Use this function to load books on the screen and set events on the cards  
// function loadBookCard(book) {  
//     openBookModal(book.title, book.author, book.price, book.image, book.description);  
// }  

// Here you would call loadBookCard when a book card is clicked.
});

function loginVerification(){
  const userName = "username";
  const password = "root";
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("loginPassword").value.trim();
  setTimeout(()=>{
  if(user === userName &&pass === password){
    let loginmessage = document.getElementById("userLogin");
  loginmessage.innerHTML=`<i class="bi bi-person-circle fs-4 m-1"></i><span class="m-1 fs-6">${user}</span>`;
  let loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
  if (loginModal) {
      loginModal.hide();
  }
  }
  else{
    let error = document.getElementById("loginError");
    error.innerHTML = `Wrong ussername/password`;

  }
},200);
  

}


