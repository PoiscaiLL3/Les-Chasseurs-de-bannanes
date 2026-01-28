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
