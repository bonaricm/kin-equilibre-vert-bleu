import BalanceLogo from "./BalanceLogo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <span className="font-cormorant text-xl font-semibold">K</span>
            </div>
            <div>
              <p className="font-cormorant text-xl font-semibold">
                Kin'équilibre
              </p>
              <p className="text-sm opacity-70">
                Kinésithérapie Vestibulaire
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#accueil"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Services
            </a>
            <a
              href="#apropos"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </nav>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-70">Lespignan</p>
            <p className="text-xs opacity-50">Bassin Biterrois, Hérault</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Kin'équilibre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
