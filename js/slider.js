const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderView = document.querySelector('.slider__view');
const sliderUl = document.querySelector('.slider__ul');

let currentIdx = 1;

// 화면 전체 너비
const imgSize = window.innerWidth;
console.log(imgSize);

const imgPosition = () => {
  sliderUl.style.left = `-${imgSize * (currentIdx - 1)}px`;
  //   sliderUl.classList.add('animated');
};

prev.addEventListener('click', () => {
  if (currentIdx === 1) currentIdx = 5;
  else currentIdx -= 1;
  imgPosition();
});

next.addEventListener('click', () => {
  if (currentIdx === 5) currentIdx = 1;
  else currentIdx += 1;
  imgPosition();
});

// 매장 안내 슬라이드
const conStorePrevBtn = document.querySelector('.con__store-prevBtn');
const conStoreNextBtn = document.querySelector('.con__store-nextBtn');
const conStoreSlideview = document.querySelector('.con__store-slideview'); // 슬라이드 뷰
const conStoreUl = document.querySelector('.con__store-ul');
const conStoreUlLi = document.querySelectorAll('.con__store-ul>li');

let firstSlide = conStoreUl.firstElementChild;
let lastSlide = conStoreUl.lastElementChild;
let clonedFirst = firstSlide.cloneNode(true);
let clonedLast = lastSlide.cloneNode(true);
console.log(clonedFirst);

conStoreUl.appendChild(clonedFirst);
conStoreUl.insertBefore(clonedLast, conStoreUl.firstElementChild);

// 전체 화면너비에서 -100
let autoIdx = 1;
const lastIdx = conStoreUlLi.length; // li 갯수

console.log(lastIdx);

// slideShow();
function slideShow() {
  if (autoIdx === lastIdx) autoIdx = 0;
  conStoreUl.style.transform = `translateX(-${(imgSize - 100) * autoIdx}px)`;
  conStoreUl.style.transition = 'transform 0.7s ease-in-out';
  autoIdx++;
  setTimeout(slideShow, 2000);
}

// function autoSlide() {
//   conStoreUl.style.transform = `translateX(-${(imgSize - 100) * autoIdx}px)`;
//   autoIdx++;
// }
