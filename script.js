document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    // Highlight active link
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".menu-item");
    const itemWidth = items[0].getBoundingClientRect().width;

    let currentIndex = 0;

    // Function to move to the next slide
    const moveToNextSlide = () => {
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the first slide
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    };

    // Set up automatic sliding
    setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

const overlay = document.querySelector('.overlay');
overlay.classList.toggle('show');
