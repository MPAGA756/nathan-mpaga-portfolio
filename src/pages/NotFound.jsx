import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
      <p className="text-sm tracking-wide text-[#71717A]">404</p>
      <h1 className="text-2xl font-medium">Page introuvable</h1>
      <Link to="/" className="text-sm underline text-[#A1A1AA] hover:text-[#F5F5F5]">
        Retour à l'accueil
      </Link>
    </div>
  )
}

export default NotFound
