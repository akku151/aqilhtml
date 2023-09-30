/* script.js */

// Smooth scrolling for navigation links
var navigationLinks = document.querySelectorAll('header nav a');

for (var i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function(e) {
    e.preventDefault();

    var sectionId = e.target.getAttribute('href');
    var section = document.querySelector(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
}
