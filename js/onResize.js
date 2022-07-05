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
  if (mainSlideWidth >= 991 && cardLiCount > 5) {
    console.log('onsize 991보다 클 때');
    cardNewList.forEach((item) => {
      // 추가한 li는 삭제
      item.classList.contains('clone') && item.remove();
      // ul의 width를 초기화
      conCard.style.width = '100%';
    });
  } else if (mainSlideWidth <= 991 && cardLiCount <= 5) {
    console.log('onsize 991보다 작을 때');
    cardMediaFn();
  }

  //  상품안내 미디어쿼리 적용 시 슬라이드
  let productNewList = document.querySelectorAll('.con__product-ul>li');
  // 상품안내 갯수
  let productLiCount = productNewList.length;

  if (mainSlideWidth >= 766 && productLiCount > 4) {
    console.log('onsize 766보다 클 때');
    productNewList.forEach((item) => {
      item.classList.contains('clone') && item.remove();
      productSlideUl.style.width = '100%';
    });
    // 추가한 요소를 지운다.
    // ul의 width를 초기화
  } else if (mainSlideWidth <= 766 && productLiCount <= 4) {
    console.log('onsize 766보다 작을 때');
    // 상품안내 새로 만들기 함수를 재호출 한다.
    autoMakeClone(
      productSlide[0],
      productSlideUl,
      productSlide[storeTextCount - 1],
      '.con__product-ul li',
      productSlideWidth,
    );
  }
};
