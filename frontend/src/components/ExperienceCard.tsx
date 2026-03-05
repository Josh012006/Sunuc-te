import { Link } from 'react-router';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import type { Experience } from '../data/mockData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Link to={`/experience/${experience.id}`}>
        <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-3 right-3">
              <Badge className="bg-white/90 text-slate-900 hover:bg-white">
                {experience.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Location */}
            <div className="flex items-center gap-1 text-sm text-slate-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
              {experience.title}
            </h3>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-sm">{experience.rating}</span>
              </div>
              <span className="text-sm text-slate-500">
                ({experience.reviewCount} avis)
              </span>
            </div>

            {/* Info */}
            <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Max {experience.maxGroupSize}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 pt-3 border-t">
              <span className="text-2xl font-bold text-sky-600">
                {formatPrice(experience.price)}
              </span>
              <span className="text-sm text-slate-500">/ personne</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
