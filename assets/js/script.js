const toTopButton = document.querySelector(".to-top");

// スクロールしたら表示
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopButton.classList.add("is-show");
  } else {
    toTopButton.classList.remove("is-show");
  }
});

// クリックでページ上部へ戻る
toTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
