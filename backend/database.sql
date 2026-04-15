DROP TABLE IF EXISTS contact CASCADE;
DROP TABLE IF EXISTS me;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS languages;
DROP TABLE IF EXISTS experience;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS certificates;
DROP TABLE IF EXISTS soft_skills;
DROP TABLE IF EXISTS social_media;

CREATE TABLE me (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  github VARCHAR(255),
  location VARCHAR(255)
);

CREATE TABLE contact (
  id SERIAL PRIMARY KEY,
  platform VARCHAR(255),
  value VARCHAR(64)
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(64) DEFAULT 'tech'
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  level VARCHAR(128) NOT NULL
);

CREATE TABLE experience (
  id SERIAL PRIMARY KEY,
  role VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  start_year VARCHAR(16),
  end_year VARCHAR(16),
  description TEXT,
  tags TEXT
);

CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  school VARCHAR(255) NOT NULL,
  program VARCHAR(255) NOT NULL,
  start_year VARCHAR(16),
  end_year VARCHAR(16),
  description TEXT,
  tags TEXT
);

CREATE TABLE certificates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  issuer VARCHAR(255),
  year VARCHAR(16)
);

CREATE TABLE soft_skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE social_media (
  id SERIAL PRIMARY KEY,
  platform VARCHAR(64) NOT NULL,
  url VARCHAR(255),
  label VARCHAR(255)
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  github_link VARCHAR(255),
  link VARCHAR(255),
  tags TEXT
);

INSERT INTO me (full_name, title, github, location) VALUES
('Aleksander Sysio', 'Student (IT technician)', 'https://github.com/a-sysio', 'Poland');

INSERT INTO contact (platform, value) VALUES
('email', 'sysio.olek@gmail.com'),
('phone', '+48 535 354 547');

INSERT INTO skills (name) VALUES
('HTML/CSS'),
('JavaScript'),
('React'),
('Python'),
('SQL'),
('Hardware'),
('Flask'),
('Vue.js'),
('Node.js'),
('Docker'),
('Linux'),
('Git');

INSERT INTO languages (name, level) VALUES
('English', 'C1'),
('Polish', 'Native');

INSERT INTO experience (role, company, start_year, end_year, description, tags) VALUES
('Group project on creating a website', 'Fujitsu Mentoring', '2022', '2024', 'Building a full-stack web project in a mentoring program.', 'Git, Flask, Scrum, Frontend, Backend'),
('Internship', 'TomTom', '2023', NULL, 'Hardware/Software tasks and basics of Kotlin/Android Studio.', 'Hardware, Software, Kotlin, Android Studio');

INSERT INTO education (school, program, start_year, end_year, description, tags) VALUES
('Zespół Szkół Politechnicznych im. KEN', 'IT technician (5 grades)', '2020', '2025', 'Focus on IT programming, networks and databases.', 'IT, Programming, Networks, Databases'),
('Fujitsu P-Tech', 'Fujitsu IT training programme', '2020', '2025', 'DevOps, Cybersecurity, Clouds, Web development, Software, Hardware, Docker, AI + soft-skills training.', 'DevOps, Cybersecurity, Clouds, Web development, Software, Hardware, Docker, AI, Marketing, Management, Communication, Critical Thinking'),
('WSB Academy', 'Computer science', '2025', 'now', 'Continuing studies in computer science.', 'IT, Cybersecurity, Projects, Web apps');

INSERT INTO certificates (name, issuer, year) VALUES
('Fujitsu P-Tech 5 years', 'Fujitsu', NULL),
('Cisco NDG Linux Essentials', 'Cisco', NULL),
('Cambridge English Test B2', 'Cambridge', NULL),
('Pestalozzi’s Exchange Project', 'Pestalozzi', NULL),
('Vocational exam inf.02/inf.03', NULL, NULL);

INSERT INTO soft_skills (name) VALUES
('Teamwork'),
('Management'),
('Communication'),
('Critical Thinking');

INSERT INTO social_media (platform, url, label) VALUES
('github', 'https://github.com/a-sysio', 'github.com/a-sysio'),
('facebook', 'https://www.facebook.com/olek.sysio.5', 'facebook.com/olek.sysio.5'),
('instagram', 'https://www.instagram.com/a.sysio/', 'instagram.com/a.sysio'),
('linkedin', 'https://www.linkedin.com/feed/', 'linkedin.com');

INSERT INTO projects (title, description, github_link, link, tags) VALUES
('TomTom Map', 'Prototype mapping/tooling app created during TomTom internship.', 'https://github.com/a-sysio/TomTom_Map', NULL, 'Kotlin, Android Studio'),
('P-Tech 3', 'Fujitsu P-Tech year-3 project: web app built as part of the program.', 'https://github.com/a-sysio/ptech-3', NULL, 'React, Node.js, MySQL'),
('P-Tech 5', 'Fujitsu P-Tech final capstone project with full-stack features.', 'https://github.com/a-sysio/ptech-5', NULL, 'Vue.js, Flask, Docker'),
('CV', 'A personal CV website built with React and Flask, showcasing my skills and experience.', 'https://github.com/a-sysio/CV', 'www.aleksandersysio.com', 'React, Flask, HTML/CSS, Python, PostgresSQL, Docker');
