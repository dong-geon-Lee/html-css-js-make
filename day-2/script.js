// 파란색 막대 그래프를 표시하기 위해서 필요하다. (style)
const progress = document.querySelector("#progress");

// 이전 버튼을 누르면 파랑색 그래프가 지워져야됨을 표시한다.
const prev = document.getElementById("prev");

// 반대로 파랑색 막대가 생성된다.
const next = document.getElementById("next");

// 원의 개수를 알 수 있다. border 색깔을 변경
let circles = document.querySelectorAll(".circle");

// 클릭에 따른 상태 조절을 통제하기 위한 변수
let currentActive = 1;

// next를 누를 떄 기대하는 과정 나열
next.addEventListener("click", () => {
  // 숫자 1이 오른다. 즉 active 가 circle 클래스에 추가된다.
  currentActive++;

  // 클릭 할 수록 숫자가 circle 클래스보다 훨씬 커질텐데, 그를 방지한다.
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // currentActive가 정상적인 숫자(max 4개)이하면 update 함수를 호출한다.
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = circles.length;
  }

  update();
});

const update = () => {
  // active 클래스를 추가한다. 파랑색 테두리 입힌다.
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // 이제 막대 그래프에 style을 입힐 차례다.
  const actives = document.querySelectorAll(".active");

  // 첫번쨰 active는 무시한다. 0 / 3 은 무조건 0%이므로 파랑색 막대가 없다.
  // 2 - 1 / 4 - 1 = 1 / 3 => 0.33 * 100% = 33% 이므로 한 칸 증가한다.

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
