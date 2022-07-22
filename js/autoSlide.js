// 이미지 슬라이드
const conStoreImgView = document.querySelector('.con__store-imgView');
const storeSliderUl = document.querySelector('.con__store-ul');
const storeSlide = document.querySelectorAll('.con__store-ul li');
const storeSlideCount = storeSlide.length;
let storeSlideWidth = conStoreImgView.getBoundingClientRect().width;
let storeCurrentIdx = 0;
// 버튼
const storePrev = document.querySelector('.con__store-prevBtn button');
const storeNext = document.querySelector('.con__store-nextBtn button');
// 텍스트 슬라이드
const conStoreTextwrap = document.querySelector('.con__store-textwrap');
const conStoreTextUl = document.querySelector('.con__store-text');
const conStoreTextSlide = document.querySelectorAll('.con__store-text li');
const storeTextCount = conStoreTextSlide.length;
let storeTextWidth = conStoreTextwrap.getBoundingClientRect().width;
// 상품안내
const productSlideWrap = document.querySelector('.product__slide-wrap');
const productUl = document.querySelector('.con__product-ul');
const productItem = document.querySelectorAll('.con__product-ul > li');
let productSlideWidth = productSlideWrap.getBoundingClientRect().width;
let productItemCount = productItem.length;
const productBtnBox = document.querySelector('.product__btn-box');
let productSlideIdx = 0;

// 요소 추가 생성 함수 호출
// 매장안내 생성
autoMakeClone(
  storeSlide[0],
  storeSliderUl,
  storeSlide[storeSlideCount - 1],
  '.con__store-ul li',
  storeSlideWidth,
);
// 매장안내 텍스트 생성
autoMakeClone(
  conStoreTextSlide[0],
  conStoreTextUl,
  conStoreTextSlide[storeTextCount - 1],
  '.con__store-text li',
  storeTextWidth,
);

// 첫번째 요소, 마지막 요소 복제 함수
function autoMakeClone(
  FirstSlideLi,
  slideUl,
  lastSlideLi,
  autoSlideLi,
  autoSlideWidth,
) {
  let cloneSlideFirst = FirstSlideLi.cloneNode(true);
  cloneSlideFirst.classList.add('clone');
  slideUl.appendChild(cloneSlideFirst);

  let cloneSlideLast = lastSlideLi.cloneNode(true);

  cloneSlideLast.classList.add('clone');

  slideUl.prepend(cloneSlideLast);
  // 추가된 li 요소, 너비 설정
  updateWidth(autoSlideLi, autoSlideWidth, slideUl);
  // 추가된 요소 위치
  updatePosition();
  // 애니메이션 효과 추가
  setTimeout(function () {
    slideUl.classList.add('animated');
  }, 100);
}
//추가된 li 요소, 너비 설정 함수
// updateWidth(ul의 li요소, 이동할 너비, 움직일 ul)
function updateWidth(autoSlideLi, autoSlideWidth, autoSlideUl) {
  let currentSlidesAuto = document.querySelectorAll(autoSlideLi);
  let newSlideCountAuto = currentSlidesAuto.length;

  let newWidthAuto = autoSlideWidth * newSlideCountAuto + 'px';
  autoSlideUl.style.width = newWidthAuto;
}
function updatePosition() {
  // index 1을 보이게 하기 위해 ul 위치 조절
  storeSliderUl.style.left = -storeSlideWidth + 'px';
  conStoreTextUl.style.transform = `translateX(${-storeTextWidth}px)`;
  productUl.style.left = -productSlideWidth + 'px';
}

// 실행부분 ---------------------------------------------
let timerId;
// 매장안내 실행 함수 호출
moveAutoSlide(storeCurrentIdx);

