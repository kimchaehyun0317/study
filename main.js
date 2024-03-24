// GSAP 이용해서 구현한 스크롤 효과입니다. 원래 그냥 자바스크립트를 구현하고 싶었는데
//레퍼런스 사이트에 효과가 너무 따라해보고 싶어서 찾다가 작성하게 되었습니다.
let t1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".center-line",
      start: "top 5%",
      end: "bottom bottom",
      scrub: 2,
    },
  })
  .from(".scroll-line", { height: 0, ease: "none" });

// 스무스 탑버튼...이라고 해서 찾았는데 되는걸까요...? 차이를 모르겠어요...
// css로도 스크롤 스무스를 넣어보긴했는데 차이가 없어서...

let Top = document.querySelector("#arrow");

Top.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
