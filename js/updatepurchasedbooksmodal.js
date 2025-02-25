
 export async function updatePurchasedBooksModal() {  
    const purchasedBooks = await fetch("http://localhost:3000/purchased");
    const data = await purchasedBooks.json();
    
    const purchasedBooksContainer = document.getElementById('purchasedBooksContainer');
    
    // Clear the container to avoid duplicates
    purchasedBooksContainer.innerHTML = '';
  
    if (data.length === 0) {
      purchasedBooksContainer.innerHTML = 'You have not purchased any books yet.';
    } else {
        // Loop through the purchased books and append them to the container
        data.forEach(book => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${book.title} by ${book.author} - ${book.price}`;
            purchasedBooksContainer.appendChild(listItem); // Fixed the container here
        });
    }
  }