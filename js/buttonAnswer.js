console.clear();

const answerButton = document.querySelector('[data-js="button-answer"]');
const answerParagraph = document.querySelector('[data-js="card-answer"]');

function clickAnswerButton(event) {
  answerParagraph.classList.toggle("card__answer--active");
};

answerButton.addEventListener("click", clickAnswerButton);
