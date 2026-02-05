const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

function closeMenu() {
  mobileMenu.style.display = "none";
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

mobileMenu.addEventListener("click", closeMenu);
document.addEventListener("click", closeMenu);

// Carousel navigation pour les équipes
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
const carousel = document.getElementById("teams-carousel");

if (carouselPrev && carouselNext && carousel) {
  const scrollAmount = 320; // largeur d'une carte + gap

  carouselPrev.addEventListener("click", () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  carouselNext.addEventListener("click", () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });
}

/* Gestion de projet — calcul d'avancement basé sur points fixes */
(function() {
  function updateFixedProgress() {
    const block = document.querySelector('.gestion-projet-block');
    if (!block) return;
    const doneItems = block.querySelectorAll('.gestion-projet-column:first-of-type ul li');
    const allItems = block.querySelectorAll('.gestion-projet-column ul li');
    let total = 0;
    let done = 0;

    allItems.forEach(li => {
      const w = parseFloat(li.dataset.weight || '1');
      total += isFinite(w) ? w : 0;
    });

    doneItems.forEach(li => {
      const w = parseFloat(li.dataset.weight || '1');
      done += isFinite(w) ? w : 0;
    });

    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    const fill = document.getElementById('progress-fill');
    const percentLabel = document.getElementById('progress-percent');
    const progressBar = document.getElementById('progress-bar');
    if (fill) fill.style.width = percent + '%';
    if (percentLabel) percentLabel.textContent = percent + '%';
    if (progressBar) progressBar.setAttribute('aria-valuenow', percent);
  }

  document.addEventListener('DOMContentLoaded', updateFixedProgress);
})();

/* Vider le formulaire de contact après soumission */
(function() {
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          contactForm.reset();
          alert('Message envoyé avec succès !');
        }
      }).catch(error => {
        console.error('Erreur:', error);
      });
    });
  }
})();

