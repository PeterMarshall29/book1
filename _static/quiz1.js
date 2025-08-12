 const apiEndpoint = "questions1.json"; // Fetch questions from this file
      let currentPage = 0;
      const pageSize = 4;
      let questions = [];
      const userAnswers = {};
  
      async function fetchQuestions() {
        try {
          const response = await fetch(apiEndpoint);
          if (!response.ok) {
            throw new Error('Failed to fetch questions');
          }
          questions = await response.json();
          renderPage();
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      }
  
      function renderPage() {
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = "";
        const start = currentPage * pageSize;
        const end = start + pageSize;
        const pageQuestions = questions.slice(start, end);
  
        pageQuestions.forEach((question) => {
          const card = document.createElement("div");
          card.className = "card";
  
          const cardInner = document.createElement("div");
          cardInner.className = "card-inner";
  
          const cardFront = document.createElement("div");
          cardFront.className = "card-front";
          cardFront.textContent = question.question;
  
          const cardBack = document.createElement("div");
          cardBack.className = "card-back";
  
          question.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => {
              userAnswers[question.id] = option;
              updateResults();
            });
            cardBack.appendChild(button);
          });
  
          cardInner.appendChild(cardFront);
          cardInner.appendChild(cardBack);
          card.appendChild(cardInner);
  
          card.addEventListener("click", () => {
            cardInner.classList.toggle("flipped");
          });
  
          quizContainer.appendChild(card);
        });
  
        document.getElementById("prev-button").disabled = currentPage === 0;
        document.getElementById("next-button").disabled = (currentPage + 1) * pageSize >= questions.length;
      }
  
      function updateResults() {
        const resultsList = document.getElementById("results-list");
        resultsList.innerHTML = "";
        for (const [id, answer] of Object.entries(userAnswers)) {
          const question = questions.find(q => q.id == id);
          const listItem = document.createElement("li");
          listItem.textContent = `${question.question} - Your Answer: ${answer}`;
          resultsList.appendChild(listItem);
        }
      }
  
      document.getElementById("next-button").addEventListener("click", () => {
        if ((currentPage + 1) * pageSize < questions.length) {
          currentPage++;
          renderPage();
        }
      });
  
      document.getElementById("prev-button").addEventListener("click", () => {
        if (currentPage > 0) {
          currentPage--;
          renderPage();
        }
      });
  
      document.getElementById("submit-button").addEventListener("click", () => {
        const resultsContainer = document.getElementById("results-container");
        updateResults();
        resultsContainer.style.display = "flex";
      });
  
      document.getElementById("clear-button").addEventListener("click", () => {
        const resultsList = document.getElementById("results-list");
        resultsList.innerHTML = "";
        Object.keys(userAnswers).forEach(key => delete userAnswers[key]);
        document.getElementById("results-container").style.display = "none";
        currentPage = 0;
        renderPage();
      });
  
      fetchQuestions();