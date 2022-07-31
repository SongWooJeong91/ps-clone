// 링크 걸린 태그에 preventDefault() 적용
window.document.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    e.preventDefault();
  }
  if (e.target.matches('h2')) {
    e.preventDefault();
  }
  if (e.target.matches('span')) {
    e.preventDefault();
  }
  if (e.target.matches('img')) {
    e.preventDefault();
  }
});
