const scrollImageTwo = document.querySelector(".scrollImageTwo");
const scrollImageThree = document.querySelector(".scrollImageThree");
const scrollToTop = document.querySelector(".scrollToTop");

const topOfPage = document.querySelector(".topOfPage");
const elementTwo = document.querySelector(".hero-image-two");
const elementThree = document.querySelector(".hero-image-three");

scrollImageTwo.addEventListener("click", () => {
  elementTwo.scrollIntoView(true);
});

scrollImageThree.addEventListener("click", () => {
  elementThree.scrollIntoView(true);
});

scrollToTop.addEventListener("click", () => {
  topOfPage.scrollIntoView(false);
});
