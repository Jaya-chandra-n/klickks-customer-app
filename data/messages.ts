export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
};

export type Conversation = {
  id: string;
  photographerId: string;
  photographerName: string;
  photographerAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
};

export const initialConversations: Conversation[] = [
  {
    id: 'conv1',
    photographerId: 'p1',
    photographerName: 'Arjun Photography',
    photographerAvatar: 'https://picsum.photos/seed/klickks_avatar_1/200/200',
    lastMessage: 'Sure, we will bring the 4K drone operator as requested.',
    lastMessageTime: '10:30 AM',
    unreadCount: 1,
  },
  {
    id: 'conv2',
    photographerId: 'p2',
    photographerName: 'Meera Studios',
    photographerAvatar: 'https://picsum.photos/seed/klickks_avatar_2/200/200',
    lastMessage: 'Your fashion portfolio edits are ready! Sending Google Drive link.',
    lastMessageTime: '11:45 AM',
    unreadCount: 2,
  },
  {
    id: 'conv3',
    photographerId: 'p3',
    photographerName: 'Pixel Stories by Rahul',
    photographerAvatar: 'https://picsum.photos/seed/klickks_avatar_3/200/200',
    lastMessage: 'Looking forward to our Lonavala pre-wedding shoot!',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: 'conv4',
    photographerId: 'p4',
    photographerName: 'Priya Captures',
    photographerAvatar: 'https://picsum.photos/seed/klickks_avatar_4/200/200',
    lastMessage: 'The baby shoot props and backdrops have been prepared.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: 'conv5',
    photographerId: 'p5',
    photographerName: 'Vikram Lens Art',
    photographerAvatar: 'https://picsum.photos/seed/klickks_avatar_5/200/200',
    lastMessage: 'Can we confirm the shoot timing at 6:30 AM for golden hour?',
    lastMessageTime: '2 days ago',
    unreadCount: 0,
  },
  {
    id: 'conv6',
    photographerId: 'p6',
    photographerName: 'Nisha Creative Studio',
    photographerAvatar: 'https://picsum.photos/seed/klickks_avatar_6/200/200',
    lastMessage: 'Thank you for choosing Nisha Creative Studio!',
    lastMessageTime: '3 days ago',
    unreadCount: 0,
  },
];

export const initialMessages: Record<string, Message[]> = {
  'conv1': [
    { id: 'm1_1', conversationId: 'conv1', senderId: 'cust-001', text: 'Hi Arjun, I wanted to discuss the details for our upcoming wedding booking.', timestamp: '2026-10-01T09:00:00Z', isRead: true },
    { id: 'm1_2', conversationId: 'conv1', senderId: 'p1', text: 'Hello Jay! Yes, of course. Please let me know what you need.', timestamp: '2026-10-01T09:15:00Z', isRead: true },
    { id: 'm1_3', conversationId: 'conv1', senderId: 'cust-001', text: 'We were thinking of adding aerial drone coverage for the Baraat. Is that available?', timestamp: '2026-10-01T09:45:00Z', isRead: true },
    { id: 'm1_4', conversationId: 'conv1', senderId: 'p1', text: 'Absolutely! Our premium package includes 4K drone coverage.', timestamp: '2026-10-01T10:00:00Z', isRead: true },
    { id: 'm1_5', conversationId: 'conv1', senderId: 'cust-001', text: 'That sounds perfect to me. Please lock in the slot.', timestamp: '2026-10-01T10:15:00Z', isRead: true },
    { id: 'm1_6', conversationId: 'conv1', senderId: 'p1', text: 'Sure, we will bring the 4K drone operator as requested.', timestamp: '2026-10-01T10:30:00Z', isRead: false },
  ],
  'conv2': [
    { id: 'm2_1', conversationId: 'conv2', senderId: 'cust-001', text: 'Hi Meera, when can I expect the final color-graded photos from our fashion shoot?', timestamp: '2026-10-01T11:00:00Z', isRead: true },
    { id: 'm2_2', conversationId: 'conv2', senderId: 'p2', text: 'Hi Jay, our team is doing the final retouching right now!', timestamp: '2026-10-01T11:30:00Z', isRead: false },
    { id: 'm2_3', conversationId: 'conv2', senderId: 'p2', text: 'Your fashion portfolio edits are ready! Sending Google Drive link.', timestamp: '2026-10-01T11:45:00Z', isRead: false },
  ],
  'conv3': [
    { id: 'm3_1', conversationId: 'conv3', senderId: 'cust-001', text: 'Hi Rahul, loved your portfolio. Are you available for a pre-wedding shoot next month in Lonavala?', timestamp: '2026-09-30T14:00:00Z', isRead: true },
    { id: 'm3_2', conversationId: 'conv3', senderId: 'p3', text: 'Hi Jay! Thank you. Yes, I have a few dates open next month.', timestamp: '2026-09-30T14:30:00Z', isRead: true },
    { id: 'm3_3', conversationId: 'conv3', senderId: 'cust-001', text: 'Great. What are your charges for a one-day shoot there?', timestamp: '2026-09-30T15:00:00Z', isRead: true },
    { id: 'm3_4', conversationId: 'conv3', senderId: 'p3', text: 'For Lonavala, it would be ₹25,000 for the day, plus travel arrangements.', timestamp: '2026-09-30T15:15:00Z', isRead: true },
    { id: 'm3_5', conversationId: 'conv3', senderId: 'p3', text: 'Looking forward to our Lonavala pre-wedding shoot!', timestamp: '2026-09-30T15:30:00Z', isRead: true },
  ],
  'conv4': [
    { id: 'm4_1', conversationId: 'conv4', senderId: 'cust-001', text: 'Hi Priya! Do you provide props for the newborn baby shoot?', timestamp: '2026-09-29T16:00:00Z', isRead: true },
    { id: 'm4_2', conversationId: 'conv4', senderId: 'p4', text: 'Yes, Jay! We have sanitized wooden baskets, floral wraps, and cute outfits.', timestamp: '2026-09-29T16:20:00Z', isRead: true },
    { id: 'm4_3', conversationId: 'conv4', senderId: 'p4', text: 'The baby shoot props and backdrops have been prepared.', timestamp: '2026-09-29T17:00:00Z', isRead: true },
  ],
  'conv5': [
    { id: 'm5_1', conversationId: 'conv5', senderId: 'cust-001', text: 'Hi Vikram, what is the best time for the outdoor couple portrait shoot?', timestamp: '2026-09-28T09:00:00Z', isRead: true },
    { id: 'm5_2', conversationId: 'conv5', senderId: 'p5', text: 'Early morning golden hour is best for natural light aesthetics!', timestamp: '2026-09-28T09:30:00Z', isRead: true },
    { id: 'm5_3', conversationId: 'conv5', senderId: 'p5', text: 'Can we confirm the shoot timing at 6:30 AM for golden hour?', timestamp: '2026-09-28T10:00:00Z', isRead: true },
  ],
  'conv6': [
    { id: 'm6_1', conversationId: 'conv6', senderId: 'cust-001', text: 'Hi Nisha, thanks for the corporate event photo delivery.', timestamp: '2026-09-27T18:00:00Z', isRead: true },
    { id: 'm6_2', conversationId: 'conv6', senderId: 'p6', text: 'You are most welcome, Jay! It was a pleasure working with your team.', timestamp: '2026-09-27T18:30:00Z', isRead: true },
    { id: 'm6_3', conversationId: 'conv6', senderId: 'p6', text: 'Thank you for choosing Nisha Creative Studio!', timestamp: '2026-09-27T19:00:00Z', isRead: true },
  ],
};
