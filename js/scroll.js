// top 버튼 스크롤
const topBtn = document.querySelector('.top-btn');

// 클릭 이벤트 추가
topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const conTran = document.querySelector('.con__tran');
const conCardSc = document.querySelector('.con__card');
const conCardScLi = document.querySelectorAll('.con__card>li');
const conTranProduct = document.querySelector('.con__tran-product');
const conProductUl = document.querySelector('.con__product-ul');
const conProductUlLi = document.querySelectorAll('.con__product-ul>li');
const conTranStore = document.querySelector('.con__store__tran');
const coServiceWrapH3 = document.querySelector('.con__service-wrap h3');
const conServiceUl = document.querySelectorAll('.con__service-ul>li');
const conTranActivity = document.querySelector('.con__activity-tran');
const scrSpace = window.innerHeight;

function scrollAni(ele, transF, opaC, transiT) {
  ele.style.transform = transF;
  ele.style.opacity = opaC;
  ele.style.transition = transiT;
}

// 사라지는 함수
function disappear(ele) {
  ele.style.transform = 'translateY(200px)';
  ele.style.opacity = '0';
  ele.style.transition = 'all 1.4s ease-in-out';
}

// 나타나는 함수
function appear(ele) {
  ele.style.transform = 'translateY(0px)';
  ele.style.opacity = '1';
  ele.style.transition = 'all 1.4s ease-in-out';
}

window.addEventListener('scroll', () => {
  if (
    conTran.getBoundingClientRect().top - scrSpace >
    -conTran.getBoundingClientRect().height / 4
  ) {
    disappear(conTran);
  } else if (conTran.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTran);
  }

  if (
    conCardSc.getBoundingClientRect().top - scrSpace >
    -conCardSc.getBoundingClientRect().height / 4
  ) {
    conCardScLi.forEach((card, idx) => {
      card.style.transform = 'translateY(200px)';
      card.style.opacity = '0';
      card.style.transition = `all ${0.8 + 0.3 * idx}s ease-in-out`;
    });
  } else if (conCardSc.getBoundingClientRect().top - scrSpace < 0) {
    conCardScLi.forEach((card, idx) => {
      card.style.transform = 'translateY(0px)';
      card.style.opacity = '1';
      card.style.transition = `all ${0.8 + 0.3 * idx}s ease-in-out`;
    });
  }

  if (
    conTranProduct.getBoundingClientRect().top - scrSpace >
    -conTranProduct.getBoundingClientRect().height / 4
  ) {
    disappear(conTranProduct);
  } else if (conTranProduct.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTranProduct);
  }

  if (
    conProductUl.getBoundingClientRect().top - scrSpace >
    -conProductUl.getBoundingClientRect().height / 4
  ) {
    conProductUlLi.forEach((item, idx) => {
      item.style.transform = 'translateY(200px)';
      item.style.opacity = '0';
      item.style.transition = `all ${0.8 + 0.3 * idx}s ease-in-out`;
    });
  } else if (conProductUl.getBoundingClientRect().top - scrSpace < 0) {
    conProductUlLi.forEach((item, idx) => {
      item.style.transform = 'translateY(0px)';
      item.style.opacity = '1';
      item.style.transition = `all ${0.8 + 0.3 * idx}s ease-in-out`;
    });
  }
  if (
    conTranStore.getBoundingClientRect().top - scrSpace >
    -conTranStore.getBoundingClientRect().height / 4
  ) {
    disappear(conTranStore);
  } else if (conTranStore.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTranStore);
  }
  if (
    coServiceWrapH3.getBoundingClientRect().top - scrSpace >
    -coServiceWrapH3.getBoundingClientRect().height / 4
  ) {
    coServiceWrapH3.style.transform = 'translateX(-140px)';
    coServiceWrapH3.style.opacity = '0';
    coServiceWrapH3.style.transition = 'all 1.4s ease-in-out';
    conServiceUl.forEach((item, idx) => {
      item.style.transform = 'translateX(300px)';
      item.style.opacity = '0';
      item.style.transition = `all ${0.8 + 0.3 * idx}s ease-in-out`;
    });
  } else if (coServiceWrapH3.getBoundingClientRect().top - scrSpace < 0) {
    coServiceWrapH3.style.transform = 'translateX(0px)';
    coServiceWrapH3.style.opacity = '1';
    coServiceWrapH3.style.transition = 'all 1.4s ease-in-out';
    conServiceUl.forEach((item, idx) => {
      item.style.transform = 'translateX(0px)';
      item.style.opacity = '1';
      item.style.transition = `all ${0.8 + 0.3 * idx}s ease-in-out`;
    });
  }
  if (
    conTranActivity.getBoundingClientRect().top - scrSpace >
    -conTranActivity.getBoundingClientRect().height / 4
  ) {
    disappear(conTranActivity);
  } else if (conTranActivity.getBoundingClientRect().top - scrSpace < 0) {
    appear(conTranActivity);
  }
});
