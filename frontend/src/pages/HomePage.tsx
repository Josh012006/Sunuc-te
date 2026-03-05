import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SearchBar } from '../components/SearchBar';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiences, categories } from '../data/mockData';
import { Button } from '../components/ui/button';
import { ArrowRight, Star, Shield, HeadphonesIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomePage() {
  const featuredExperiences = experiences.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625001071825-0a85373c8972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW5lZ2FsJTIwRGFrYXIlMjBiZWFjaCUyMG9jZWFufGVufDF8fHx8MTc3MjU1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Senegal Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Découvrez le Sénégal Authentique
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Vivez des expériences uniques avec des guides locaux passionnés
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explorer par Catégorie</h2>
            <p className="text-slate-600 text-lg">Choisissez votre style d'aventure</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <Link
                key={category.id}
                to={`/search?category=${category.id}`}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-linear-to-br from-sky-50 to-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-slate-200"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-sm group-hover:text-sky-600 transition-colors">
                    {category.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Expériences Populaires</h2>
              <p className="text-slate-600 text-lg">Les meilleures aventures recommandées par nos voyageurs</p>
            </div>
            <Link to="/search">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                Voir tout
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/search">
              <Button variant="outline" className="items-center gap-2">
                Voir toutes les expériences
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi SunuCôte ?</h2>
            <p className="text-slate-600 text-lg">La meilleure façon de découvrir le Sénégal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Guides Certifiés</h3>
              <p className="text-slate-600">
                Tous nos guides sont certifiés et passionnés par leur métier
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Réservation Sécurisée</h3>
              <p className="text-slate-600">
                Paiement 100% sécurisé et annulation flexible
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <HeadphonesIcon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Support 24/7</h3>
              <p className="text-slate-600">
                Une équipe disponible pour vous accompagner à tout moment
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expériences Uniques</h3>
              <p className="text-slate-600">
                Découvrez le Sénégal hors des sentiers battus
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-sky-600 via-sky-500 to-amber-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt pour l'aventure ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Réservez dès maintenant votre prochaine expérience au Sénégal et créez des souvenirs inoubliables
            </p>
            <Link to="/search">
              <Button 
                size="lg" 
                className="bg-white text-sky-600 hover:bg-slate-50 text-lg px-8 py-6 h-auto shadow-xl"
              >
                Explorer les expériences
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
