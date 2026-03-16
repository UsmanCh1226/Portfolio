const revealElements = document.querySelectorAll('.reveal');
const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3'];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el, index) => {
  el.classList.add(staggerClasses[index % staggerClasses.length]);
  observer.observe(el);
});
