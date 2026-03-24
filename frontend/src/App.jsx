import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import Section from './components/Section'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import SocialMedia from './components/SocialMedia'
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
import Languages from './components/Languages'

const cards = [
  { id: 'about', label: 'About me', icon: <PersonOutlineOutlinedIcon fontSize="inherit" /> },
  { id: 'education', label: 'Education', icon: <SchoolOutlinedIcon fontSize="inherit" /> },
  { id: 'projects', label: 'Projects', icon: <CodeOutlinedIcon fontSize="inherit" /> },
  { id: 'experience', label: 'Experience', icon: <WorkOutlineIcon fontSize="inherit" /> },
  { id: 'contact', label: 'Contact', icon: <MailOutlineIcon fontSize="inherit" /> },
]

function App() {
  const { data, loading, error } = useData()
  const me = data?.me?.[0] || {}
  const contactList = data?.contact || []
  const socialMediaList = data?.social_media || []
  const contactEmail = contactList.find((c) => c.platform === 'email')?.value
  const contactPhone = contactList.find((c) => c.platform === 'phone')?.value
  const [currentCard, setCurrentCard] = useState('about')
  const [animDirection, setAnimDirection] = useState('forward')

  const setCard = (id) => setCurrentCard(id)
  const next = () => {
    const idx = cards.findIndex((c) => c.id === currentCard)
    setAnimDirection('forward')
    setCard(cards[(idx + 1) % cards.length].id)
  }
  const prev = () => {
    const idx = cards.findIndex((c) => c.id === currentCard)
    setAnimDirection('backward')
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
          <>
          <Section id="education" title="Education">
            <div className="timeline-scroll">
              <Timeline items={data?.education || []} />
            </div>
          </Section>        
          </>
        )

      case 'projects':
        return (
          <div className="projects-tab">
            <Section id="languages" title="Languages">
              <div className="timeline-scroll">
                <Languages items={data?.languages || []} />
              </div>
            </Section>

            <Section id="projects" title="Projects">
              <div className="timeline-scroll">
                <Projects projects={data?.projects || []} />
              </div>
            </Section>
          </div>
        )

      case 'contact':
        return (
          <>
          <Section id="contact" title="Contact">
            <div className="timeline-scroll">
              <ContactList items={contactList} />
            </div>
          </Section>
          <Section id="contact" title="Social Media">
            <div className="timeline-scroll">
              <SocialMedia items={socialMediaList} />
            </div>
          </Section>
          </>
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
              <a href="#projects" className="hero-card" onClick={() => setCard('projects')}>
                <span>Skills & Projects</span>
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
            {contactEmail && <a>{contactEmail}<br /></a>}
            {contactPhone && <a>{contactPhone}</a>}
          </div>
          <a className="btn ghost sidebar-btn" href={downloadUrl} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <p className="copyright">© 2022 All rights reserved.</p>
        </aside>

        <main className="content">
          <div className="top-row">
            <div className={`hero-main-block ${currentCard}`}>
              <div key={currentCard} className={`card-anim ${animDirection}`}>
                {renderCard()}
              </div>
            </div>
            
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
