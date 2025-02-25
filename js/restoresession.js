// export function restoreSession() {
//     let storedUser = localStorage.getItem("loggedInUser");
//     let loginContainer = document.getElementById("loginButtonContainer");

//     if (!loginContainer) {
//         console.warn("Element with ID 'loginButtonContainer' not found.");
//         return;
//     }

//     if (storedUser) {
//         let user = JSON.parse(storedUser);
//         loginContainer.innerHTML = `
//             <li class="nav-item m-2">
//                 <a class="nav-link text-white fs-7" id="userProfile" data-bs-toggle="modal" data-bs-target="#viewProfileModal">
//                     <i class="bi bi-person-circle fs-6 m-1"></i>
//                     <span class="m-1 fs-6">${user.username}</span>
//                 </a>
//             </li>
//         `
//         //  Attach event listener for Logout button
//         setTimeout(() => attachLogoutListener(), 100);
//     } else {
//         loginContainer.innerHTML = `
//             <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
//         `;
//     }
// }

// // Function to Attach Logout Event Listener
// function attachLogoutListener() {
//     const logoutButton = document.getElementById("logoutButton");
//     if (logoutButton) {
//         logoutButton.addEventListener("click", (event) => {
//             event.preventDefault();
//             localStorage.removeItem("loggedInUser"); // Remove user data
//             restoreSession(); // Refresh UI
//         });
//     }
// }


export function restoreSession() {
    let storedUser = localStorage.getItem("loggedInUser");
    let loginContainer = document.getElementById("loginButtonContainer");
  
    if (!loginContainer) {
      console.warn("Element with ID 'loginButtonContainer' not found.");
      return;
    }
  
    if (storedUser) {
      let user = JSON.parse(storedUser);
      loginContainer.innerHTML = `
          <li class="nav-item m-2">
              <a class="nav-link text-white fs-7" id="userProfile" data-bs-toggle="modal" data-bs-target="#viewProfileModal">
                  <i class="bi bi-person-circle fs-6 m-1"></i>
                  <span class="m-1 fs-6">${user.username}</span>
              </a>
          </li>
      `;
      attachUserProfileListener(); // Attach listener after restoring session
    } else {
      loginContainer.innerHTML = `
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
      `;
    }
  }