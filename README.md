# 📰 Hacker News Clone

A fully functional **Hacker News** clone built with **Angular 10**, featuring Server-Side Rendering (SSR) via Angular Universal and Progressive Web App (PWA) support. Consumes the official [Hacker News API](https://github.com/HackerNews/API) to display real-time top stories, new stories, jobs, and comments.

![Angular](https://img.shields.io/badge/Angular-10-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![SSR](https://img.shields.io/badge/SSR-Angular_Universal-DD0031?style=flat-square&logo=angular&logoColor=white)
![CI](https://img.shields.io/badge/CI-Travis_CI-3EAAAF?style=flat-square&logo=travisci&logoColor=white)

---

## ✨ Features

- 🔥 **Real-time data** from the official Hacker News Firebase API
- ⚡ **Server-Side Rendering** (SSR) with Angular Universal for fast initial load & SEO
- 📱 **Progressive Web App** (PWA) — installable, works offline
- 🧭 Top Stories, New Stories, Ask HN, Show HN, Jobs feeds
- 💬 Nested comment threads
- 📄 Pagination support
- ✅ Unit tests with **Karma & Jasmine**
- 🧪 End-to-end tests with **Protractor**
- 🔄 **CI/CD** pipeline via Travis CI

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 10 |
| Language | TypeScript |
| Styling | SCSS |
| SSR | Angular Universal |
| PWA | Angular Service Worker (`ngsw`) |
| Testing | Karma, Jasmine, Protractor |
| CI/CD | Travis CI |
| API | [Hacker News Firebase API](https://github.com/HackerNews/API) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 12.x
- Angular CLI >= 10.x

```bash
npm install -g @angular/cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/nitishrajput01/hacker-news-clone.git

# Navigate into the project
cd hacker-news-clone

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
ng serve

# Navigate to
http://localhost:4200/
```

### Running with SSR

```bash
# Build for SSR
npm run build:ssr

# Serve with SSR
npm run serve:ssr

# Navigate to
http://localhost:4000/
```

---

## 🧪 Testing

```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

---

## 📦 Build

```bash
# Standard build
ng build --prod

# SSR build
npm run build:ssr
```

Build artifacts are stored in the `dist/` directory.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── services/         # API services (Hacker News API)
│   ├── models/           # TypeScript interfaces & models
│   └── app-routing.module.ts
├── environments/
└── assets/
```

---

## 🔗 API Reference

This project uses the official [Hacker News API](https://github.com/HackerNews/API) provided via Firebase:

```
https://hacker-news.firebaseio.com/v0/
```

Key endpoints used: `/topstories`, `/newstories`, `/item/{id}`, `/user/{id}`

---

## 👨‍💻 Author

**Nitish Kumar** — Frontend Engineering Leader

[![LinkedIn](https://img.shields.io/badge/LinkedIn-nitish--k01-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/nitish-k01)
[![GitHub](https://img.shields.io/badge/GitHub-nitishrajput01-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/nitishrajput01)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
