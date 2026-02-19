Codex / dev notes (resume guide)
================================

Stan projektu:
- Klon użytkownika: `./backend` to app Flask z endpointami `/all-data` (zbiera me/skills/languages/experience/education/certificates/soft_skills/social_media) i `/download-cv` (serwuje `static/cv.pdf`).
- Kontakt: email/phone przeniesione do nowej tabeli `contact`, endpoint `/all-data` zwraca ją jako `contact`.
- Dodane repo szkoleniowe obok: `./ptech-5`, `./ptech-5_backend`, `./ptech-5_frontend`, `./ptech-5_deployment` (referencje, nie modyfikować CV).
- Baza: schema + seed w `backend/database.sql` (dane z PDF CV; avatar `/static/profile.png`), ładuje się automatycznie przez docker-entrypoint.

Docker / uruchomienie backendu:
- W `backend`: `docker compose up -d` (Docker Desktop musi być running).
- Serwisy: `server` (Flask+gunicorn na 3000), `db` (MySQL 6033:3306), `phpmyadmin` (8081).
- DB creds: host `db` (z hosta: localhost:6033), user `user`, pass `password`, db `app`.
- Sprawdzenie: `http://localhost:3000/all-data`, `http://localhost:3000/download-cv`, phpMyAdmin `http://localhost:8081` (login user/password, host db).

Pliki kluczowe:
- `backend/app.py` — prosty agregator `/all-data`, download CV.
- `backend/db.py` — connector MySQL (env: DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT).
- `backend/compose.yaml` — server + MySQL + phpMyAdmin + seeding z `database.sql`.
- `backend/Dockerfile` — gunicorn na porcie 3000; `backend/requirements.txt` zawiera gunicorn.
- `backend/static/` — `cv.pdf`, `profile.png`.

Co dalej (plan):
- Postawić frontend (np. Vite + React) w nowym katalogu `./frontend` obok backendu. Sekcje: Hero (avatar, imię, CTA download), About, Skills, Education, Experience, Certificates, Contact/Social, smooth scroll zamiast przeładowań. Kolorystyka biały/czerwony/czarny (jak PDF).
- Na start można użyć danych statycznych lub pobierać z `http://localhost:3000/all-data` (CORS włączony).
- Przycisk „Download CV” kierować do `/download-cv`.
- Responsywność: kolumny na desktop, stacking na mobile; zadbać o anchor nawigację.

Frontend (Vite + React) – stan bieżący:
- Nowy projekt w `./frontend` (Vite + React). Ikony Material UI, hero nawigacja z czterema kartami (Experience/Education/Skills/Contact) z ikonami-wodnym znakiem (opacity hover, lift). Toolbar w main-card używa ikon MUI.
- Style: `.card-icon` pozycjonowana bliżej środka (translate 40%, 40%), stabilizacja layoutu przez `:root { scrollbar-gutter: stable; }` i `body { overflow-y: scroll; }`, większe paddings strony, sidebar z zaokrągleniami i większym avatarem.
- Uruchomienie: w `frontend` `npm install` (pakiety Vite + MUI icons) i `npm run dev` (domyślnie port 5173). API można wskazać na backend `http://localhost:3000/all-data` według potrzeb w hookach.
- Główne pliki frontu: `src/App.jsx`, `src/App.css`, `src/components/*`, `src/hooks/useData`. Kolor przewodni: `rgb(255, 49, 48)`.

Uwaga:
- W terminalu lokalnym może pojawiać się `/bin/ps: Operation not permitted` z shellenv; listing działa, ignorować.
- Repozytoria referencyjne p-tech są przeniesione do `./ptech_references/` (ptech-5, ptech-5_frontend, ptech-5_backend, ptech-5_deployment).
