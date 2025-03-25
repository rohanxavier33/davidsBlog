// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // You can add any JavaScript functionality here
    
    // For example, to toggle active class in navigation
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
      });
    });
    
    // Here you would add code to handle the actual SoundCloud and YouTube embeds
    // For example:
    /*
    // SoundCloud embed example
    const scEmbed = document.querySelector('.soundcloud-embed');
    if (scEmbed) {
      // Replace placeholder with actual SoundCloud iframe
      // You would need the actual SoundCloud embed code here
    }
    
    // YouTube embed example
    const ytEmbed = document.querySelector('.youtube-embed');
    if (ytEmbed) {
      // Replace placeholder with actual YouTube iframe
      // You would need the actual YouTube embed code here
    }
    */
  });