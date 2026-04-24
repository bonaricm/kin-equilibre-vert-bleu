import { Star } from "lucide-react";
import BalanceLogo from "./BalanceLogo";

const Footer = () => {
  const googleReviewUrl = "https://search.google.com/local/writereview?kgs=9f2c72be86812c7e";
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Google Reviews Card */}
        <div className="mb-10 flex justify-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-4 bg-primary-foreground text-primary rounded-2xl px-6 py-5 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-[1.02] max-w-xl w-full"
          >
            <div className="flex items-center gap-3">
              {/* Google logo */}
              <svg className="w-9 h-9 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-cormorant text-lg font-semibold leading-tight">
                  Votre avis compte
                </span>
                <div className="flex items-center gap-0.5 mt-0.5" aria-label="5 étoiles">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm opacity-80">
                Partagez votre expérience et aidez d'autres patients à nous découvrir.
              </p>
            </div>
            <span className="text-sm font-medium underline-offset-4 group-hover:underline whitespace-nowrap">
              Laisser un avis →
            </span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <BalanceLogo size="sm" useImage={false} />
            <div>
              <p className="font-cormorant text-xl font-semibold">
                Kiné'quilibre
              </p>
              <p className="text-sm opacity-80">
                Mélanie ENSENAT BONARIC
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#accueil" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Accueil
            </a>
            <a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Services
            </a>
            <a href="#apropos" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              À propos
            </a>
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Contact
            </a>
          </nav>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">25ter route de Nissan</p>
            <p className="text-sm opacity-80">34710 Lespignan</p>
            <p className="text-xs opacity-60 mt-1">​07 81 98 24 87        </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Kiné'quilibre - Mélanie ENSENAT BONARIC. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;