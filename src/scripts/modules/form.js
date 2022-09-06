export const form = function(id) {
  const feedbackForm = document.getElementById(id);

  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    feedbackForm.reset();
  });
};
