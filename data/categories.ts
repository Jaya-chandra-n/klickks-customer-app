export type Category = {
  id: string;
  name: string;
  icon: string;
  image: string;
};

export const categories: Category[] = [
  { id: 'cat1', name: 'Wedding', icon: '💒', image: 'https://picsum.photos/seed/cat_wedding/300/200' },
  { id: 'cat2', name: 'Pre-Wedding', icon: '💑', image: 'https://picsum.photos/seed/cat_prewed/300/200' },
  { id: 'cat3', name: 'Portrait', icon: '📸', image: 'https://picsum.photos/seed/cat_portrait/300/200' },
  { id: 'cat4', name: 'Birthday', icon: '🎂', image: 'https://picsum.photos/seed/cat_birthday/300/200' },
  { id: 'cat5', name: 'Maternity', icon: '🤰', image: 'https://picsum.photos/seed/cat_maternity/300/200' },
  { id: 'cat6', name: 'Events', icon: '🎉', image: 'https://picsum.photos/seed/cat_events/300/200' },
  { id: 'cat7', name: 'Fashion', icon: '👗', image: 'https://picsum.photos/seed/cat_fashion/300/200' },
  { id: 'cat8', name: 'Corporate', icon: '🏢', image: 'https://picsum.photos/seed/cat_corporate/300/200' },
  { id: 'cat9', name: 'Baby Shoot', icon: '👶', image: 'https://picsum.photos/seed/cat_baby/300/200' },
  { id: 'cat10', name: 'Food', icon: '🍽️', image: 'https://picsum.photos/seed/cat_food/300/200' },
];
