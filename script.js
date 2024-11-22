// Add event listener for window resize
window.addEventListener('resize', function() {
    // Adjust layout or content based on window width
    if (window.innerWidth < 768) {
      // Mobile view
      // For example, you could hide certain sections or adjust font sizes
      document.getElementById('mobile-only-section').style.display = 'block';
      document.getElementById('desktop-only-section').style.display = 'none';
    } else {
      // Desktop view
      document.getElementById('mobile-only-section').style.display = 'none';
      document.getElementById('desktop-only-section').style.display = 'block';
    }
  });