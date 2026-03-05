import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { experiences, guides } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import {
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  CheckCircle2,
  MessageCircle,
  Share2,
  Heart,
  Globe,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';

export function ExperiencePage() {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === id);
  const guide = experience ? guides.find((g) => g.id === experience.guideId) : null;

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Expérience non trouvée</h1>
            <Link to="/search">
              <Button>Retour à la recherche</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        {/* Image Hero */}
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 bg-white shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Badge className="mb-3">{experience.category}</Badge>
                      <h1 className="text-3xl font-bold mb-3">{experience.title}</h1>
                      <div className="flex items-center gap-4 text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-5 w-5" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                          <span className="font-semibold">{experience.rating}</span>
                          <span>({experience.reviewCount} avis)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-sky-600" />
                      <div>
                        <div className="text-sm text-slate-600">Durée</div>
                        <div className="font-semibold">{experience.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-sky-600" />
                      <div>
                        <div className="text-sm text-slate-600">Groupe</div>
                        <div className="font-semibold">Max {experience.maxGroupSize}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-sky-600" />
                      <div>
                        <div className="text-sm text-slate-600">Langues</div>
                        <div className="font-semibold">{experience.language[0]}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Description */}
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">À propos de cette expérience</h2>
                <p className="text-slate-700 leading-relaxed">{experience.description}</p>
              </Card>

              {/* Highlights */}
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Points forts</h2>
                <ul className="space-y-3">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Included Items */}
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Inclus dans le prix</h2>
                <ul className="space-y-3">
                  {experience.includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Guide Info */}
              {guide && (
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Votre guide</h2>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={guide.avatar} alt={guide.name} />
                      <AvatarFallback>{guide.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{guide.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold">{guide.rating}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-3">{guide.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.languages.map((lang) => (
                          <Badge key={lang} variant="secondary">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                      <Link to={`/guide/${guide.id}`}>
                        <Button variant="outline">Voir le profil complet</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6 shadow-xl">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-sky-600">
                        {formatPrice(experience.price)}
                      </span>
                      <span className="text-slate-600">/ personne</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{experience.rating}</span>
                      <span className="text-slate-600">
                        ({experience.reviewCount} avis)
                      </span>
                    </div>
                  </div>

                  <Separator className="mb-6" />

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          title="date"
                          type="date"
                          className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Voyageurs</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <select title="group-size" className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600">
                          {Array.from({ length: experience.maxGroupSize }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} {i === 0 ? 'personne' : 'personnes'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <Link to={`/booking/${experience.id}`}>
                    <Button className="w-full bg-linear-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 mb-3" size="lg">
                      Réserver maintenant
                    </Button>
                  </Link>

                  <Button variant="outline" className="w-full" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contacter le guide
                  </Button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    Vous ne serez pas débité maintenant
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
