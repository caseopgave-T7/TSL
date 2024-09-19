// Back to top knap, laves til en const med navnet backToTopButton
const backToTopButton = document.querySelector(".back-to-top-btn");

// Funktion scroller
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

// Gør knappen klikbar, og kalder funktion 'goToTop' når brugeren klikker
backToTopButton.addEventListener("click", goToTop);
