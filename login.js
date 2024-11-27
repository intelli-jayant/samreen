// Open Pop-Up
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  // Close Pop-Up
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent form submission

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // Redirect to index.html on success
          window.location.href = "index.html";
        } else {
          // Show error message for invalid credentials
          alert(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while logging in. Please try again.");
      }
    });