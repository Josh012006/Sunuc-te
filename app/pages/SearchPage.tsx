import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiences, categories } from '../data/mockData';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);

  useEffect(() => {
    let filtered = experiences;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((exp) =>
        exp.category.toLowerCase().includes(selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (exp) =>
          exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (exp) => exp.price >= priceRange[0] && exp.price <= priceRange[1]
    );

    setFilteredExperiences(filtered);
  }, [searchQuery, selectedCategory, priceRange]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Catégories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-sky-100 transition-colors"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon} {category.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Fourchette de prix</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={100000}
            step={5000}
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategory('all');
          setPriceRange([0, 100000]);
          setSearchQuery('');
        }}
      >
        <X className="h-4 w-4 mr-2" />
        Réinitialiser les filtres
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Rechercher une expérience</h1>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher par titre, lieu, description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filtres
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtres</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden md:block w-80 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-6">Filtres</h2>
              <FilterPanel />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-slate-600">
                {filteredExperiences.length} expérience{filteredExperiences.length > 1 ? 's' : ''} trouvée{filteredExperiences.length > 1 ? 's' : ''}
              </p>
            </div>

            {filteredExperiences.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Aucune expérience trouvée</h3>
                <p className="text-slate-600 mb-6">
                  Essayez d'ajuster vos filtres ou votre recherche
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 100000]);
                    setSearchQuery('');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
