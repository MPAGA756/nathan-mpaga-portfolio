import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import Badge from '../ui/Badge'

const SKILL_CATEGORIES = [
  {
    category: 'Development',
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'React', 'Vite', 'Tailwind CSS', 'NestJS'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Prisma'],
  },
  {
    category: 'Tools & Infrastructure',
    items: ['Git', 'GitHub', 'Unity'],
  },
]

function Skills() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Technologies"
          description="Les outils et langages que j'utilise pour concevoir et construire des produits numériques, du prototype à la mise en production."
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {SKILL_CATEGORIES.map((group, index) => (
          <RevealOnScroll key={group.category} delay={index * 80}>
            <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
