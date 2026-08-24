import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './presentation/ContactModal'
import Nav from './presentation/Nav'
import ProjectCard from './presentation/ProjectCard'
import SectionLabel from './presentation/SectionLabel'
import { contact, experience, projects, technicalSkills } from './domain/portfolioData'
import { downloadResume } from './application/downloadResume'

const revealTransition = { duration: .75, ease: [0.22, 1, 0.36, 1] }

function RevealSection({ children, className, id }) {
    return <motion.section id={id} className={className} initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16, margin: '0px 0px -10% 0px' }} transition={revealTransition}>{children}</motion.section>
}

function Hero({ onDownload }) {
    return <section id="home" className="hero section-wrap">
        <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Mobile developer / Salesforce developer</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Building <br /><em>products</em> for people.</motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .18 }}>I&apos;m Mohammad Saad, a Flutter developer who turns complex product ideas into thoughtful, reliable mobile experiences.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }}><a className="button button-primary" href="#work">See my work ↗</a><button className="text-link" onClick={onDownload}>Download resume ↓</button></motion.div>
        </div>
        <div className="hero-visual" aria-label="Abstract preview of a mobile product interface"><div className="visual-topline"><span>Field notes / 04</span><span>Live systems</span></div><div className="visual-route"><span className="route-dot" /><span className="route-line" /><span className="route-dot route-dot-end" /></div><div className="visual-panel"><div className="panel-header"><span>Today</span><b>09:41</b></div><div className="panel-title">Small details.<br /><em>Useful outcomes.</em></div><div className="panel-bars"><i /><i /><i /></div><div className="panel-footer"><span>Flutter / Firebase</span><span>↗</span></div></div><p className="visual-caption">Interfaces that respect<br />the person using them.</p></div>
        <a href="#work" className="scroll-cue"><span>Scroll to explore</span>↓</a>
    </section>
}

function About() {
    return <RevealSection id="about" className="section-wrap about-section"><div><SectionLabel>01 / About</SectionLabel><h2>Good work starts<br />with <em>curiosity.</em></h2></div><div className="about-copy"><p>I care about the details that make software feel natural: a clear flow, a quick response, and a product that does what it promises.</p><p>My background spans mobile development and Salesforce operations. That mix helps me think in both interfaces and systems, from the first sketch to the data underneath.</p><div className="fact-row"><div><strong>3+</strong><span>years building</span></div><div><strong>10+</strong><span>countries supported</span></div><div><strong>9.02</strong><span>engineering CGPA</span></div></div></div></RevealSection>
}

function Work() {
    return <RevealSection id="work" className="section-wrap work-section"><div className="section-heading"><div><SectionLabel>02 / Selected work</SectionLabel><h2>Projects with<br /><em>purpose.</em></h2></div><p>Real-time products, considered flows, and a fondness for clean architecture.</p></div><div className="project-list">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div></RevealSection>
}

function Toolkit() {
    return <RevealSection id="toolkit" className="section-wrap toolkit-section"><div className="toolkit-intro"><SectionLabel>03 / Toolkit</SectionLabel><h2>The tools<br /><em>behind it.</em></h2><p>Practical technologies chosen for stable products, clear ownership, and useful feedback loops.</p></div><div className="skill-groups">{Object.entries(technicalSkills).map(([group, skills], groupIndex) => <motion.div className="skill-group" key={group} initial={{ opacity: 0, x: groupIndex % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6, delay: groupIndex * .1 }}><span className="skill-group-label">{group}</span><div className="skill-chips">{skills.map((skill, index) => <motion.span key={skill} initial={{ opacity: 0, scale: .85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: groupIndex * .1 + index * .04 }}>{skill}</motion.span>)}</div></motion.div>)}</div></RevealSection>
}

function Experience() {
    return <RevealSection id="experience" className="section-wrap experience-section"><SectionLabel>05 / Experience</SectionLabel><div className="experience-grid"><div><h2>The long<br /><em>view.</em></h2><p className="experience-intro">A practice shaped by two kinds of work: building the product and understanding the system it lives in.</p></div><div className="timeline">{experience.map((item, index) => <motion.article key={item.date} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ ...revealTransition, delay: index * .14 }}><div className="date">{item.date}</div><div><h3>{item.role}</h3><p>{item.summary}</p><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div></motion.article>)}</div></div></RevealSection>
}

function Contact({ onOpen }) {
    return <RevealSection id="contact" className="section-wrap contact-section"><SectionLabel>06 / Contact</SectionLabel><h2>Have a good<br /><em>problem?</em></h2><p>Let&apos;s make something useful, clear, and a little bit memorable.</p><button className="button button-primary" onClick={onOpen}>Start a conversation ↗</button><motion.div className="contact-footer" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ ...revealTransition, delay: .2 }}><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phone}`}>{contact.phone}</a><span>{contact.location}</span>{/* Social links kept ready for personal URLs: <div className="socials"><a href="https://github.com" rel="noreferrer">GitHub</a><a href="https://linkedin.com" rel="noreferrer">LinkedIn</a></div> */}
    </motion.div></RevealSection>
}

export default function App() {
    const [contactOpen, setContactOpen] = useState(false)
    const [sent, setSent] = useState(false)

    useEffect(() => {
        const onKeyDown = event => event.key === 'Escape' && setContactOpen(false)
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    const closeContact = () => { setContactOpen(false); setSent(false) }
    const submitContact = event => { event.preventDefault(); setSent(true) }

    return <div className="portfolio-shell">
        <Nav onOpenContact={() => setContactOpen(true)} onDownload={downloadResume} />
        <main><Hero onDownload={downloadResume} /><About /><Work /><Toolkit /><Experience /><Contact onOpen={() => setContactOpen(true)} /></main>
        <footer className="site-footer"><span>Mohammad Saad<span>.</span></span><span>© 2026 Mohammad Saad</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer>
        <ContactModal open={contactOpen} sent={sent} onClose={closeContact} onSubmit={submitContact} onReset={closeContact} />
    </div>
}
