// 윈도우 사이즈 변화 시 width 재설정
window.onresize = function () {
  // main slide
  mainSlideWidth = window.innerWidth;
  updateWidthSlide();
  updatePositionSlide();

  // auto slide
  storeSlideWidth = conStoreImgView.getBoundingClientRect().width;
  storeTextWidth = conStoreTextwrap.getBoundingClientRect().width;
  updateWidth('.con__store-ul li', storeSlideWidth, storeSliderUl);
  updateWidth('.con__store-text li', storeTextWidth, conStoreTextUl);
  updatePosition();

  //   card slide 미디어쿼리 적용 js
  let cardNewList = document.querySelectorAll('.con__card>li');

  let cardLiCount = cardNewList.length;
  // 뷰가 991보다 작아져 li 개수를 추가 했고 다시 뷰 크기를 늘린다면
  // li 갯수가 초기의 갯수로 돌아가야 한다.
  // 뷰 사이즈가 991보다 크고 card li 갯수가 5개 보다 많다면
  if (mainSlideWidth >= 1023 && cardLiCount > 5) {
    console.log('onsize 991보다 클 때');
    cardNewList.forEach((item) => {
      // 추가한 li는 삭제
      item.classList.contains('clone') && item.remove();
      // ul의 width를 초기화
      conCard.style.width = '100%';
    });
  } else if (mainSlideWidth <= 1023 && cardLiCount <= 5) {
    console.log('onsize 991보다 작을 때');
    makeCloneCard();
  }

  let productNewList = document.querySelectorAll('.con__product-ul > li');
  let productNewCount = productNewList.length;
  if (mainSlideWidth >= 768) {
    console.log('onsize 766보다 클 때');
    if (productNewCount > 4) {
      productNewList.forEach((item) => {
        item.classList.contains('clone') && item.remove();
        productUl.style.width = '100%';
      });
    }
  } else if (mainSlideWidth <= 768) {
    console.log('onsize 766보다 작을 때');
    // identity & growth
    conCard.style.width = 'calc(90% * 8)';
    conCard.style.left = 'calc(-90% + 4vw)';

    const productNewSlideWrap = document.querySelector('.product__slide-wrap');
    let productNewSlideWidth =
      productNewSlideWrap.getBoundingClientRect().width;

    // 상품안내
    if (productNewCount <= 4) {
      autoMakeClone(
        productItem[0],
        productUl,
        productItem[productItemCount - 1],
        '.con__product-ul > li',
        productSlideWidth,
      );
    }
    let productUpdateCount = document.querySelectorAll(
      '.con__product-ul > li',
    ).length;

    const productNewUl = document.querySelector('.con__product-ul');

    productNewUl.style.width = `calc(${productNewSlideWidth} * ${productUpdateCount}px)`;
    productUl.style.left = `${
      -productNewSlideWidth * productSlideIdx + -productNewSlideWidth
    }px`;
  }
};
