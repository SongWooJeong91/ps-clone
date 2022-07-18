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
const productSlideUl = document.querySelector('.con__product-ul');
const productSlide = document.querySelectorAll('.con__product-ul li');
const productBtnBox = document.querySelector('.product__btn-box');
let productCount = productSlide.length;
let productSlideIdx = 0;
let productSlideWidth =
  productSlideUl.getBoundingClientRect().width / productCount;

// 요소 추가 생성 함수 호출
autoMakeClone(
  storeSlide[0],
  storeSliderUl,
  storeSlide[storeSlideCount - 1],
  '.con__store-ul li',
  storeSlideWidth,
);
autoMakeClone(
  conStoreTextSlide[0],
  conStoreTextUl,
  conStoreTextSlide[storeTextCount - 1],
  '.con__store-text li',
  storeTextWidth,
);

if (window.innerWidth <= 766) {
  console.log('766 이하 일 때');
  autoMakeClone(
    productSlide[0],
    productSlideUl,
    productSlide[storeTextCount - 1],
    '.con__product-ul li',
    productSlideWidth,
  );
}

// autoMakeClone(
//   productSlide[0],
//   productSlideUl,
//   productSlide[storeTextCount - 1],
//   '.con__product-ul li',
//   productSlideWidth,
// );

// 첫번째 요소, 마지막 요소 복제
function autoMakeClone(
  FirstSlideLi,
  slideUl,
  lastSlideLi,
  autoSlideLi,
  autoSlideWidth,
) {
  // 첫번째 요소를 자식까지 복사해서 cloneSlide에 저장
  let cloneSlideFirst = FirstSlideLi.cloneNode(true);
  // 복제된 요소에 클래스 추가
  cloneSlideFirst.classList.add('clone');
  // a.appendChilde(b) a요소 뒤에 추가
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
  productSlideUl.style.left = -productSlideWidth + 'px';
}

// 실행부분 ---------------------------------------------
let timerId;
moveAutoSlide(storeCurrentIdx);
function moveAutoSlide(num) {
  // 슬라이드 한개 너비만큼 이동
  storeSliderUl.style.left = -(storeSlideWidth * num + storeSlideWidth) + 'px';
  conStoreTextUl.style.transform = `translateX(${-(
    storeTextWidth * num +
    storeTextWidth
  )}px)`;
  storeCurrentIdx = num;
  // 받아온 +1 한 currentIdx를 저장
  if (storeCurrentIdx == storeSlideCount) {
    // 0.5초가 지나고 1번으로 바뀌도록 하기 위해
    setTimeout(() => {
      // 바뀌는게 보이지 않게 애니메이션 효과를 없애준다.
      storeSliderUl.classList.remove('animated');
      conStoreTextUl.classList.remove('animated');
      // 빠르게 앞에 1번으로 바꿔줄 것!
      storeSliderUl.style.left = -storeSlideWidth + 'px';
      conStoreTextUl.style.transform = `translateX(${-storeTextWidth}px)`;
      // index는 1;
      storeCurrentIdx = 0;
    }, 500);
    // 0.5초가 지나고 애니메이션 효과가 없으니 0.6초에
    // 애니메이션을 추가해준다.
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

// 버튼 추가 함수
createProductBtn();
function createProductBtn() {
  for (let i = 0; i < productCount; i++) {
    let productBtn = document.createElement('span');
    productBtn.setAttribute('class', 'product__btn-span');
    productBtnBox.appendChild(productBtn);
  }
}

let productBtnEle = document.querySelectorAll('.product__btn-box>span');

let productTimerId;
moveProduct(productSlideIdx);
function moveProduct(num) {
  productSlideUl.style.left = `${
    -productSlideWidth * num + -productSlideWidth
  }px`;

  productSlideUl.classList.add('animated');
  productSlideIdx = num;

  if (productSlideIdx == 4) {
    // 0.5초가 지나고 1번으로 바뀌도록 하기 위해
    setTimeout(() => {
      // 바뀌는게 보이지 않게 애니메이션 효과를 없애준다.
      productSlideUl.classList.remove('animated');
      // 빠르게 앞에 1번으로 바꿔줄 것!
      productSlideUl.style.left = -productSlideWidth + 'px';
      // index는 1;
      productSlideIdx = 0;
    }, 500);
    // 0.5초가 지나고 애니메이션 효과가 없으니 0.6초에
    // 애니메이션을 추가해준다.
    setTimeout(() => {
      productSlideUl.classList.add('animated');
    }, 600);
  }
  if (productSlideIdx == -1) {
    setTimeout(() => {
      productSlideUl.classList.remove('animated');
      productSlideUl.style.left = -productSlideWidth * productCount + 'px';
      // storeCurrentIdx = storeSlideCount;
      productSlideIdx = productCount - 1;
    }, 500);
    setTimeout(() => {
      productSlideUl.classList.add('animated');
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
