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
const storeTextWidth = conStoreTextwrap.getBoundingClientRect().width;

autoMakeClone();
// // 앞 뒤로 첫번째 요소, 마지막 요소 복제
function autoMakeClone() {
  // 첫번째 요소를 자식까지 복사해서 cloneSlide에 저장
  let cloneSlideFirstAuto = storeSlide[0].cloneNode(true);
  let cloneTextFirstAuto = conStoreTextSlide[0].cloneNode(true);
  // 복제된 요소에 클래스 추가
  cloneSlideFirstAuto.classList.add('clone');
  cloneTextFirstAuto.classList.add('clone');
  // a.appendChilde(b) a요소 뒤에 추가
  storeSliderUl.appendChild(cloneSlideFirstAuto);
  conStoreTextUl.appendChild(cloneTextFirstAuto);

  let cloneSlideLastAuto = storeSlide[storeSlideCount - 1].cloneNode(true);
  let cloneTextLastAuto = conStoreTextSlide[storeTextCount - 1].cloneNode(true);

  cloneSlideLastAuto.classList.add('clone');
  cloneTextLastAuto.classList.add('clone');

  storeSliderUl.prepend(cloneSlideLastAuto);
  conStoreTextUl.prepend(cloneTextLastAuto);
  // 추가된 li 요소, 너비 설정
  updateWidth();
  // index 1을 보이게 하기 위해 ul 위치 조절
  storeSliderUl.style.left = -storeSlideWidth + 'px';
  conStoreTextUl.style.transform = `translateX(${-storeTextWidth}px)`;
  // 애니메이션 효과 추가
  setTimeout(function () {
    storeSliderUl.classList.add('animated');
    conStoreTextUl.classList.add('animated');
  }, 100);
}
//추가된 li 요소, 너비 설정 함수
function updateWidth() {
  let currentSlidesAuto = document.querySelectorAll('.con__store-ul li');
  let currentTextAuto = document.querySelectorAll('.con__store-text li');
  let newSlideCountAuto = currentSlidesAuto.length;
  let newTextCountAuto = currentTextAuto.length;

  let newWidthAuto = storeSlideWidth * newSlideCountAuto + 'px';
  let newTextWidthAuto = storeTextWidth * newTextCountAuto + 'px';
  storeSliderUl.style.width = newWidthAuto;
  conStoreTextUl.style.width = newTextWidthAuto;
}

// ---------------------------------------------
storePrev.addEventListener('click', () => {
  moveAutoSlide(storeCurrentIdx - 1);
});
storeNext.addEventListener('click', () => {
  moveAutoSlide(storeCurrentIdx + 1);
});
console.log('함수 실행 전 storeCurrentIdx ', storeCurrentIdx);
moveAutoSlide(storeCurrentIdx);
function moveAutoSlide(num) {
  console.log('moveAutoSlide() 실행');
  console.log('함수 실행 후 storeCurrentIdx ', storeCurrentIdx);
  console.log('함수 실행 후 num ', num);

  // 슬라이드 한개 너비만큼 이동
  storeSliderUl.style.left = -(storeSlideWidth * num + storeSlideWidth) + 'px';
  conStoreTextUl.style.transform = `translateX(${-(
    storeTextWidth * num +
    storeTextWidth
  )}px)`;
  storeCurrentIdx = num;
  console.log('매개변수 저장 후 ', num);
  console.log('매개변수 저장 후', storeCurrentIdx);
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

    // 바뀌는 과정이 보이면 안되니까 애니메이션 지우고
    // 위치는 -800px
  }
  if (storeCurrentIdx == -1) {
    setTimeout(() => {
      storeSliderUl.classList.remove('animated');
      conStoreTextUl.classList.remove('animated');
      storeSliderUl.style.left = -storeSlideWidth * storeSlideCount + 'px';
      conStoreTextUl.style.transform = `translateX(${
        -storeTextWidth * storeTextCount
      }px)`;
      storeCurrentIdx = storeSlideCount;
    }, 500);
    setTimeout(() => {
      storeSliderUl.classList.add('animated');
      conStoreTextUl.classList.add('animated');
    }, 600);
  }
  // setTimeout(moveAutoSlide.bind((storeCurrentIdx += 1)), 5000);
}

// width 변화 감지
// let eleWidth = new ResizeObserver((entries) => {
//   for (let entry of entries) {
//     const cr = entry.contentRect; // this
//     console.log('Element:', entry.target);
//     console.log(`Element size: ${cr.width}px x ${cr.height}px`);
//   }
// });
// eleWidth.observe(storeSliderView);
// for (let i = 0; i < storeSlideCount; i++) {
//   const autoSlide = setTimeout(() => {
//     console.log('setTime 실행');
//     storeSliderUl.style.left = `-${storeSlideWidth}px`;
//   }, 5000);
// }
