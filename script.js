// Book Now button functionality
document.getElementById('bookNowBtn').addEventListener('click', () => {
  alert('Thank you for choosing Kingsukh Guest House! Our team will contact you soon.');
});

// Contact form functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    this.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
