import { Link } from 'react-router'
import Badge from '../ui/Badge'
import TextLink from '../ui/TextLink'
import GithubIcon from '../ui/GithubIcon'

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <div className="group rounded-lg border border-border bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_0_24px_var(--color-accent-glow)]">
      <Link to={`/projects/${project.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-bg-secondary to-surface">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-accent">{number}</span>
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-muted">
            {project.category}
          </span>
        </div>

        <Link to={`/projects/${project.slug}`}>
          <h3 className="font-display font-medium text-xl text-text-primary mb-2 hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </Link>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            to={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-primary border-b border-transparent hover:border-accent transition-colors duration-200"
          >
            View project
            <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
              →
            </span>
          </Link>
          {project.github && (
            <TextLink href={project.github}>
              <GithubIcon size={14} />
              GitHub
            </TextLink>
          )}
          {project.demo && <TextLink href={project.demo}>Live Demo</TextLink>}
          {!project.github && !project.demo && (
            <span className="text-sm text-text-muted italic">Projet privé</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
