document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      
     
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

     
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
      music.play();  
    }
  });

