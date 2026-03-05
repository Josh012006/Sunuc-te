import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-semibold bg-linear-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">
                SunuCôte
              </span>
            </Link>
            <p className="text-sm text-slate-600 mb-4">
              Découvrez le Sénégal authentique à travers des expériences uniques et inoubliables.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-slate-600 hover:text-sky-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-sky-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-sky-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-sky-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Expériences */}
          <div>
            <h3 className="font-semibold mb-4">Expériences</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/search?category=nature" className="hover:text-sky-600 transition-colors">Nature & Aventure</Link></li>
              <li><Link to="/search?category=culture" className="hover:text-sky-600 transition-colors">Culture & Histoire</Link></li>
              <li><Link to="/search?category=gastronomy" className="hover:text-sky-600 transition-colors">Gastronomie</Link></li>
              <li><Link to="/search?category=sport" className="hover:text-sky-600 transition-colors">Sport & Détente</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-sky-600 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Conditions générales</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Devenir guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Dakar, Sénégal</li>
              <li>+221 33 XXX XX XX</li>
              <li>contact@sunucote.sn</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} SunuCôte. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
