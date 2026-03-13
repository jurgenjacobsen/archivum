# Archivum

![Wakatime](https://wakatime.com/badge/user/010adc07-6382-419f-87bc-0b3f507ee495/project/6fe10444-85a0-4c6d-9002-cbce8ef967f6.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20%F0%9F%AA%90%EF%B8%8F%20%F0%9F%93%99-191919.svg)

**Archivum** is a high-performance library management system designed to serve as the "Central Memory" for personal and public libraries. Rooted in the Latin tradition of the *Archivitas*, it provides a rigid yet fluid framework for cataloging, tracking, and preserving vast collections of books.

## ✨ Core Features

## Tech Stack
- **Frontend**: ReactTS (Vite) & TailwindCSS
- **Backend**: Golang
- **Bridge**: Wails
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth

## Project Feature Structure
https://www.mindmeister.com/3960597975/archivum

## Folder Structure
```
archivum/
├── .github/
│   ├── FUNDING.yml             # Funding information
│   └── workflows/              # Github Actions workflows for packaging, testing, and deployment
├── apps/
│   ├── librarian-desktop/      # Wails & Go - Librarian desktop station
│   ├── librarian-mobile/       # .NET MAUI - Librarian app
│   ├── reader-mobile/          # .NET MAUI - Reader app
│   └── website/                # React
├── packages/
│   ├── ui-shared/              # Shared UI components (buttons, SVG map renderer)
│   └── core-logic/             # Shared TypeScript logic (Borrowing rules, date tracking)
├── services/
│   ├── local/                  # The self-hosted backend
│   └── global/                 # The company-hosted central API
├── docker/                     # Dockerfiles and compose files for local development and production deployment
└── package.json                # Root dependencies and workspace config
```
