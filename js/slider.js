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

cardMediaFn();

function cardMediaFn() {
  makeCloneCard();
  // 새로운 요소 추가
  function makeCloneCard() {
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
    let currentCardSlides = document.querySelectorAll('.con__card>li');
    let newCardSlideCount = currentCardSlides.length;
    let newCardWidth = cardSlideWidth * newCardSlideCount + 'px';
    conCard.style.width = newCardWidth;
  }
  // 추가된 요소 위치 잡기
  function updatePositionCardSlide() {
    conCard.style.left = -cardSlideWidth + 50 + 'px';
  }
}
createBtn();

// 버튼 추가 함수
function createBtn() {
  for (let i = 0; i < conCardCount; i++) {
    let cardBtn = document.createElement('span');
    cardBtn.setAttribute('class', 'card__btn-span');
    cardBtnBox.appendChild(cardBtn);
  }
}
cardBtnEven();
// 버튼 이벤트 함수
function cardBtnEven() {
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
  conCard.style.left = -cardSlideWidth + -cardSlideWidth * num + 50 + 'px';
}
