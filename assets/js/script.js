const toTopButton = document.querySelector(".to-top");

// スクロールしたら表示
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
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

// ハンバーガーメニュー
const hamburger = document.querySelector(".hamburger");
const spNav = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  hamburger.classList.toggle("active");
  spNav.classList.toggle("open");
  overlay.classList.toggle("open");

  const isOpen = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
}

hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".header_menu a").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

overlay.addEventListener("click", toggleMenu);
