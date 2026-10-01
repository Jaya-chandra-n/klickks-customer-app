import { create } from 'zustand';

export type BookingStep =
    | 'service'
    | 'date'
    | 'time'
    | 'details'
    | 'summary'
    | 'payment'
    | 'confirmation';

type EventDetails = {
    eventName: string;
    location: string;
    eventType: string;
    hours: number;
    notes: string;
};

type BookingFlowState = {
    photographerId: string;
    photographerName: string;
    photographerAvatar: string;
    selectedServiceId: string;
    selectedServiceName: string;
    selectedServicePrice: number;
    selectedDate: string;
    selectedTime: string;
    eventDetails: EventDetails;
    paymentMethod: string;
    currentStep: BookingStep;
    bookingId: string;
    travelFee: number;
    platformFee: number;
    totalAmount: number;

    setPhotographer: (id: string, name: string, avatar: string) => void;
    setService: (id: string, name: string, price: number) => void;
    setDate: (date: string) => void;
    setTime: (time: string) => void;
    setEventDetails: (details: EventDetails) => void;
    setPaymentMethod: (method: string) => void;
    setStep: (step: BookingStep) => void;
    calculateTotal: () => void;
    completeBooking: () => string;
    reset: () => void;
};

const initialState = {
    photographerId: '',
    photographerName: '',
    photographerAvatar: '',
    selectedServiceId: '',
    selectedServiceName: '',
    selectedServicePrice: 0,
    selectedDate: '',
    selectedTime: '',
    eventDetails: {
        eventName: '',
        location: '',
        eventType: '',
        hours: 1,
        notes: '',
    },
    paymentMethod: '',
    currentStep: 'service' as BookingStep,
    bookingId: '',
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 0,
};

export const useBookingFlowStore = create<BookingFlowState>((set, get) => ({
    ...initialState,

    setPhotographer: (id, name, avatar) =>
        set({
            photographerId: id,
            photographerName: name,
            photographerAvatar: avatar,
            selectedServiceId: '',
            selectedServiceName: '',
            selectedServicePrice: 0,
            selectedDate: '',
            selectedTime: '',
            eventDetails: {
                eventName: '',
                location: '',
                eventType: '',
                hours: 1,
                notes: '',
            },
            paymentMethod: '',
            currentStep: 'service',
            bookingId: '',
        }),

    setService: (id, name, price) => {
        set({
            selectedServiceId: id,
            selectedServiceName: name,
            selectedServicePrice: price,
        });
        // Auto-calculate total when service is set
        const { travelFee, platformFee } = get();
        set({ totalAmount: price + travelFee + platformFee });
    },

    setDate: (date) => set({ selectedDate: date }),
    setTime: (time) => set({ selectedTime: time }),
    setEventDetails: (details) => set({ eventDetails: details }),
    setPaymentMethod: (method) => set({ paymentMethod: method }),
    setStep: (step) => set({ currentStep: step }),

    calculateTotal: () => {
        const { selectedServicePrice, travelFee, platformFee } = get();
        set({ totalAmount: selectedServicePrice + travelFee + platformFee });
    },

    completeBooking: () => {
        const bookingId =
            'KX-' +
            Math.floor(100000 + Math.random() * 900000).toString();
        set({ bookingId, currentStep: 'confirmation' });
        return bookingId;
    },

    reset: () => set(initialState),
}));
