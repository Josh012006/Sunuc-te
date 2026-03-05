import { useState } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { experiences } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Settings,
  CreditCard,
  Bell,
  CheckCircle2,
  Clock,
  XCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingItem {
  id: string;
  experienceId: string;
  date: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  totalPrice: number;
}

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');

  // Mock bookings data
  const mockBookings: BookingItem[] = [
    {
      id: 'B001',
      experienceId: '1',
      date: '2026-03-15',
      guests: 2,
      status: 'confirmed',
      totalPrice: 90000,
    },
    {
      id: 'B002',
      experienceId: '3',
      date: '2026-03-20',
      guests: 4,
      status: 'pending',
      totalPrice: 260000,
    },
    {
      id: 'B003',
      experienceId: '4',
      date: '2026-02-28',
      guests: 3,
      status: 'completed',
      totalPrice: 54000,
    },
  ];

  // Mock favorites
  const mockFavorites = experiences.slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return (
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Confirmée
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
            <Clock className="h-3 w-3 mr-1" />
            En attente
          </Badge>
        );
      case 'completed':
        return (
          <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Terminée
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
            <XCircle className="h-3 w-3 mr-1" />
            Annulée
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-slate-50">
        {/* Profile Header */}
        <div className="bg-linear-to-br from-sky-600 via-sky-500 to-amber-500 py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6"
            >
              <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTU4MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080" />
                <AvatarFallback className="text-3xl">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-white">
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-white/90">john.doe@example.com</p>
              </div>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Settings className="h-5 w-5 mr-2" />
                Paramètres
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="bookings">
                <Calendar className="h-4 w-4 mr-2" />
                Mes réservations
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Heart className="h-4 w-4 mr-2" />
                Favoris
              </TabsTrigger>
              <TabsTrigger value="payments">
                <CreditCard className="h-4 w-4 mr-2" />
                Paiements
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Mes réservations</h2>
                
                {mockBookings.map((booking) => {
                  const experience = experiences.find((exp) => exp.id === booking.experienceId);
                  if (!experience) return null;

                  return (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                          <img
                            src={experience.image}
                            alt={experience.title}
                            className="w-full md:w-48 h-32 object-cover rounded-lg"
                          />

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  {experience.title}
                                </h3>
                                <div className="flex items-center gap-1 text-slate-600 mb-2">
                                  <MapPin className="h-4 w-4" />
                                  <span className="text-sm">{experience.location}</span>
                                </div>
                              </div>
                              {getStatusBadge(booking.status)}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-sky-600" />
                                <span>{formatDate(booking.date)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Users className="h-4 w-4 text-sky-600" />
                                <span>{booking.guests} {booking.guests > 1 ? 'personnes' : 'personne'}</span>
                              </div>
                              <div className="text-sm">
                                <span className="font-semibold">Total: </span>
                                <span className="text-sky-600 font-semibold">
                                  {formatPrice(booking.totalPrice)}
                                </span>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Link to={`/experience/${experience.id}`}>
                                <Button variant="outline" size="sm">
                                  Voir l'expérience
                                </Button>
                              </Link>
                              {booking.status === 'confirmed' && (
                                <Button variant="outline" size="sm">
                                  Modifier
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent value="favorites">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Mes favoris</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockFavorites.map((experience) => (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img
                            src={experience.image}
                            alt={experience.title}
                            className="w-full h-48 object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                          >
                            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{experience.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-slate-600 mb-3">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-sky-600">
                              {formatPrice(experience.price)}
                            </span>
                            <Link to={`/experience/${experience.id}`}>
                              <Button size="sm">Réserver</Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Historique des paiements</h2>
                
                <Card className="p-6">
                  <div className="text-center py-12">
                    <CreditCard className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Aucun paiement pour le moment</h3>
                    <p className="text-slate-600">
                      Vos paiements apparaîtront ici après votre première réservation
                    </p>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Notifications</h2>
                
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="p-2 bg-sky-100 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-sky-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Réservation confirmée</h4>
                        <p className="text-sm text-slate-600 mb-1">
                          Votre réservation pour "Découverte du Lac Rose" a été confirmée
                        </p>
                        <span className="text-xs text-slate-500">Il y a 2 jours</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="p-2 bg-amber-100 rounded-full">
                        <Bell className="h-5 w-5 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Rappel - Expérience à venir</h4>
                        <p className="text-sm text-slate-600 mb-1">
                          N'oubliez pas votre expérience "Safari au Parc National du Djoudj" dans 5 jours
                        </p>
                        <span className="text-xs text-slate-500">Il y a 3 jours</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-100 rounded-full">
                        <Heart className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Nouvelle expérience disponible</h4>
                        <p className="text-sm text-slate-600 mb-1">
                          Découvrez "Cours de Cuisine Sénégalaise" - parfait pour vous !
                        </p>
                        <span className="text-xs text-slate-500">Il y a 5 jours</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
