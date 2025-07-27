//   // Add click event listener for each nav-link
//   const navLinks = document.querySelectorAll('.nav-link');

//   navLinks.forEach(link => {
//       link.addEventListener('click', function() {
//           // Remove 'active' class from all links
//           navLinks.forEach(link => link.classList.remove('active'));
          
//           // Add 'active' class to the clicked link
//           this.classList.add('active');
//       });
//   });

// function toggleClick() {
//     document.querySelector('.nav-item').classList.toggle('active');

//   }

// Function to set active class on clicked nav-item
document.querySelectorAll('.nav-item .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all nav-items
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Add active class to the parent of the clicked link
      this.parentElement.classList.add('active');
    });
  });
  