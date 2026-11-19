const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nameOfQuiz = data.get('nameOfQuiz')
    console.log(nameOfQuiz)
  });