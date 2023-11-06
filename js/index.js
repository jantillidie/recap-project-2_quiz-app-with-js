const form = document.querySelector('[data-js="quiz-form"]');
const quizQuestion = document.querySelector('[data-js="quiz-question"]');
const quizAnswer = document.querySelector('[data-js="quiz-answer"]');
const quizTag = document.querySelector('[data-js="quiz-tag"]');
const newQuizCard = document.querySelector('[data-js="new-quiz-card"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = document.createElement("li");
  newCard.classList.add("card-list__item");

  newCard.innerHTML = `
  <article class="card">
  <h2 class="card__question">${quizQuestion.value}</h2>
  <button class="card__button-answer" type="button" data-js="button-answer">
    Show answer
  </button>
  <p class="card__answer" data-js="card-answer">${quizAnswer.value}</p>
  <ul class="card__tag-list">
    <li class="card__tag-list-item">#${quizTag.value}</li>
  </ul>
  <div class="card__button-bookmark">
    <button
      class="bookmark"
      aria-label="bookmark"
      type="button"
      data-js="bookmark-button"
    >
      <svg
        class="bookmark__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
      >
        <path
          d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
      </svg>
    </button>
  </div>
</article>
  `;

  newQuizCard.append(newCard);
});
