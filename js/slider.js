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
