import { Link } from 'react-router';
import { Menu, User, Heart, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-semibold bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">
                SunuCôte
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/search" className="text-sm hover:text-sky-600 transition-colors">
              Expériences
            </Link>
            <Link to="/search?category=culture" className="text-sm hover:text-sky-600 transition-colors">
              Culture
            </Link>
            <Link to="/search?category=nature" className="text-sm hover:text-sky-600 transition-colors">
              Aventures
            </Link>
            <Link to="/search?category=gastronomy" className="text-sm hover:text-sky-600 transition-colors">
              Gastronomie
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/search" 
                className="text-sm hover:text-sky-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Expériences
              </Link>
              <Link 
                to="/search?category=culture" 
                className="text-sm hover:text-sky-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Culture
              </Link>
              <Link 
                to="/search?category=nature" 
                className="text-sm hover:text-sky-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Aventures
              </Link>
              <Link 
                to="/search?category=gastronomy" 
                className="text-sm hover:text-sky-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gastronomie
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
