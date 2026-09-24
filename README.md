# Student Feedback Web Application

A simple static web application where students enter their name, course, and feedback. Submitted feedback is displayed immediately on the page.

## Features

- Responsive HTML/CSS interface.
- Client-side validation using JavaScript.
- Safe DOM rendering with `textContent`.
- Automated tests using Node.js built-in test runner.
- GitHub Actions CI/CD pipeline.

## Run locally

No server is required. Open `index.html` in a browser, or serve the directory with any static web server.

To run tests:

```bash
npm test
```

## CI/CD pipeline

The workflow in `.github/workflows/ci-cd.yml` runs on pull requests and pushes to `main`:

1. Checks out the repository.
2. Installs Node.js 20.
3. Runs `npm test`.
4. On a successful push to `main`, deploys the static site to GitHub Pages.

In the repository settings, open **Pages** and set **Source** to **GitHub Actions** if it is not already configured. The deployed URL will be shown in the workflow deployment environment.

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
├── package.json
├── test/app.test.js
└── .github/workflows/ci-cd.yml
```
