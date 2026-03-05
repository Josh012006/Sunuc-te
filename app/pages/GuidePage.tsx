import { useParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExperienceCard } from '../components/ExperienceCard';
import { guides, experiences } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';
import {
  Star,
  MessageCircle,
  MapPin,
  Calendar,
  Award,
  Languages,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

export function GuidePage() {
  const { id } = useParams();
  const guide = guides.find((g) => g.id === id);
  const guideExperiences = guide
    ? experiences.filter((exp) => exp.guideId === guide.id)
    : [];

  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Guide non trouvé</h1>
            <Link to="/search">
              <Button>Retour à la recherche</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-sky-600 via-sky-500 to-amber-500 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                <AvatarImage src={guide.avatar} alt={guide.name} />
                <AvatarFallback className="text-4xl">{guide.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left text-white">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                  <h1 className="text-4xl font-bold">{guide.name}</h1>
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mb-4">
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Star className="h-5 w-5 fill-white" />
                    <span className="font-semibold">{guide.rating}</span>
                    <span>({guide.reviewCount} avis)</span>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    {guide.experiencesCount} expériences
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    Membre depuis {guide.joinedDate}
                  </div>
                </div>

                <p className="text-lg text-white/90 max-w-2xl">{guide.bio}</p>
              </div>

              <div>
                <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-50">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contacter
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experiences */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Expériences proposées ({guideExperiences.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guideExperiences.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                  ))}
                </div>
              </div>

              {/* Reviews Section (Mock) */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Avis des voyageurs</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      name: 'Sophie Martin',
                      date: 'Février 2026',
                      rating: 5,
                      comment: 'Guide exceptionnel ! Une expérience inoubliable grâce à sa passion et ses connaissances approfondies du Sénégal.',
                    },
                    {
                      name: 'Jean Dupont',
                      date: 'Janvier 2026',
                      rating: 5,
                      comment: 'Très professionnel et à l\'écoute. Les explications étaient passionnantes et l\'organisation parfaite.',
                    },
                    {
                      name: 'Marie Leclerc',
                      date: 'Décembre 2025',
                      rating: 4,
                      comment: 'Super guide, très sympathique et arrangeant. Je recommande vivement !',
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-slate-600">{review.date}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Info */}
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Informations</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Temps de réponse</div>
                        <div className="text-sm text-slate-600">{guide.responseTime}</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <Languages className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Langues parlées</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {guide.languages.map((lang) => (
                            <Badge key={lang} variant="secondary">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Spécialités</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {guide.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Basé à</div>
                        <div className="text-sm text-slate-600">Dakar, Sénégal</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Membre depuis</div>
                        <div className="text-sm text-slate-600">{guide.joinedDate}</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Certifications */}
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Certifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm">Guide touristique certifié</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm">Premiers secours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm">Identité vérifiée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm">Assurance professionnelle</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
