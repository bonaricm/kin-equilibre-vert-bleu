import BalanceLogo from "./BalanceLogo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
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
            <a
              href="#accueil"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Services
            </a>
            <a
              href="#apropos"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </nav>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">25ter route de Nissan</p>
            <p className="text-sm opacity-80">34710 Lespignan</p>
            <p className="text-xs opacity-60 mt-1">06 02 41 78 61</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Kiné'quilibre - Mélanie ENSENAT BONARIC. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
