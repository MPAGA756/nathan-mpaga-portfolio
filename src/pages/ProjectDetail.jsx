import { useParams, Link } from 'react-router'
import { projects } from '../data/projects'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import TextLink from '../components/ui/TextLink'
import GithubIcon from '../components/ui/GithubIcon'
import RevealOnScroll from '../components/ui/RevealOnScroll'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-sm tracking-wide text-text-muted">Projet introuvable</p>
        <Link
          to="/"
          className="text-sm underline text-text-secondary hover:text-text-primary"
        >
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <RevealOnScroll>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 mb-10"
        >
          ← Retour aux projets
        </Link>

        <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-4">
          {project.category}
        </p>

        <h1 className="font-display font-semibold text-display leading-[1.05] text-text-primary mb-8">
          {project.title}
        </h1>

        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border bg-gradient-to-br from-surface to-bg-secondary mb-10">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
          {project.fullDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {project.demo && (
            <Button as="a" href={project.demo} variant="primary">
              Voir la démo
            </Button>
          )}
          {project.github && (
            <TextLink href={project.github}>
              <GithubIcon size={14} />
              Voir sur GitHub
            </TextLink>
          )}
          {!project.demo && !project.github && (
            <span className="text-sm text-text-muted italic">Projet privé</span>
          )}
        </div>
      </RevealOnScroll>
    </div>
  )
}

export default ProjectDetail
