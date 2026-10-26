// ====================
// 모달 팝업 닫기
// ====================
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal .close");

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// ====================
// 모달 팝업 애니메이션
// ====================
const modalAni = document.querySelector(".modal .inner");

gsap.from(".modal .inner", {
  opacity: 0,
  y: 30,
  scale: 0.96,

  duration: 2.5,
  ease: "power3.out",

  clearProps: "transform,opacity",
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
  const number = box.querySelector("p");

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

// ====================
// HEADER STAR TWINKLE
// ====================

if (typeof gsap !== "undefined") {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!reduceMotion) {
    gsap.to(".twinkle_layer", {
      opacity: 0.9,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  if (!reduceMotion) {
    gsap.to(".twinkle", {
      opacity: 0.9,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }
}

// ====================
// main visul slide
// ====================

$("#main_visual .card_wrap").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,

  // ⭐ autoplay
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  infinite: true,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// ====================
// VIDEO PLAY
// ====================

// 요소 선택
const video = document.querySelector("#video video");
const videoBtn = document.querySelector("#video .video_play");
const videoWrap = document.querySelector("#video .video_wrap");

// 재생 버튼 클릭
videoBtn.addEventListener("click", function () {
  video.controls = true;

  video.play().catch(function (error) {
    console.error("동영상 재생 실패", error);
  });
});

// 영상 재생 중
video.addEventListener("play", function () {
  videoWrap.classList.add("is-playing");
});

// 영상 일시정지
video.addEventListener("pause", function () {
  videoWrap.classList.remove("is-playing");
});

// 영상 종료
video.addEventListener("ended", function () {
  video.controls = false;
  videoWrap.classList.remove("is-playing");
});

/* ⭐⭐⭐ 왕창 꼬여버림 ⭐⭐⭐
// ====================
// 월간 굿즈 썸네일 갤러리
// ====================
// 1. 큰 이미지 선택
const thumb = document.querySelector(".monthly_thumb img");

// 2. 작은 이미지 4개 선택
const btns = document.querySelectorAll(".monthly_thumb_list img");

// 3. 작은 이미지마다 클릭 이벤트 등록
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e){

    e.preventDefault(); // 기본 링크 이동 방지

    // 모든 작은 이미지의 선택 표시 제거
    btns.forEach(function (img) {
      img.classList.remove("is-active")
    });

    // 클릭한 이미지에만 선택 표시 추가
    btn.classList.add("is-active");
  });
});

// 첫 번째 이미지를 초기 선택 상태로 지정
btns[0].classList.add("is-active");

// 이전 애니메이션 중지
gsap.killTweensOf(thumb);

// 기존 이미지 사라지기
gsap.to(thumb, {
  opacity: 0,
  scale: 0.97,
  duration: 0.2,
  ease: "power2.in",

  onComplete: function () {
    // onComplete - GSAP 애니메이션이 끝나면

    // 이미지 주소 교체
    // 클릭한 이미지로 큰 이미지 교체 ⭐⭐⭐
    thumb.src = btn.src;
    // 큰 이미지의 주소를 클릭한 작은 이미지의 주소로 바꿔라

    // 새로운 이미지 나타나기
    gsap.fromTo(
      thumb,
      {
        opacity: 0,
        scale: 1.03,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out"
      }
    );
  },
});

gsap.to(".monthly_thumb", {
  scrollTrigger: ".monthly_thumb", // start animation when ".box" enters the viewport
  y: ,
}); */

// ====================
// MEMBERSHIP ANIMATION
// ====================

// ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

// 움직임 줄이기 설정 확인
const reduceMembershipMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMembershipMotion) {
  // 멤버십 등장 애니메이션
  const membershipTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#membership",
      start: "top 65%",
      once: true,
    },
  });

  // 1. 11월호 로고 등장
  membershipTl.from("#membership .logo_vol11", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out",
  });

  // 2. 텍스트와 버튼 순차 등장
  membershipTl.from(
    "#membership .membershipL h1, #membership .benefit, #membership .membershipL button",
    {
      opacity: 0,
      y: 25,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=0.3"
  );

  // 3. 오른쪽 매거진 표지 등장
  membershipTl.from(
    "#membership .membershipR img",
    {
      opacity: 0,
      x: 50,
      rotation: 3,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
    },
    0.2
  );
}