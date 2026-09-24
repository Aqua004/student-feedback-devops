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
  assert.match(html, /name="course"/);
  assert.match(html, /name="feedback"/);
  assert.match(html, /id="feedbackForm"/);
});

test('feedback form submission validates and displays feedback', () => {
  const javascript = fs.readFileSync('script.js', 'utf8');
  assert.match(javascript, /addEventListener\('submit'/);
  assert.match(javascript, /preventDefault\(\)/);
  assert.match(javascript, /if \(!item\.name \|\| !item\.course \|\| !item\.feedback\)/);
  assert.match(javascript, /renderFeedback\(item\)/);
  assert.match(javascript, /Feedback submitted successfully\./);
  assert.match(javascript, /form\.reset\(\)/);
});
