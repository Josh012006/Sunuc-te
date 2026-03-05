export interface Experience {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  highlights: string[];
  includedItems: string[];
  guideId: string;
  maxGroupSize: number;
  language: string[];
  difficulty?: string;
}

export interface Guide {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  experiencesCount: number;
  responseTime: string;
  joinedDate: string;
  specialties: string[];
}

export interface Booking {
  id: string;
  experienceId: string;
  date: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  totalPrice: number;
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Découverte du Lac Rose & Dunes de Lompoul',
    location: 'Lac Retba, Dakar',
    category: 'Nature & Aventure',
    price: 45000,
    duration: 'Journée complète (8h)',
    rating: 4.9,
    reviewCount: 127,
    image: 'https://images.unsplash.com/photo-1625001071825-0a85373c8972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW5lZ2FsJTIwRGFrYXIlMjBiZWFjaCUyMG9jZWFufGVufDF8fHx8MTc3MjU1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Explorez le magnifique Lac Rose (Lac Retba) célèbre pour sa couleur unique rose-rouge, puis aventurez-vous dans les dunes de Lompoul pour une expérience saharienne authentique.',
    highlights: [
      'Baignade dans le Lac Rose aux eaux salées',
      'Rencontre avec les collecteurs de sel traditionnels',
      'Safari en 4x4 dans les dunes de Lompoul',
      'Déjeuner typique sénégalais',
      'Vue panoramique au coucher du soleil'
    ],
    includedItems: ['Transport en 4x4', 'Guide francophone', 'Déjeuner', 'Eau minérale', 'Assurance'],
    guideId: '1',
    maxGroupSize: 8,
    language: ['Français', 'Anglais', 'Wolof'],
    difficulty: 'Facile'
  },
  {
    id: '2',
    title: 'Visite Historique de l\'Île de Gorée',
    location: 'Île de Gorée, Dakar',
    category: 'Culture & Histoire',
    price: 25000,
    duration: 'Demi-journée (4h)',
    rating: 4.8,
    reviewCount: 243,
    image: 'https://images.unsplash.com/photo-1657302699239-c350f0372260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb3JlZSUyMElzbGFuZCUyMFNlbmVnYWwlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzI1NTgzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Plongez dans l\'histoire de l\'Afrique en visitant l\'île de Gorée, classée au patrimoine mondial de l\'UNESCO. Découvrez la Maison des Esclaves et les ruelles colorées de cette île emblématique.',
    highlights: [
      'Traversée en ferry depuis Dakar',
      'Visite guidée de la Maison des Esclaves',
      'Exploration des ruelles pavées et maisons coloniales',
      'Musée historique de Gorée',
      'Temps libre pour shopping artisanal'
    ],
    includedItems: ['Ferry aller-retour', 'Guide historien', 'Entrées aux musées', 'Eau minérale'],
    guideId: '2',
    maxGroupSize: 15,
    language: ['Français', 'Anglais', 'Espagnol'],
    difficulty: 'Facile'
  },
  {
    id: '3',
    title: 'Safari au Parc National du Djoudj',
    location: 'Saint-Louis, Nord Sénégal',
    category: 'Nature & Aventure',
    price: 65000,
    duration: 'Journée complète (10h)',
    rating: 5.0,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1721011530324-24efd646543b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2FmYXJpJTIwU2VuZWdhbCUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MjU1ODMyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Découvrez l\'un des sites ornithologiques les plus importants au monde. Observez plus de 400 espèces d\'oiseaux migrateurs, des pélicans, flamants roses et crocodiles.',
    highlights: [
      'Safari en pirogue traditionnelle',
      'Observation de millions d\'oiseaux migrateurs',
      'Visite de la vieille ville coloniale de Saint-Louis',
      'Déjeuner au bord du fleuve Sénégal',
      'Photos exceptionnelles garanties'
    ],
    includedItems: ['Transport climatisé', 'Safari en pirogue', 'Guide ornithologue', 'Déjeuner', 'Jumelles', 'Frais d\'entrée'],
    guideId: '3',
    maxGroupSize: 6,
    language: ['Français', 'Anglais'],
    difficulty: 'Modérée'
  },
  {
    id: '4',
    title: 'Cours de Cuisine Sénégalaise Traditionnelle',
    location: 'Dakar - Almadies',
    category: 'Gastronomie',
    price: 18000,
    duration: '3 heures',
    rating: 4.9,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1528047705243-ebb19baf436f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW5lZ2FsJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNTU4MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Apprenez à préparer les plats emblématiques du Sénégal : Thiéboudienne, Yassa Poulet, Mafé. Cours interactif dans une maison traditionnelle avec dégustation.',
    highlights: [
      'Visite du marché local pour acheter les ingrédients',
      'Préparation de 3 plats traditionnels',
      'Techniques culinaires sénégalaises',
      'Dégustation en famille',
      'Livret de recettes offert'
    ],
    includedItems: ['Ingrédients', 'Équipement de cuisine', 'Repas complet', 'Livret de recettes', 'Tablier souvenir'],
    guideId: '4',
    maxGroupSize: 10,
    language: ['Français', 'Anglais'],
    difficulty: 'Facile'
  },
  {
    id: '5',
    title: 'Nuit sous les Étoiles & Tam-Tam au Village',
    location: 'Toubab Dialaw',
    category: 'Culture & Immersion',
    price: 35000,
    duration: '2 jours / 1 nuit',
    rating: 4.7,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1772268337010-03e52e5b9a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBkYW5jZSUyMGRydW1zfGVufDF8fHx8MTc3MjU1ODMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Immersion totale dans un village sénégalais authentique. Participez aux activités quotidiennes, soirée tam-tam et danse traditionnelle, nuit à la belle étoile.',
    highlights: [
      'Accueil chaleureux par les villageois',
      'Cours de percussions sabar et djembé',
      'Initiation à la danse sabar',
      'Repas communautaires traditionnels',
      'Contes africains autour du feu'
    ],
    includedItems: ['Hébergement en case traditionnelle', 'Tous les repas', 'Cours de percussions', 'Spectacle de danse', 'Guide culturel'],
    guideId: '1',
    maxGroupSize: 12,
    language: ['Français', 'Wolof', 'Anglais'],
    difficulty: 'Facile'
  },
  {
    id: '6',
    title: 'Surf & Yoga à N\'Gor Island',
    location: 'Île de N\'Gor, Dakar',
    category: 'Sport & Détente',
    price: 28000,
    duration: 'Journée (6h)',
    rating: 4.8,
    reviewCount: 134,
    image: 'https://images.unsplash.com/photo-1625001071825-0a85373c8972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW5lZ2FsJTIwRGFrYXIlMjBiZWFjaCUyMG9jZWFufGVufDF8fHx8MTc3MjU1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Matinée de surf sur les vagues de N\'Gor, suivie d\'une session de yoga relaxante face à l\'océan. Déjeuner healthy et temps libre sur la plage paradisiaque.',
    highlights: [
      'Cours de surf pour tous niveaux',
      'Équipement de surf fourni',
      'Session de yoga sunset',
      'Déjeuner healthy au bord de l\'eau',
      'Traversée en pirogue traditionnelle'
    ],
    includedItems: ['Cours de surf 2h', 'Planche et combinaison', 'Cours de yoga 1h', 'Déjeuner', 'Transport en pirogue'],
    guideId: '5',
    maxGroupSize: 8,
    language: ['Français', 'Anglais'],
    difficulty: 'Tous niveaux'
  },
];

