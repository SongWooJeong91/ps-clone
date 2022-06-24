const conTran = document.querySelector('.con__tran'); // 콘텐츠 타이틀
const conList = document.querySelectorAll('.con__card>li'); // 콘텐츠 카드
const conTranProduct = document.querySelector('.con__tran-product');
const conProductUlLi = document.querySelectorAll('.con__product-ul>li');
const conTranStore = document.querySelector('.con__tran-store');
const conServiceWrapH3 = document.querySelector('.con__service-wrap h3');
const conServiceUlLi = document.querySelectorAll('.con__service-ul>li');
const conTranActivity = document.querySelector('.con__tran-activity');
// 스크롤 애니메이션 함수
const scrollAni = (ele, conY, opacityNum, transitionOp) => {
  ele.style.transform = `translateY(${conY}px)`;
  ele.style.opacity = opacityNum;
  ele.style.transition = `all ${transitionOp}s ease-in-out`;
};
const scrollAniX = (ele, conY, opacityNum, transitionOp) => {
  ele.style.transform = `translateX(${conY}px)`;
  ele.style.opacity = opacityNum;
  ele.style.transition = `all ${transitionOp}s ease-in-out`;
};

window.addEventListener('scroll', () => {
  const scrY = window.scrollY; // 현재 스크롤 Y좌표
  // console.log('스크롤Y 위치:', scrY);
  if (scrY < 550) {
    scrollAni(conTran, 200, 0, 1.4);
  } else if (scrY < 700) {
    scrollAni(conTran, 0, 1, 1.4);
    conList.forEach((item, index) =>
      scrollAni(item, 200, 1, 0.8 + index * 0.3),
    );
  } else if (scrY < 1380) {
    conList.forEach((item, index) => scrollAni(item, 0, 1, 0.8 + index * 0.3));
    scrollAni(conTranProduct, 200, 1, 1.4);
  } else if (scrY < 1500) {
    scrollAni(conTranProduct, 0, 1, 1.4);
    conProductUlLi.forEach((item, index) =>
      scrollAni(item, 200, 0, 0.8 + index * 0.3),
    );
  } else if (scrY < 1800) {
    conProductUlLi.forEach((item, index) =>
      scrollAni(item, 0, 1, 0.8 + index * 0.3),
    );
    scrollAni(conTranStore, 200, 0, 1.4);
  } else if (scrY < 1856) {
    scrollAni(conTranStore, 0, 1, 1.4);
  } else if (scrY < 2800) {
    scrollAniX(conServiceWrapH3, -140, 0, 1.4);
    conServiceUlLi.forEach((item, index) => {
      scrollAniX(item, 300, 0, 1.4 + index * 0.1);
    });
  } else if (scrY < 3000) {
    scrollAniX(conServiceWrapH3, 0, 1, 1.4);
    conServiceUlLi.forEach((item, index) => {
      scrollAniX(item, 0, 1, 1.4 + index * 0.1);
    });
  } else if (scrY < 3280) {
    scrollAni(conTranActivity, 0, 1, 1.4);
  }
});
