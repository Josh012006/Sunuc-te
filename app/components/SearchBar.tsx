import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function SearchBar() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.append('destination', destination);
    if (date) params.append('date', date);
    if (guests) params.append('guests', guests);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-2 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Destination */}
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              <MapPin className="h-5 w-5 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold block text-slate-700">Destination</label>
                <Input
                  type="text"
                  placeholder="Où allez-vous ?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              <Calendar className="h-5 w-5 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold block text-slate-700">Date</label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              <Users className="h-5 w-5 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold block text-slate-700">Voyageurs</label>
                <Input
                  type="number"
                  placeholder="Nombre"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-center">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 shadow-lg"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 mr-2" />
              Rechercher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
