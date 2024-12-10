document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      
      // Get the target section's ID
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
document.body.addEventListener('click', function() {
    var music = document.getElementById('background-music');
    if (music.paused) {
      music.play();  // Play the music if it is paused
    }
  });

