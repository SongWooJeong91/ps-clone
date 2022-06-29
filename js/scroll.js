const topBtn = document.querySelector('.top-btn');

topBtn.addEventListener('click', () => {
  console.log('스크롤');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const conTran = document.querySelector('.con__tran');
const conCard = document.querySelector('.con__card');
const conCardLi = document.querySelectorAll('.con__card>li');
const conTranProduct = document.querySelector('.con__tran-product');
const conProductUl = document.querySelector('.con__product-ul');
const conProductUlLi = document.querySelectorAll('.con__product-ul>li');
const conTranStore = document.querySelector('.con__tran-store');
const coServiceWrapH3 = document.querySelector('.con__service-wrap h3');
const conServiceUl = document.querySelectorAll('.con__service-ul>li');
const conTranActivity = document.querySelector('.con__tran-activity');
const scrSpace = window.innerHeight;

function scrollAni(ele, transF, opaC, transiT) {
  ele.style.transform = transF;
  ele.style.opacity = opaC;
  ele.style.transition = transiT;
}

// 사라지는 함수
function disappear(ele) {
  ele.style.transform = 'translateY(160px)';
  ele.style.opacity = '0';
  ele.style.transition = 'all 1.4s ease-out';
}

// 나타나는 함수
function appear(ele) {
  ele.style.transform = 'translateY(0px)';
  ele.style.opacity = '1';
  ele.style.transition = 'all 1.4s ease-out';
}

window.addEventListener('scroll', () => {
  if (
    conTran.getBoundingClientRect().top - scrSpace >
    -conTran.getBoundingClientRect().height / 3
  ) {
    disappear(conTran);
  } else if (conTran.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTran);
  }

  if (
    conCard.getBoundingClientRect().top - scrSpace >
    -conCard.getBoundingClientRect().height / 3
  ) {
    conCardLi.forEach((card, idx) => {
      card.style.transform = 'translateY(160px)';
      card.style.opacity = '0';
      card.style.transition = `all ${0.8 + 0.2 * idx}s ease-out`;
    });
  } else if (conCard.getBoundingClientRect().top - scrSpace < 0) {
    conCardLi.forEach((card, idx) => {
      card.style.transform = 'translateY(0px)';
      card.style.opacity = '1';
      card.style.transition = `all ${0.8 + 0.2 * idx}s ease-out`;
    });
  }

  if (
    conTranProduct.getBoundingClientRect().top - scrSpace >
    -conTranProduct.getBoundingClientRect().height / 3
  ) {
    disappear(conTranProduct);
  } else if (conTranProduct.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTranProduct);
  }

  if (
    conProductUl.getBoundingClientRect().top - scrSpace >
    -conProductUl.getBoundingClientRect().height / 3
  ) {
    // conProductUl.style.transform = 'translateY(160px)';
    conProductUlLi.forEach((item, idx) => {
      item.style.transform = 'translateY(160px)';
      item.style.opacity = '0';
      item.style.transition = `all ${0.8 + 0.2 * idx}s ease-out`;
    });
  } else if (conProductUl.getBoundingClientRect().top - scrSpace < 0) {
    // conProductUl.style.transform = 'translateY(0px)';
    conProductUlLi.forEach((item, idx) => {
      item.style.transform = 'translateY(0px)';
      item.style.opacity = '1';
      item.style.transition = `all ${0.8 + 0.2 * idx}s ease-out`;
    });
  }
  if (
    conTranStore.getBoundingClientRect().top - scrSpace >
    -conTranStore.getBoundingClientRect().height / 3
  ) {
    disappear(conTranStore);
  } else if (conTranStore.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTranStore);
  }
  if (
    coServiceWrapH3.getBoundingClientRect().top - scrSpace >
    -coServiceWrapH3.getBoundingClientRect().height / 3
  ) {
    coServiceWrapH3.style.transform = 'translateX(-140px)';
    coServiceWrapH3.style.opacity = '0';
    coServiceWrapH3.style.transition = 'all 1.4s ease-out';
    conServiceUl.forEach((item, idx) => {
      item.style.transform = 'translateX(300px)';
      item.style.opacity = '0';
      item.style.transition = `all ${0.8 + 0.2 * idx}s ease-out`;
    });
  } else if (coServiceWrapH3.getBoundingClientRect().top - scrSpace < 0) {
    coServiceWrapH3.style.transform = 'translateX(0px)';
    coServiceWrapH3.style.opacity = '1';
    coServiceWrapH3.style.transition = 'all 1.4s ease-out';
    conServiceUl.forEach((item, idx) => {
      item.style.transform = 'translateX(0px)';
      item.style.opacity = '1';
      item.style.transition = `all ${0.8 + 0.2 * idx}s ease-out`;
    });
  }
  if (
    conTranActivity.getBoundingClientRect().top - scrSpace >
    -conTranActivity.getBoundingClientRect().height / 3
  ) {
    disappear(conTranActivity);
  } else if (conTranActivity.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTranActivity);
  }
});
