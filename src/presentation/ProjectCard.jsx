import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
    return <motion.article className={`project project-${project.accent}`} initial={{ opacity: 0, y: 40, rotate: index % 2 ? 1.5 : -1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .14, ease: [0.22, 1, 0.36, 1] }}>
        <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
        <h3>{project.title}</h3><p>{project.description}</p><p className="project-detail">{project.detail}</p><p className="project-outcome"><strong>What changed</strong>{project.outcome}</p>
        <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </motion.article>
}
