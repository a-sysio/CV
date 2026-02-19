CREATE DATABASE IF NOT EXISTS app;
USE app;

DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS me;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS languages;
DROP TABLE IF EXISTS experience;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS certificates;
DROP TABLE IF EXISTS soft_skills;
DROP TABLE IF EXISTS social_media;

CREATE TABLE me (
  id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  github VARCHAR(255),
  location VARCHAR(255)
);

CREATE TABLE contact (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255),
  phone VARCHAR(64)
);

CREATE TABLE skills (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(64) DEFAULT 'tech'
);

CREATE TABLE languages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  level VARCHAR(128) NOT NULL
);

CREATE TABLE experience (
  id INT PRIMARY KEY AUTO_INCREMENT,
  role VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  start_year VARCHAR(16),
  end_year VARCHAR(16),
  description TEXT,
  tags TEXT
);

CREATE TABLE education (
  id INT PRIMARY KEY AUTO_INCREMENT,
  school VARCHAR(255) NOT NULL,
  program VARCHAR(255) NOT NULL,
  start_year VARCHAR(16),
  end_year VARCHAR(16),
  description TEXT,
  tags TEXT
);

CREATE TABLE certificates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  issuer VARCHAR(255),
  year VARCHAR(16)
);

CREATE TABLE soft_skills (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE social_media (
  id INT PRIMARY KEY AUTO_INCREMENT,
  platform VARCHAR(64) NOT NULL,
  url VARCHAR(255),
  label VARCHAR(255)
);

INSERT INTO me (full_name, title, github, location) VALUES
('Aleksander Sysio', 'Student (IT technician)', 'https://github.com/a-sysio', 'Poland');

INSERT INTO contact (email, phone) VALUES
('sysio.olek@gmail.com', '+48 535 354 547');

INSERT INTO skills (name, category) VALUES
('HTML/CSS', 'tech'),
('JavaScript', 'tech'),
('React', 'tech'),
('Python', 'tech'),
('SQL', 'tech'),
('Hardware', 'tech'),
('Flask', 'tech'),
('Vue.js', 'tech'),
('Node.js', 'tech'),
('Docker', 'tech'),
('Linux', 'tech'),
('Git', 'tech');

INSERT INTO languages (name, level) VALUES
('English', 'C1'),
('Polish', 'Native');

INSERT INTO experience (role, company, start_year, end_year, description, tags) VALUES
('Group project on creating a website', 'Fujitsu Mentoring', '2022', '2024', 'Built a full-stack web project in a mentoring program.', 'Git, Flask, Scrum, Frontend, Backend'),
('Internship', 'TomTom', '2023', NULL, 'Worked with Kotlin and Android Studio on hardware/software tasks.', 'Kotlin, Android Studio, Hardware, Software');

INSERT INTO education (school, program, start_year, end_year, description, tags) VALUES
('Fujitsu P-Tech', 'Fujitsu IT training programme', '2020', '2025', 'DevOps, Cybersecurity, Clouds, Web development, Software, Hardware, Docker, AI plus soft-skills training.', 'DevOps, Cybersecurity, Clouds, Web development, Software, Hardware, Docker, AI, Marketing, Management, Communication, Critical Thinking, Multiculturalism in business'),
('Zespół Szkół Politechnicznych im. KEN', 'IT technician (5 grades)', '2020', '2025', 'Focus on IT programming, networks and databases.', 'IT, Programming, Networks, Databases'),
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
('Critical Thinking'),
('Multiculturalism in business');

INSERT INTO social_media (platform, url, label) VALUES
('email', 'mailto:sysio.olek@gmail.com', 'sysio.olek@gmail.com'),
('phone', 'tel:+48535354547', '+48 535 354 547'),
('github', 'https://github.com/a-sysio', 'github.com/a-sysio'),
('facebook', 'https://www.facebook.com/olek.sysio.5', 'facebook.com/olek.sysio.5'),
('instagram', 'https://www.instagram.com/a.sysio/', 'instagram.com/a.sysio'),
('linkedin', 'https://www.linkedin.com/feed/', 'linkedin.com');
