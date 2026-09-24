const form = document.getElementById('feedbackForm');
const list = document.getElementById('feedbackList');
const message = document.getElementById('message');

function renderFeedback(item) {
  const card = document.createElement('article');
  card.className = 'feedback-item';
  const heading = document.createElement('h3');
  heading.textContent = `${item.name} — ${item.course}`;
  const email = document.createElement('p');
  email.textContent = item.email;
  const text = document.createElement('p');
  text.textContent = item.feedback;
  card.append(heading, email, text);
  list.prepend(card);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const item = {
    name: data.get('name').trim(),
    email: data.get('email').trim().toLowerCase(),
    course: data.get('course').trim(),
    feedback: data.get('feedback').trim()
  };
  if (!item.name || !item.email || !item.course || !item.feedback || !/^[^@\s]+@niet\.co\.in$/.test(item.email)) {
    message.textContent = 'Please use a valid NIET email ending in @niet.co.in.';
    return;
  }
  const empty = list.querySelector('.empty');
  if (empty) empty.remove();
  renderFeedback(item);
  form.reset();
  message.textContent = 'Feedback submitted successfully.';
});