export const guides: Guide[] = [
  {
    id: '1',
    name: 'Mamadou Diallo',
    avatar: 'https://images.unsplash.com/photo-1559154352-06e29e1e11aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbG9jYWwlMjBndWlkZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyNTU4MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Guide touristique passionné depuis 12 ans, spécialisé dans les aventures nature et l\'écotourisme. Je connais chaque recoin du Sénégal et j\'adore partager ma culture.',
    languages: ['Français', 'Anglais', 'Wolof', 'Espagnol'],
    rating: 4.9,
    reviewCount: 387,
    experiencesCount: 8,
    responseTime: 'Moins d\'une heure',
    joinedDate: '2012',
    specialties: ['Nature', 'Aventure', 'Écotourisme', 'Photographie']
  },
  {
    id: '2',
    name: 'Aïssatou Ndiaye',
    avatar: 'https://images.unsplash.com/photo-1717064153056-84b0e7c8bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW5lZ2FsZXNlJTIwd29tYW4lMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MjU1ODMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Historienne de formation et guide certifiée. Je suis spécialisée dans le patrimoine culturel et historique du Sénégal, notamment l\'île de Gorée.',
    languages: ['Français', 'Anglais', 'Espagnol', 'Portugais'],
    rating: 5.0,
    reviewCount: 512,
    experiencesCount: 12,
    responseTime: 'Dans l\'heure',
    joinedDate: '2010',
    specialties: ['Histoire', 'Culture', 'Patrimoine', 'Art']
  },
  {
    id: '3',
    name: 'Ibrahima Sarr',
    avatar: 'https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTU4MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ornithologue passionné et expert en safaris. Je guide les visiteurs dans les réserves naturelles du Sénégal depuis 15 ans.',
    languages: ['Français', 'Anglais'],
    rating: 4.95,
    reviewCount: 298,
    experiencesCount: 6,
    responseTime: '30 minutes',
    joinedDate: '2009',
    specialties: ['Ornithologie', 'Safari', 'Faune', 'Photographie animalière']
  },
  {
    id: '4',
    name: 'Fatou Mbaye',
    avatar: 'https://images.unsplash.com/photo-1717064153056-84b0e7c8bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW5lZ2FsZXNlJTIwd29tYW4lMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MjU1ODMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Chef cuisinière et ambassadrice de la gastronomie sénégalaise. Je transmets les secrets de nos recettes traditionnelles avec passion.',
    languages: ['Français', 'Anglais', 'Wolof'],
    rating: 4.9,
    reviewCount: 423,
    experiencesCount: 5,
    responseTime: 'Moins d\'une heure',
    joinedDate: '2015',
    specialties: ['Gastronomie', 'Cuisine', 'Traditions', 'Marchés locaux']
  },
  {
    id: '5',
    name: 'Ousmane Fall',
    avatar: 'https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTU4MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Surfeur professionnel et instructeur de yoga. Je combine ma passion pour l\'océan et le bien-être pour des expériences uniques.',
    languages: ['Français', 'Anglais', 'Wolof'],
    rating: 4.85,
    reviewCount: 267,
    experiencesCount: 4,
    responseTime: 'Dans l\'heure',
    joinedDate: '2017',
    specialties: ['Surf', 'Yoga', 'Sports nautiques', 'Bien-être']
  }
];

export const categories = [
  { id: 'all', name: 'Toutes les expériences', icon: '🌍' },
  { id: 'nature', name: 'Nature & Aventure', icon: '🏞️' },
  { id: 'culture', name: 'Culture & Histoire', icon: '🎭' },
  { id: 'gastronomy', name: 'Gastronomie', icon: '🍲' },
  { id: 'sport', name: 'Sport & Détente', icon: '🏄' },
  { id: 'immersion', name: 'Immersion Locale', icon: '🏘️' },
];
