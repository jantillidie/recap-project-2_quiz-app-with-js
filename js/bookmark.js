console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

function clickBookmarkButton(event) {
  const clickedBookmark = event.target;
  clickedBookmark.classList.toggle("bookmark--active");
};

bookmarkButton.addEventListener("click", clickBookmarkButton);
