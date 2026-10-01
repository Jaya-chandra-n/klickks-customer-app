import { create } from 'zustand';
import {
  Conversation,
  Message,
  initialConversations,
  initialMessages,
} from '@/data/messages';

type MessagesState = {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  initialized: boolean;
  init: () => void;
  sendMessage: (conversationId: string, text: string, photographerInfo?: { id: string; name: string; avatar: string }) => void;
};

export const useMessagesStore = create<MessagesState>((set, get) => ({
  conversations: initialConversations,
  messages: { ...initialMessages },
  initialized: true,

  init: () => {
    if (!get().conversations || get().conversations.length === 0) {
      set({
        conversations: initialConversations,
        messages: { ...initialMessages },
        initialized: true,
      });
    }
  },

  sendMessage: (
    conversationId: string,
    text: string,
    photographerInfo?: { id: string; name: string; avatar: string }
  ) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: Message = {
      id: 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(7),
      conversationId,
      text,
      senderId: 'cust-001',
      timestamp: new Date().toISOString(),
      isRead: true,
    };

    set((state) => {
      const existing = state.messages[conversationId] || [];
      const convExists = state.conversations.some((c) => c.id === conversationId);

      let updatedConversations: Conversation[];
      if (convExists) {
        updatedConversations = state.conversations.map((conv) =>
          conv.id === conversationId
            ? {
                ...conv,
                lastMessage: text,
                lastMessageTime: timeNow,
                unreadCount: 0,
              }
            : conv
        );
      } else {
        const newConv: Conversation = {
          id: conversationId,
          photographerId: photographerInfo?.id || 'p1',
          photographerName: photographerInfo?.name || 'Studio Partner',
          photographerAvatar: photographerInfo?.avatar || 'https://picsum.photos/seed/klickks_avatar_1/200/200',
          lastMessage: text,
          lastMessageTime: timeNow,
          unreadCount: 0,
        };
        updatedConversations = [newConv, ...state.conversations];
      }

      return {
        messages: {
          ...state.messages,
          [conversationId]: [...existing, newMessage],
        },
        conversations: updatedConversations,
      };
    });
  },
}));
