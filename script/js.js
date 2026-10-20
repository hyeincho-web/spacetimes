// ====================
// 모달 팝업 닫기
// ====================
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal .close");

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// ====================
// 햄버거 메뉴
// ====================

const mobBtn = document.querySelector(".mob_btn");
const header = document.querySelector("header");

// 메뉴 열기 / 닫기
function toggleMenu() {
  header.classList.toggle("mOpen");

  const isOpen = header.classList.contains("mOpen");

  mobBtn.setAttribute("aria-expanded", String(isOpen));
  mobBtn.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
}

// 마우스 클릭
mobBtn.addEventListener("click", toggleMenu);

// 키보드 조작
mobBtn.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// ====================
// 굿즈 수량 증감
// ====================

const goodsCounts = document.querySelectorAll(".goods_count");

goodsCounts.forEach(function (box) {
  const minus = box.querySelector("button:first-child");
  const plus = box.querySelector("button:last-child");
  const number = box.querySelector("span");

  let count = 0;

  // 수량 증가
  plus.addEventListener("click", function () {
    count++;
    number.textContent = count;
  });

  // 수량 감소
  minus.addEventListener("click", function () {
    if (count > 0) {
      count--;
      number.textContent = count;
    }
  });
});
