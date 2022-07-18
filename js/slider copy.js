// 이미지 슬라이드
const mainSliderUl = document.querySelector('.slider__ul');
const mainSlide = document.querySelectorAll('.slider__ul li');
const mainSlideCount = mainSlide.length;
let mainCurrentIdx = 0;
let mainSlideWidth = window.innerWidth;
// 버튼
const mainPrev = document.querySelector('.prev');
const mainNext = document.querySelector('.next');

makeClone();
// 새로운 요소 추가
function makeClone() {
  let cloneSlideFirst = mainSlide[0].cloneNode(true);
  cloneSlideFirst.classList.add('clone');
  mainSliderUl.appendChild(cloneSlideFirst);

  let cloneSlideLast = mainSlide[mainSlideCount - 1].cloneNode(true);
  cloneSlideLast.classList.add('clone');
  mainSliderUl.prepend(cloneSlideLast);
  updateWidthSlide();
  updatePositionSlide();
  setTimeout(function () {
    mainSliderUl.classList.add('animated');
  }, 100);
}
// 추가된 요소 업데이트
function updateWidthSlide() {
  // console.log('updateWidthSlide()');
  let currentSlides = document.querySelectorAll('.slider__ul li');
  let newSlideCount = currentSlides.length;

  let newWidth = mainSlideWidth * newSlideCount + 'px';
  mainSliderUl.style.width = newWidth;
}
// 추가된 요소 위치 잡기
function updatePositionSlide() {
  // console.log('updatePositionSlide()');
  mainSliderUl.style.left = -mainSlideWidth + 'px';
}

// 버튼 이벤트
mainPrev.addEventListener('click', (e) => {
  e.preventDefault();
  moveSlide(mainCurrentIdx - 1);
});
mainNext.addEventListener('click', (e) => {
  e.preventDefault();
  moveSlide(mainCurrentIdx + 1);
});

// 슬라이드 애니메이션 함수
function moveSlide(num) {
  mainSliderUl.style.left = -(mainSlideWidth * num + mainSlideWidth) + 'px';
  mainCurrentIdx = num;
  if (mainCurrentIdx == mainSlideCount) {
    setTimeout(() => {
      mainSliderUl.classList.remove('animated');
      mainSliderUl.style.left = -mainSlideWidth + 'px';
      mainCurrentIdx = 0;
    }, 500);
    setTimeout(() => {
      mainSliderUl.classList.add('animated');
    }, 600);
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

// identity slide
const conCard = document.querySelector('.con__card');
const conCardLi = document.querySelectorAll('.con__card>li');
let conCardCount = conCardLi.length;
let cardIdx = 0;
const conCardSlide = document.querySelector('.con__card-slide');
let cardSlideWidth = conCard.getBoundingClientRect().width / conCardCount;
const cardBtnBox = document.querySelector('.card__btn-box');

// 새로운 요소 추가
function makeCloneCard() {
  console.log('새로운 요소 추가 함수 호출');
  let cloneCardSlideFirst = conCardLi[0].cloneNode(true);
  let cloneCardSlideSecond = conCardLi[1].cloneNode(true);
  cloneCardSlideFirst.classList.add('clone');
  cloneCardSlideSecond.classList.add('clone');
  conCard.appendChild(cloneCardSlideFirst);
  conCard.appendChild(cloneCardSlideSecond);

  let cloneCardSlideLast = conCardLi[conCardCount - 1].cloneNode(true);
  cloneCardSlideLast.classList.add('clone');
  conCard.prepend(cloneCardSlideLast);
  updateWidthCardSlide();
  updatePositionCardSlide();
  setTimeout(function () {
    conCard.classList.add('animated');
  }, 100);
}
// 추가된 요소 업데이트
function updateWidthCardSlide() {
  console.log('ul 너비 설정 함수 호출');
  let currentCardSlides = document.querySelectorAll('.con__card>li');
  let newCardSlideCount = currentCardSlides.length;
  conCard.style.width = `calc(45% * ${newCardSlideCount})`;
}
// 추가된 요소 위치 잡기
function updatePositionCardSlide() {
  console.log('ul 처음 자리 맞춤');
  conCard.style.left = -cardSlideWidth + 50 + 'px';
}
// createBtn();
// 버튼 추가 함수
function createBtn() {
  console.log('버튼 생성 함수 호출');
  for (let i = 0; i < conCardCount; i++) {
    let cardBtn = document.createElement('span');
    cardBtn.setAttribute('class', 'card__btn-span');
    cardBtnBox.appendChild(cardBtn);
  }
}

// 버튼 이벤트 함수
function cardBtnEven() {
  console.log('버튼 이벤트 함수 호출');
  const cardBtnEle = document.querySelectorAll('.card__btn-box>span');
  cardBtnEle[cardIdx].classList.add('active');
  cardBtnEle.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      cardBtnEle[cardIdx].classList.remove('active');
      moveCardSlide(index);
      cardIdx = index;
      cardBtnEle[cardIdx].classList.add('active');
    });
  });
}
// 슬라이드 애니메이션 함수
function moveCardSlide(num) {
  console.log('버튼 애니메이션 함수 호출');
  conCard.style.left = -cardSlideWidth + -cardSlideWidth * num + 50 + 'px';
}

// if (window.innerWidth <= 991) {
//   console.log('처음 뷰사이즈 991 이하 일 때');
//   makeCloneCard();
//   createBtn();
//   cardBtnEven();
// }
