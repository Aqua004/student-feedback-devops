const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('application files exist', () => {
  for (const file of ['index.html', 'style.css', 'script.js']) {
    assert.equal(fs.existsSync(file), true, `${file} should exist`);
  }
});

test('feedback form contains required fields', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /name="name"/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="course"/);
  assert.match(html, /name="feedback"/);
  assert.match(html, /id="feedbackForm"/);
});

test('NIET email is mandatory and restricted to niet.co.in', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /id="email"[^>]*type="email"/);
  assert.match(html, /id="email"[^>]*required/);
  assert.match(html, /pattern="\^\[\^@\\s\]\+@niet\\\.co\\\.in\$"/);
});

test('feedback form submission validates and displays feedback', () => {
  const javascript = fs.readFileSync('script.js', 'utf8');
  assert.match(javascript, /addEventListener\('submit'/);
  assert.match(javascript, /preventDefault\(\)/);
  assert.match(javascript, /item\.email/);
  assert.match(javascript, /@niet\\\.co\\\.in/);
  assert.match(javascript, /renderFeedback\(item\)/);
  assert.match(javascript, /Feedback submitted successfully\./);
  assert.match(javascript, /form\.reset\(\)/);
});
