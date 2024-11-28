// src/components/ScrollAnimations.js
export const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);  // Dejar de observar una vez que se muestra
        }
      });
    });
  
    const elements = document.querySelectorAll('.mission-item, .team-member, .testimonial');
    elements.forEach(el => observer.observe(el));
  };
  
  // Parallax effect
  export const initParallaxEffect = () => {
    window.addEventListener('scroll', () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        const yPos = -(window.scrollY * speed) / 100;
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  };
  