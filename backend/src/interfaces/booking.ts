export interface Booking {
  id: string;
  experienceId: string;
  date: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  totalPrice: number;
}