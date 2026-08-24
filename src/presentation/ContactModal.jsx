import { AnimatePresence, motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

export default function ContactModal({ open, sent, onClose, onSubmit, onReset }) {
    return <AnimatePresence>{open && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
        <motion.div className="contact-modal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            <button className="close-modal" onClick={onClose} aria-label="Close contact form">×</button>
            {sent ? <div className="sent-state"><span>✓</span><h3>Message noted.</h3><p>Thanks for reaching out. I&apos;ll be in touch soon.</p><button className="text-link" onClick={onReset}>Done</button></div> : <>
                <SectionLabel>Let&apos;s talk</SectionLabel><h3>Tell me what you&apos;re building.</h3>
                <form onSubmit={onSubmit}><input required maxLength="80" autoComplete="name" placeholder="Your name" aria-label="Your name" /><input required maxLength="160" autoComplete="email" type="email" placeholder="Email address" aria-label="Email address" /><textarea required maxLength="2000" rows="4" placeholder="A few words about the project" aria-label="Message" /><button className="button button-primary" type="submit">Send message ↗</button></form>
            </>}
        </motion.div>
    </motion.div>}</AnimatePresence>
}
