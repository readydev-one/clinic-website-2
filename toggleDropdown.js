  // // Get the 'Types of Care' nav link
  // const typesOfCare = document.getElementById('typesOfCare');

  // // Add click event listener to toggle dropdown visibility
  // typesOfCare.addEventListener('click', function() {
  //   // Toggle 'active' class on the parent li element
  //   this.parentElement.classList.toggle('active');
  // });

  // // Optional: Close the dropdown when clicking outside
  // document.addEventListener('click', function(event) {
  //   const isClickInside = typesOfCare.parentElement.contains(event.target);
  //   if (!isClickInside) {
  //     typesOfCare.parentElement.classList.remove('active');
  //   }
  // });

   // Get the 'Types of Care' nav link
   
   const navLinks = document.querySelectorAll('.nav-link[data-visible]');

   navLinks.forEach(link => {
       link.addEventListener('click', function() {
           const isVisible = this.getAttribute('data-visible') === 'true';
           const dropdownId = this.getAttribute('aria-controls');
           const dropdown = document.getElementById(dropdownId);

           // Toggle the data-visible attribute
           this.setAttribute('data-visible', !isVisible);
           
           // Adjust height with transition animation
           if (!isVisible) {
               dropdown.style.height = dropdown.scrollHeight + 'px';
           } else {
               dropdown.style.height = '0';
           }
       });
   });