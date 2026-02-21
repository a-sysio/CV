Dev Notes
================================

Technikalia projektu:
- Klon użytkownika: `./backend` to app Flask z endpointami `/all-data` (zbiera me/skills/languages/experience/education/certificates/soft_skills/social_media/contact/projects) i `/download-cv` (serwuje `static/cv.pdf`).
- Projekty: nowa tabela `projects` (title/description/github_link/link/tags) seedowana w `database.sql` (CV, PTech 3, PTech 5, TomTom Map).
- Dodane repo szkoleniowe obok: `./ptech-5`, `./ptech-5_backend`, `./ptech-5_frontend`, `./ptech-5_deployment`.
- Baza: schema + seed w `backend/database.sql`, ładuje się automatycznie przez docker-entrypoint.

Docker / uruchomienie backendu:
- W `backend`: `docker compose up -d` (Docker Desktop musi być running).
- Serwisy: `server` (Flask+gunicorn na 3000), `db` (MySQL 6033:3306), `phpmyadmin` (8081).
- DB creds: host `db` (z hosta: localhost:6033), user `user`, pass `password`, db `app`.
- Sprawdzenie: `http://localhost:3000/all-data`, `http://localhost:3000/download-cv`, phpMyAdmin `http://localhost:8081` (login user/password, host db).

Pliki kluczowe (backend):
- `backend/app.py` — agregator `/all-data`, download CV (zwraca też `projects`).
- `backend/db.py` — connector MySQL (env: DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT) z UTF8MB4.
- `backend/compose.yaml` — server + MySQL + phpMyAdmin + seeding z `database.sql`.
- `backend/Dockerfile` — gunicorn na porcie 3000; `backend/requirements.txt` zawiera gunicorn.
- `backend/static/` — `cv.pdf`, `profile.png`.

Frontend (Vite + React) – stan bieżący:
- Nawigacja hero: karty Experience/Education/Projects/Contact z ikonami MUI; animacje mask reveal zależne od kierunku (strzałki).
- Uruchomienie: w `frontend` `npm install` i `npm run dev` (port 5173). API domyślnie `http://localhost:3000/all-data`.

Pliki kluczowe (frontend):
- `frontend/src/App.jsx`, `frontend/src/App.css`
- Komponenty: `frontend/src/components/Projects.jsx`, `Languages.jsx`, `SocialMedia.jsx`, `ContactList.jsx`, `Timeline.jsx`, `Section.jsx`
- Hook/API: `frontend/src/hooks/useData.js`
- Entry/build: `frontend/src/main.jsx`, `frontend/vite.config.js`

Co dalej (plan):
- Postawić frontend (np. Vite + React) w nowym katalogu `./frontend` obok backendu. Sekcje: Hero (avatar, imię, CTA download), About, Skills, Education, Experience, Certificates, Contact/Social, smooth scroll zamiast przeładowań. Kolorystyka biały/czerwony/czarny (jak PDF).
- Na start można użyć danych statycznych lub pobierać z `http://localhost:3000/all-data` (CORS włączony).
- Przycisk „Download CV” kierować do `/download-cv`.
- Responsywność: kolumny na desktop, stacking na mobile; zadbać o anchor nawigację.

Uwagi:
- W terminalu lokalnym może pojawiać się `/bin/ps: Operation not permitted` z shellenv; listing działa, ignorować.
- Repozytoria referencyjne p-tech są przeniesione do `./ptech_references/` (ptech-5, ptech-5_frontend, ptech-5_backend, ptech-5_deployment).
