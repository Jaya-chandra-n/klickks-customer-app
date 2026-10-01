export type CustomerProfile = {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
  location: string;
  city: string;
};

export const defaultCustomer: CustomerProfile = {
  id: 'cust-001',
  name: 'Jay',
  phone: '+91 98765 43210',
  email: 'jay@email.com',
  avatar: 'https://picsum.photos/seed/customer1/200/200',
  location: 'Koramangala, Bangalore',
  city: 'Bangalore',
};
