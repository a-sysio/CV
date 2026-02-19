import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import Section from './components/Section'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import { downloadUrl, useData } from './hooks/useData'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const cards = [
  { id: 'about', label: 'About me', icon: <PersonOutlineOutlinedIcon fontSize="inherit" /> },
  { id: 'education', label: 'Education', icon: <SchoolOutlinedIcon fontSize="inherit" /> },
  { id: 'skills', label: 'Skills', icon: <CodeOutlinedIcon fontSize="inherit" /> },
  { id: 'experience', label: 'Experience', icon: <WorkOutlineIcon fontSize="inherit" /> },
  { id: 'contact', label: 'Contact', icon: <MailOutlineIcon fontSize="inherit" /> },
]

function App() {
  const { data, loading, error } = useData()
  const me = data?.me?.[0] || {}
  const [currentCard, setCurrentCard] = useState('about')

  const setCard = (id) => setCurrentCard(id)
  const next = () => {
    const idx = cards.findIndex((c) => c.id === currentCard)
    setCard(cards[(idx + 1) % cards.length].id)
  }
  const prev = () => {
    const idx = cards.findIndex((c) => c.id === currentCard)
    setCard(cards[(idx - 1 + cards.length) % cards.length].id)
  }

  const renderCard = () => {
    if (loading) return <p className="status">Ładowanie danych...</p>
    if (error) return <p className="status error">{error}</p>

    switch (currentCard) {
      case 'experience':
        return (
          <Section id="experience" title="Experience">
            <div className="timeline-scroll">
              <Timeline items={data?.experience || []} />
            </div>
          </Section>
        )

      case 'education':
        return (
          <Section id="education" title="Education">
            <div className="timeline-scroll">
              <Timeline items={data?.education || []} />
            </div>
          </Section>
        )

      case 'skills':
        return (
          <Section id="skills" title="Skills">
            <div className="timeline-scroll">
              <Skills skills={data?.skills} languages={data?.languages} />
            </div>
          </Section>
        )

      case 'contact':
        return (
          <Section id="contact" title="Contact">
            <div className="timeline-scroll">
              <ContactList items={data?.social_media || []} large />
            </div>
          </Section>
        )
      case 'about':
      default:
        return (
          <>
            <div className='hero-about'>
            <div className="hero-main">
              <div className='name-title'>
                <h1 className='name'>{me.full_name}</h1>
                <a className="title">{'Student IT'}</a>
              </div>
              <p className="body">
                <p>
                  In the field of IT, I am interested in web development, programming, and 3D printing. I started learning computer science on my own at the age of 12. I am easily interested in everything related to this world.
                  <br />
                  I guess I just like learning new things.
                </p>
                  {'Besides that I am also passionate about sailing, chess, scouting, and sports. So I am no stranger to teamwork with different people on different tasks.'}              
                <p>
                  {'You can learn more about me below:'}
                </p> 
              </p> 
            </div>
            <div className="hero-photo">
            <img src={'/profile.png'} alt="Profile large" />
            </div>
          </div>
          
          <div className="hero-nav">
              <a href="#education" className="hero-card" onClick={() => setCard('education')}>
                <span>Education</span>
                <SchoolOutlinedIcon className="card-icon" />
              </a>
              <a href="#skills" className="hero-card" onClick={() => setCard('skills')}>
                <span>Skills</span>
                <CodeOutlinedIcon className="card-icon" />
              </a>
              <a href="#experience" className="hero-card" onClick={() => setCard('experience')}>
                <span>Experience</span>
                <WorkOutlineIcon className="card-icon"/>
              </a>
              <a href="#contact" className="hero-card" onClick={() => setCard('contact')}>
                <span>Contact</span>
                <MailOutlineIcon className="card-icon" />
              </a>
          </div>
          </>
        )
    }
  }

  return (
    <div className="page">
      <div className="bg-blur" />
      <div className="main-card">
        <aside className="sidebar">
          <div className="mini-avatar">
            <img src={'/cv_profil.png'} alt="cv_profil" />
          </div>
          <div className='sidebar-name-role'>
            <h2 className="sidebar-name">{me.full_name}</h2>
            <a className="sidebar-role">{'Student IT'}</a>
          </div>
          <div className="social-row">
            <a className="social-circle" href="https://www.facebook.com/olek.sysio.5" target="_blank" rel="noreferrer"><FacebookTwoToneIcon/></a>
            <a className="social-circle" href="https://www.instagram.com/a.sysio/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
            <a className="social-circle" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a className="social-circle" href="https://github.com/a-sysio" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <div className="sidebar-contact">
            <a>{me.email}</a>
          </div>
          <a className="btn ghost sidebar-btn" href={downloadUrl} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <p className="copyright">© 2022 All rights reserved.</p>
        </aside>

        <main className="content">
          <div className="top-row">
            <div className="hero-main-block">{renderCard()}</div>
            
            <div className="toolbar">
              <div className="toolbar-icons">
                {cards.map((c) => (
                  <button
                    key={c.id}
                    className={`tool ${currentCard === c.id ? 'active' : ''}`}
                    onClick={() => setCard(c.id)}
                    aria-label={c.label}
                  >
                    {c.icon}
                  </button>
                ))}
                <div className="nav-arrows">
                  <button onClick={next} aria-label="Prev" className="arrow-btn up">
                    <ArrowForwardIosIcon fontSize="small" />
                  </button>
                  <button onClick={prev} aria-label="Next" className="arrow-btn down">
                    <ArrowBackIosNewIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
