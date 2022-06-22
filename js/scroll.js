const conTran = document.querySelector('.con__tran'); // 콘텐츠 타이틀
const conTranProduct = document.querySelector('.con__tran-product');
const conList = document.querySelectorAll('.con__card>li'); // 콘텐츠 카드
console.log('conTranProduct : ', conTranProduct);

// 스크롤 애니메이션 함수
const scrollAni = (ele, conY, opacityNum, transitionOp) => {
  console.log('scrollAin 실행');
  ele.style.transform = `translateY(${conY}px)`;
  ele.style.opacity = opacityNum;
  ele.style.transition = `all ${transitionOp}s ease-in-out`;
};

window.addEventListener('scroll', () => {
  const scrY = window.scrollY; // 현재 스크롤 Y좌표
  console.log('스크롤Y 위치:', scrY);
  let conY, opacityNum, transitionOp;
  if (scrY < 550) {
    conY = 180; // translateY
    opacityNum = 0; // opacity
    transitionOp = 1.4; // trasition time
    scrollAni(conTran, conY, opacityNum, transitionOp);
  } else if (scrY > 550) {
    conY = 0;
    opacityNum = 1;
    transitionOp = 1.4;
    scrollAni(conTran, conY, opacityNum, transitionOp);
  }
  if (scrY < 680) {
    conList.forEach((item, index) => {
      conY = 180;
      opacityNum = 0;
      transitionOp = 0.8 + index * 0.3;
      scrollAni(item, conY, opacityNum, transitionOp);
    });
  } else if (scrY > 680) {
    conList.forEach((item, index) => {
      conY = 0;
      opacityNum = 1;
      transitionOp = 0.8 + index * 0.3;
      scrollAni(item, conY, opacityNum, transitionOp);
    });
  } else if (scrY < 1380) {
    console.log('스크롤 실행ㅇ');
  }
});
