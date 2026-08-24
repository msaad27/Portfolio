import { useState } from 'react'
import { navigationLinks } from '../domain/portfolioData'

export default function Nav({ onOpenContact, onDownload }) {
    const [open, setOpen] = useState(false)

    return <header className="site-nav">
        <a className="brand" href="#home" aria-label="Mohammad Saad home">Mohammad<span>.</span></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Close' : 'Menu'}</button>
        <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
            {navigationLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
            <button className="nav-resume" onClick={onDownload}>↓ Resume</button>
        </nav>
        <button className="nav-contact" onClick={onOpenContact} type="button">Let&apos;s talk ↗</button>
    </header>
}
