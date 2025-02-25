export function handleResponse(event) {
    if (event.detail.successful) {
         console.log(event)
        alert("Sign-up successful!");
        
        // Close the modal properly
        let modalElement = document.getElementById('signUpModal');
        let modalInstance = bootstrap.Modal.getInstance(modalElement); // Get existing instance
        if (modalInstance) {
            modalInstance.hide(); // Close the modal
        }
  
        // Reset the form
        document.getElementById("signUpForm").reset();
    } else {
        alert("Sign-up failed. Please try again.");
    }
  }
  window.handleResponse = handleResponse;