import { create } from 'zustand';
import { Booking, initialBookings } from '@/data/bookings';

type BookingsListState = {
  bookings: Booking[];
  initialized: boolean;
  init: () => void;
  addBooking: (booking: Booking) => void;
  cancelBooking: (id: string) => void;
};

export const useBookingsListStore = create<BookingsListState>((set, get) => ({
  bookings: initialBookings,
  initialized: true,
  init: () => {
    if (!get().initialized) {
      set({ bookings: initialBookings, initialized: true });
    }
  },
  addBooking: (booking) => {
    set((state) => ({ bookings: [booking, ...state.bookings] }));
  },
  cancelBooking: (id) => {
    set((state) => ({
      bookings: state.bookings.map((b) =>
        b.id === id ? { ...b, status: 'cancelled', paymentStatus: 'refunded' } : b
      ),
    }));
  },
}));
