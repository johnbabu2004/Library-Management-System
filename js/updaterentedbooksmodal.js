export async function updateRentedBooksModal() {  
    const rentBooks = await fetch("http://localhost:3000/rented");
    const data = await rentBooks.json();
    console.log("This is book data: "+data)
    const rentedBooksContainer = document.getElementById('rentedBooksContainer');
    
    // Clear the container to avoid duplicates
    rentedBooksContainer.innerHTML = '';
  
    if (data.length === 0) {
        rentedBooksContainer.innerHTML = 'You have not rented any books yet.';
    } else {
        // Loop through the rented books and append them to the container
        data.forEach(book => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${book.title} by ${book.author} - ${book.rental_price}`;
            rentedBooksContainer.appendChild(listItem);
        });
    }
  }