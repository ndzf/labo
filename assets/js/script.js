document.addEventListener("DOMContentLoaded", (e) => {
  const splide = new Splide(".splide", {
    gap: "3rem",
    focus: "center",
    perPage: 3,
    classes: {
      arrows: 'splide__arrows d-none',
      arrow: 'splide__arrow d-none',
      prev: 'splide__arrow--prev d-none',
      next: 'splide__arrow--next d-none',
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
    }
  });
  splide.mount();
})