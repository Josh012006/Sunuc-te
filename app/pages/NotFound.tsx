import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-amber-50">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🌴</div>
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          Oups ! Page introuvable
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          La page que vous cherchez semble s'être perdue dans les dunes du Sahel...
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-sky-600 to-sky-500">
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <Link to="/search">
            <Button size="lg" variant="outline">
              <Search className="h-5 w-5 mr-2" />
              Rechercher des expériences
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
