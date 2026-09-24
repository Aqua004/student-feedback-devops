const form = document.getElementById('feedbackForm');
const list = document.getElementById('feedbackList');
const message = document.getElementById('message');

function renderFeedback(item) {
  const card = document.createElement('article');
  card.className = 'feedback-item';
  const heading = document.createElement('h3');
  heading.textContent = `${item.name} — ${item.course}`;
  const text = document.createElement('p');
  text.textContent = item.feedback;
  card.append(heading, text);
  list.prepend(card);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const item = {
    name: data.get('name').trim(),
    course: data.get('course').trim(),
    feedback: data.get('feedback').trim()
  };
  if (!item.name || !item.course || !item.feedback) return;
  const empty = list.querySelector('.empty');
  if (empty) empty.remove();
  renderFeedback(item);
  form.reset();
  message.textContent = 'Feedback submitted successfully.';
});
