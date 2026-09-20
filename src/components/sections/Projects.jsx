import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '../../data/projects'

function Projects() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected Projects"
          description="Une sélection de projets récents, entre applications mobiles, plateformes web et expérimentations techniques."
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 80}>
            <ProjectCard project={project} index={index} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}

export default Projects
