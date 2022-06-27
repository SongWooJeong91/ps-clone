const mainSliderUl = document.querySelector('.slider__ul');
const mainSlide = document.querySelectorAll('.slider__ul li');
const mainSlideCount = mainSlide.length;
let mainCurrentIdx = 0;
let mainSlideWidth = window.innerWidth;
const mainPrev = document.querySelector('.prev');
const mainNext = document.querySelector('.next');

// 윈도우 크기 변화 감지해서 slideWidth 변경

// mainSlideWidth = eleWidth.observe(storeSliderView);

window.addEventListener('resize', () => {
  mainSlideWidth = window.innerWidth;
});

makeClone();
// // 앞 뒤로 첫번째 요소, 마지막 요소 복제
function makeClone() {
  // 첫번째 요소를 자식까지 복사해서 cloneSlide에 저장
  let cloneSlideFirst = mainSlide[0].cloneNode(true);
  // 복제된 요소에 클래스 추가
  cloneSlideFirst.classList.add('clone');
  // a.appendChilde(b) a요소 뒤에 추가
  mainSliderUl.appendChild(cloneSlideFirst);

  let cloneSlideLast = mainSlide[mainSlideCount - 1].cloneNode(true);
  cloneSlideLast.classList.add('clone');
  mainSliderUl.prepend(cloneSlideLast);
  // 추가된 li 요소, 너비 설정
  updateWidth();
  // index 1을 보이게 하기 위해 ul 위치 조절
  mainSliderUl.style.left = -mainSlideWidth + 'px';
  // 애니메이션 효과 추가
  setTimeout(function () {
    mainSliderUl.classList.add('animated');
  }, 100);
}
//추가된 li 요소, 너비 설정 함수
function updateWidth() {
  let currentSlides = document.querySelectorAll('.slider__ul li');
  let newSlideCount = currentSlides.length;

  let newWidth = mainSlideWidth * newSlideCount + 'px';
  mainSliderUl.style.width = newWidth;
}

mainPrev.addEventListener('click', () => {
  moveSlide(mainCurrentIdx - 1);
});
mainNext.addEventListener('click', () => {
  moveSlide(mainCurrentIdx + 1);
});

function moveSlide(num) {
  // 슬라이드 한개 너비만큼 이동
  mainSliderUl.style.left = -(mainSlideWidth * num + mainSlideWidth) + 'px';
  mainCurrentIdx = num;
  // 받아온 +1 한 currentIdx를 저장
  if (mainCurrentIdx == mainSlideCount) {
    // 0.5초가 지나고 1번으로 바뀌도록 하기 위해
    setTimeout(() => {
      // 바뀌는게 보이지 않게 애니메이션 효과를 없애준다.
      mainSliderUl.classList.remove('animated');
      // 빠르게 앞에 1번으로 바꿔줄 것!
      mainSliderUl.style.left = -mainSlideWidth + 'px';
      // index는 1;
      mainCurrentIdx = 0;
    }, 500);
    // 0.5초가 지나고 애니메이션 효과가 없으니 0.6초에
    // 애니메이션을 추가해준다.
    setTimeout(() => {
      mainSliderUl.classList.add('animated');
    }, 600);

    // 바뀌는 과정이 보이면 안되니까 애니메이션 지우고
    // 위치는 -800px
  }
  if (mainCurrentIdx == -1) {
    setTimeout(() => {
      mainSliderUl.classList.remove('animated');
      mainSliderUl.style.left = -mainSlideWidth * mainSlideCount + 'px';
      mainCurrentIdx = mainSlideCount - 1;
    }, 500);
    setTimeout(() => {
      mainSliderUl.classList.add('animated');
    }, 600);
  }
}
