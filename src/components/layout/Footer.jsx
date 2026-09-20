import GithubIcon from '../ui/GithubIcon'

const GITHUB_URL = 'https://github.com/MPAGA756'
const EMAIL = 'mpagamederique@gmail.com'

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#71717A]">
        <span>© {new Date().getFullYear()} Nathan Mpaga</span>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-[#F5F5F5] transition-colors duration-200"
          >
            Email
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#F5F5F5] transition-colors duration-200"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
