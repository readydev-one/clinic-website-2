const form = document.getElementById('form');
const result = document.getElementById('result');
const successOverlay = document.getElementById('success-overlay');
const closeBtn = document.getElementById('close-btn');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: json
      })
      .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
              showSuccessMessage(); // Show the success overlay
          } else {
              console.log(response);
              result.innerHTML = json.message;
          }
      })
      .catch(error => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
      })
      .then(function() {
          form.reset();
          setTimeout(() => {
              result.style.display = "none";
          }, 3000);
      });
});

// Show success message
function showSuccessMessage() {
  successOverlay.style.display = 'flex'; // Display the success overlay
}

// Close the success overlay when the close button is clicked
closeBtn.addEventListener('click', function() {
  successOverlay.style.display = 'none'; // Hide the success overlay
});
