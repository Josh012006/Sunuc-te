import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { experiences } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import {
  MapPin,
  Calendar as CalendarIcon,
  Users,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find((exp) => exp.id === id);
  
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  const totalPrice = experience.price * guests;
  const serviceFee = totalPrice * 0.1;
  const finalPrice = totalPrice + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error('Veuillez sélectionner une date');
      return;
    }

    // Simulate booking
    toast.success('Réservation confirmée ! Redirection...');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-slate-50 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to={`/experience/${id}`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'expérience
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 md:p-8">
                  <h1 className="text-2xl font-bold mb-6">Finaliser votre réservation</h1>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Date & Guests */}
                    <div className="space-y-4">
                      <h2 className="text-lg font-semibold">Détails du voyage</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date de l'expérience</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, 'PPP', { locale: fr }) : 'Choisir une date'}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="guests">Nombre de voyageurs</Label>
                          <select
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                          >
                            {Array.from({ length: experience.maxGroupSize }, (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} {i === 0 ? 'personne' : 'personnes'}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h2 className="text-lg font-semibold">Informations personnelles</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Votre prénom"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Votre nom"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+221 XX XXX XX XX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <h2 className="text-lg font-semibold">Mode de paiement</h2>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="border rounded-lg p-4 cursor-pointer hover:border-sky-600 transition-colors">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-sky-600" />
                            <div>
                              <div className="font-semibold">Carte bancaire</div>
                              <div className="text-sm text-slate-600">Visa, Mastercard, American Express</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiration</Label>
                          <Input
                            id="expiry"
                            type="text"
                            placeholder="MM/AA"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            type="text"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600"
                    >
                      Confirmer et payer {formatPrice(finalPrice)}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      En confirmant, vous acceptez nos conditions générales et notre politique d'annulation
                    </p>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Résumé de la réservation</h2>

                  {/* Experience Preview */}
                  <div className="mb-6">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold mb-2">{experience.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  {/* Booking Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-slate-600" />
                        <span>Date</span>
                      </div>
                      <span className="font-semibold">
                        {date ? format(date, 'dd/MM/yyyy') : 'Non sélectionnée'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-slate-600" />
                        <span>Voyageurs</span>
                      </div>
                      <span className="font-semibold">{guests}</span>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>{formatPrice(experience.price)} x {guests} {guests > 1 ? 'personnes' : 'personne'}</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span>Frais de service</span>
                      <span>{formatPrice(serviceFee)}</span>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-sky-600">
                      {formatPrice(finalPrice)}
                    </span>
                  </div>

                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-emerald-800">
                        <div className="font-semibold mb-1">Annulation gratuite</div>
                        <div>Annulation gratuite jusqu'à 24h avant le début de l'activité</div>
                      </div>
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
