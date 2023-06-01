const topOfPage = document.querySelector(".topOfPage");
const topPageButton = document.querySelector(".toTopPage");
const bottomOfPage = document.querySelector(".bottomOfPage");
const bottomPageButton = document.querySelector(".toBottomPage");

topPageButton.addEventListener("mousedown", () => {
  window.scroll(0, window.scrollY - 50);
});

topPageButton.addEventListener("dblclick", () => {
  topOfPage.scrollIntoView(false);
});

bottomPageButton.addEventListener("mousedown", () => {
  window.scroll(0, window.scrollY + 50);
});

bottomPageButton.addEventListener("dblclick", () => {
  bottomOfPage.scrollIntoView(false);
});
