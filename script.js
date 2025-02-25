import { attachUserProfileListener } from './js/attachuserprofile.js';
import { createCards } from './js/createcards.js'
import { loadHome } from './js/loadhome.js';
import { loginVerification } from './js/loginverify.js';
import { restoreSession } from './js/restoresession.js';
import { updatePurchasedBooksModal } from './js/updatepurchasedbooksmodal.js';
import { updateRentedBooksModal } from './js/updaterentedbooksmodal.js';


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


window.addEventListener('DOMContentLoaded', loadHome);
window.addEventListener('DOMContentLoaded',   attachUserProfileListener);

document.getElementById('loginButton').addEventListener('click',loginVerification)
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
    const rentalPrice = button.getAttribute('data-rent')
    const description = button.getAttribute('data-description');

    // Update modal content
    bookModalLabel.textContent = title;
    bookModalImage.src = image;
    bookModalDescription.innerHTML = description;
    bookModalAuthor.innerHTML = `<strong>Author:</strong> ${author}`;
    bookModalPrice.innerHTML = `<strong>Price: </strong>${price}`;
    bookModalRent.innerHTML = `<strong>Rental price:</strong> ${rentalPrice}`;
  });
});
// Function to handle the buy action 
const buyButton = document.getElementById('buya');
buyButton.addEventListener('click', () => {
  const title = document.getElementById('bookModalLabel').textContent;
  const author = document.getElementById('bookModalAuthor').textContent.replace('Author: ', '');
  alert("Purcahsed successfully")
  // Check if the user is logged in
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    alert("Please log in first!");
    return;  // Exit if no user is logged in
  }

  const price = document.getElementById('bookModalPrice').textContent.trim().replace('Price: ', '');

  // Set hx-vals for the rent button
  buyButton.setAttribute('hx-vals', JSON.stringify({
    username: user.username,
    title: title,
    author: author,
    price: price
  }));

  // Update purchased books list and hide modal
  updatePurchasedBooksModal();
  const bookModal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));
  bookModal.hide();  // Hide the modal after purchase
});


//handling rented books modal
const rentButton = document.getElementById('renta')
rentButton.addEventListener('click', function () {
  const title = document.getElementById('bookModalLabel').textContent;
  const author = document.getElementById('bookModalAuthor').textContent.replace('Author: ', '');

  // Check if the user is logged in
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    alert("Please log in first!");
    return;  // Exit if no user is logged in
  }

  const rentalPrice = document.getElementById('bookRentalPrice').textContent.replace('Rental-price: ', '');

  // Set hx-vals for the rent button
  rentButton.setAttribute('hx-vals', JSON.stringify({
    username: user.username,
    title: title,
    author: author,
    rental_price: rentalPrice
  }));
  // Update rented books list and hide modal
  alert("Book Rented Successfully");
  updateRentedBooksModal();  // Update the rented books list
  const bookModal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));
  bookModal.hide();  // Hide the modal after renting
});

//  Function to Save Edited Profile Details in LocalStorage
document.getElementById("saveProfileChanges").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  let user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    //  Get updated values from Edit Profile modal
    user.name = document.getElementById("editName").value.trim() || "Unknown";
    user.email = document.getElementById("editEmail").value.trim() || "N/A";
    user.bio = document.getElementById("editBio").value.trim() || "No bio available";

    //  Save updated user details in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    //  Reflect changes in Profile Modal
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("ProfileEmail").innerHTML = `<strong>Email:</strong> ${user.email}`;
    document.getElementById("profileBio").innerHTML = `<strong>Bio:</strong> ${user.bio}`;

    //  Close Edit Profile Modal smoothly
    let editProfileModal = bootstrap.Modal.getInstance(document.getElementById("editProfileModal"));
    if (editProfileModal) {
      editProfileModal.hide();
    }
  } else {
    console.error("No logged-in user found.");
  }
});


// //logout function
//      document.getElementById("logoutButton").addEventListener("click", () => {
//     // Ensure any open modals are properly closed
//     let modalElement = document.querySelector(".modal.show");
//     if (modalElement) {
//         let modalInstance = bootstrap.Modal.getInstance(modalElement);
//         if (modalInstance) {
//             modalInstance.hide();
//         }
//     }

//     // Clear login UI
//     document.getElementById("loginButtonContainer").innerHTML = `
//         <li class="nav-item">
//             <a class="nav-link text-white fs-7" id="userLogin" data-bs-toggle="modal" data-bs-target="#loginModal">
//                 <span><i class="bi bi-person fs-5"></i></span> Login
//             </a>
//         </li>`;

//     localStorage.removeItem("loggedInUser"); 

//     document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

//     document.body.classList.remove("modal-open");
//     document.body.style.overflow = "auto";
// });


document.getElementById("loginModal").addEventListener("shown.bs.modal", function () {
  document.getElementById("loginForm").reset(); //  Clears fields on modal open
  document.getElementById("loginError").innerHTML = ""; //  Clears error message
});
window.onload = function () {
  updateRentedBooksModal();
  updatePurchasedBooksModal();
  restoreSession();

};


// ✅ Logout Function
document.getElementById("logoutButton").addEventListener("click", () => {
  // ✅ Close any open modals
  let modalElement = document.querySelector(".modal.show");
  if (modalElement) {
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  }

  // ✅ Clear login UI
  document.getElementById("loginButtonContainer").innerHTML = `
      <li class="nav-item">
          <a class="nav-link text-white fs-7" id="userLogin" data-bs-toggle="modal" data-bs-target="#loginModal">
              <span><i class="bi bi-person fs-5"></i></span> Login
          </a>
      </li>`;

  localStorage.removeItem("loggedInUser"); 

  document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

  document.body.classList.remove("modal-open");
  document.body.style.overflow = "auto";
});