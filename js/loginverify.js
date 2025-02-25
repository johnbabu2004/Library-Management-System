import { attachUserProfileListener } from "./attachuserprofile.js";

export async function loginVerification() {
    let spinner = document.getElementById("login-spinner");
    
    if (spinner) {
        spinner.style.display = "inline-block"; // Show spinner
    }

    setTimeout(async () => {
        try {
            const response = await fetch("http://localhost:3000/users"); // ✅ Fixed URL
            if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

            const users = await response.json();
            let enteredUsername = document.getElementById("username").value.trim();
            let enteredPassword = document.getElementById("loginPassword").value.trim();

            if (!enteredUsername || !enteredPassword) {
                document.getElementById("loginError").innerHTML = "Please enter username and password.";
                return;
            }

            const user = users.find(u => u.username === enteredUsername);

            if (!user) {
                document.getElementById("loginError").innerHTML = "Wrong username/password.";
                return;
            }

            if (user.password !== enteredPassword) {
                document.getElementById("loginError").innerHTML = "Wrong username/password.";
                return;
            }

            localStorage.setItem("loggedInUser", JSON.stringify(user));

            let loginMessage = document.getElementById("loginButtonContainer");
            if (loginMessage) {
                loginMessage.innerHTML = `
                    <li class="nav-item m-2">
                        <a class="nav-link text-white fs-7" id="userProfile" data-bs-toggle="modal" data-bs-target="#viewProfileModal">
                            <i class="bi bi-person-circle fs-6 m-1"></i>
                            <span class="m-1 fs-6" id="loggedInUsername">${user.username}</span>
                        </a>
                    </li>`;
            }

            // ✅ Ensure `attachUserProfileListener()` is available
            setTimeout(() => {
                if (typeof attachUserProfileListener === "function") {
                    attachUserProfileListener();
                } else {
                    console.error("attachUserProfileListener is not defined. Check the import.");
                }
            }, 100);

            let modalElement = document.getElementById("loginModal");
            if (modalElement) {
                let loginModal = bootstrap.Modal.getInstance(modalElement);
                if (loginModal) {
                    loginModal.hide();
                }
                setTimeout(() => {
                    let backdrops = document.querySelectorAll(".modal-backdrop");
                    backdrops.forEach(backdrop => backdrop.remove());
                }, 500);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            if (spinner) {
                spinner.style.display = "none"; // Hide spinner after processing
            }
        }
    }, 1000);
}
