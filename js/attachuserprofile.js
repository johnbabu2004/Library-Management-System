export function attachUserProfileListener() {
    let userProfile = document.getElementById("userProfile");
  
    if (userProfile) {
      userProfile.addEventListener("click", () => {
        let user = JSON.parse(localStorage.getItem("loggedInUser"));
  
        if (user) {
          // ✅ Populate profile modal with user details
          document.getElementById("profileName").textContent = user.name || "Unknown";
          document.getElementById("ProfileEmail").innerHTML = `<strong>Email:</strong> ${user.email || "N/A"}`;
          document.getElementById("ProfileUserName").innerHTML = `<strong>Username:</strong> ${user.username || "N/A"}`;
          document.getElementById("profileBio").innerHTML = `<strong>Bio:</strong> ${user.bio || "No bio available"}`;
  
          // ✅ Populate Edit Profile Modal
          document.getElementById("editName").value = user.name || "";
          document.getElementById("editEmail").value = user.email || "";
          document.getElementById("editBio").value = user.bio || "";
        }
      });
    }
  }
  