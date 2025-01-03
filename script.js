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
    const carousel = document.querySelector(".testimonial-carousel");
    let scrollAmount = 0;
  
    setInterval(() => {
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 300; // Adjust scroll amount for each step
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 3000); // Adjust timing (3000ms = 3s)
  });
  