// 매장안내 슬라이드 실행 함수
function moveAutoSlide(num) {
  // 슬라이드 한개 너비만큼 이동
  storeSliderUl.style.left = -(storeSlideWidth * num + storeSlideWidth) + 'px';
  conStoreTextUl.style.transform = `translateX(${-(
    storeTextWidth * num +
    storeTextWidth
  )}px)`;
  storeCurrentIdx = num;
  if (storeCurrentIdx == storeSlideCount) {
    setTimeout(() => {
      storeSliderUl.classList.remove('animated');
      conStoreTextUl.classList.remove('animated');
      storeSliderUl.style.left = -storeSlideWidth + 'px';
      conStoreTextUl.style.transform = `translateX(${-storeTextWidth}px)`;
      storeCurrentIdx = 0;
    }, 500);
    setTimeout(() => {
      storeSliderUl.classList.add('animated');
      conStoreTextUl.classList.add('animated');
    }, 600);
  }
  if (storeCurrentIdx == -1) {
    setTimeout(() => {
      storeSliderUl.classList.remove('animated');
      conStoreTextUl.classList.remove('animated');
      storeSliderUl.style.left = -storeSlideWidth * storeSlideCount + 'px';
      conStoreTextUl.style.transform = `translateX(${
        -storeTextWidth * storeTextCount
      }px)`;
      // storeCurrentIdx = storeSlideCount;
      storeCurrentIdx = storeSlideCount - 1;
    }, 500);
    setTimeout(() => {
      storeSliderUl.classList.add('animated');
      conStoreTextUl.classList.add('animated');
    }, 600);
  }
  timerId = setTimeout(() => {
    storeCurrentIdx += 1;
    moveAutoSlide(storeCurrentIdx);
  }, 3000);
}

// 매장안내 버튼 이벤트
storePrev.addEventListener('click', (e) => {
  e.preventDefault();
  clearTimeout(timerId);
  moveAutoSlide(storeCurrentIdx - 1);
});
storeNext.addEventListener('click', (e) => {
  e.preventDefault();
  clearTimeout(timerId);
  moveAutoSlide(storeCurrentIdx + 1);
});

// 상품안내
createProductBtn();
function createProductBtn() {
  for (let i = 0; i < productItemCount; i++) {
    let productBtn = document.createElement('span');
    productBtn.setAttribute('class', 'product__btn-span');
    productBtnBox.appendChild(productBtn);
  }
}

let productBtnEle = document.querySelectorAll('.product__btn-box>span');

if (window.innerWidth <= 768 && productItemCount <= 4) {
  // 버튼 추가 함수
  console.log('사이즈 변경');
  autoMakeClone(
    productItem[0],
    productUl,
    productItem[productItemCount - 1],
    '.con__product-ul > li',
    productSlideWidth,
  );
}

let productTimerId;
moveProduct(productSlideIdx);
function moveProduct(num) {
  productSlideWidth = productSlideWrap.getBoundingClientRect().width;
  productUl.style.left = `${-productSlideWidth * num + -productSlideWidth}px`;
  productUl.classList.add('animated');
  productSlideIdx = num;
  if (productSlideIdx == 4) {
    setTimeout(() => {
      productUl.classList.remove('animated');
      productUl.style.left = -productSlideWidth + 'px';
      productSlideIdx = 0;
    }, 500);
    setTimeout(() => {
      productUl.classList.add('animated');
    }, 600);
  }
  if (productSlideIdx == -1) {
    setTimeout(() => {
      productUl.classList.remove('animated');
      productUl.style.left = -productSlideWidth * productItemCount + 'px';
      productSlideIdx = productItemCount - 1;
    }, 500);
    setTimeout(() => {
      productUl.classList.add('animated');
    }, 600);
  }
  productTimerId = setTimeout(() => {
    productBtnEle[productSlideIdx].classList.remove('active');
    productSlideIdx += 1;
    if (productSlideIdx == 4) productBtnEle[0].classList.add('active');
    else productBtnEle[productSlideIdx].classList.add('active');
    moveProduct(productSlideIdx);
  }, 3000);
}
cardBtnEven();
// 버튼 이벤트 함수
function cardBtnEven() {
  productBtnEle[productSlideIdx].classList.add('active');
  productBtnEle.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      clearTimeout(productTimerId);
      productBtnEle[productSlideIdx].classList.remove('active');
      moveProduct(index);
      productSlideIdx = index;
      productBtnEle[productSlideIdx].classList.add('active');
    });
  });
}
