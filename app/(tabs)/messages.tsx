import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMessagesStore } from '@/stores/messages';
import { Avatar } from '@/components/ui/avatar';
import { EmptyState } from '@/components/ui/empty-state';
import { MessageSkeleton } from '@/components/ui/skeleton';
import {
  MessageSquareIcon,
  ChevronRightIcon,
  HelpIcon,
  SearchIcon,
  CloseIcon,
  CheckCircleIcon,
} from '@/utils/icons';

type FilterTab = 'all' | 'unread';

export default function MessagesScreen() {
  const router = useRouter();
  const { conversations, init } = useMessagesStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    init();
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [init]);

  // Total unread count across all conversations
  const totalUnread = useMemo(() => {
    return (conversations || []).reduce((acc, curr) => acc + (curr.unreadCount || 0), 0);
  }, [conversations]);

  // Filtered conversations based on search & tab
  const filteredConversations = useMemo(() => {
    let list = conversations || [];

    // Filter by tab
    if (activeTab === 'unread') {
      list = list.filter((c) => c.unreadCount > 0);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.photographerName.toLowerCase().includes(q) ||
          c.lastMessage.toLowerCase().includes(q)
      );
    }

    return list;
  }, [conversations, activeTab, searchQuery]);

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
      {/* ── Studio Header Bar ─────────────────────────────── */}
      <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
        <View className="flex-row items-center justify-between mb-3">
          <View>
            <View className="flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text allowFontScaling={false} className="font-figtree-bold text-2xl text-[#232323]">
                Messages
              </Text>
              {totalUnread > 0 && (
                <View className="bg-[#232323] px-2.5 py-0.5 rounded-full">
                  <Text allowFontScaling={false} className="font-figtree-bold text-xs text-white">
                    {totalUnread} new
                  </Text>
                </View>
              )}
            </View>
            <Text allowFontScaling={false} className="font-figtree text-xs text-[#6C6C6C] mt-0.5">
              Direct communication with your booked studio partners
            </Text>
          </View>
        </View>

        {/* ── Search Bar ────────────────────────────────────────── */}
        <View className="flex-row items-center px-3.5 h-11 bg-[#F8F9FA] rounded-xl border border-[#23232314] mt-1">
          <SearchIcon size={16} color="#6C6C6C" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search messages or studios..."
            placeholderTextColor="#8C8C8C"
            className="flex-1 font-figtree text-sm text-[#232323] ml-2.5 h-full"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} activeOpacity={0.7}>
              <CloseIcon size={16} color="#6C6C6C" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* ── Active Studio Partners Carousel (Top Story Row) ───── */}
        {conversations && conversations.length > 0 && (
          <View className="py-4 bg-white border-b border-[#23232314] mb-3">
            <Text className="font-figtree-bold text-xs uppercase tracking-wider text-[#6C6C6C] px-5 mb-3">
              Active Studio Partners
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {conversations.map((conv) => (
                <TouchableOpacity
                  key={conv.id}
                  onPress={() => router.push(`/chat/${conv.id}`)}
                  activeOpacity={0.8}
                  className="items-center mr-4 w-16"
                >
                  <View className="relative">
                    <Avatar
                      url={conv.photographerAvatar}
                      name={conv.photographerName}
                      size="lg"
                    />
                    {/* Active Status Dot */}
                    <View className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                  </View>
                  <Text
                    className="font-figtree-medium text-xs text-[#232323] mt-1.5 text-center"
                    numberOfLines={1}
                  >
                    {conv.photographerName.split(' ')[0]}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* ── Filter Tabs (All / Unread) ─────────────────────────── */}
        <View className="px-5 my-2 flex-row items-center justify-between">
          <View className="flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <TouchableOpacity
              onPress={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full border ${
                activeTab === 'all'
                  ? 'bg-[#232323] border-[#232323]'
                  : 'bg-white border-[#2323231F]'
              }`}
            >
              <Text
                className={`font-figtree-semibold text-xs ${
                  activeTab === 'all' ? 'text-white' : 'text-[#232323]'
                }`}
              >
                All Chats ({conversations?.length || 0})
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab('unread')}
              className={`px-4 py-2 rounded-full border ${
                activeTab === 'unread'
                  ? 'bg-[#232323] border-[#232323]'
                  : 'bg-white border-[#2323231F]'
              }`}
            >
              <Text
                className={`font-figtree-semibold text-xs ${
                  activeTab === 'unread' ? 'text-white' : 'text-[#232323]'
                }`}
              >
                Unread ({totalUnread})
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Conversation List ──────────────────────────────────── */}
        <View className="px-5 mt-2">
          {isLoading ? (
            <>
              <MessageSkeleton />
              <MessageSkeleton />
              <MessageSkeleton />
            </>
          ) : filteredConversations && filteredConversations.length > 0 ? (
            filteredConversations.map((conv) => {
              const isUnread = conv.unreadCount > 0;
              return (
                <TouchableOpacity
                  key={conv.id}
                  onPress={() => router.push(`/chat/${conv.id}`)}
                  activeOpacity={0.88}
                  className={`flex-row items-center p-4 rounded-2xl border mb-3 ${
                    isUnread
                      ? 'bg-white border-[#232323] shadow-sm'
                      : 'bg-white border-[#23232314]'
                  }`}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: isUnread ? 0.08 : 0.03,
                    shadowRadius: 8,
                    elevation: isUnread ? 3 : 1,
                  }}
                >
                  {/* Avatar with Status Badge */}
                  <View className="relative">
                    <Avatar
                      url={conv.photographerAvatar}
                      name={conv.photographerName}
                      size="lg"
                    />
                    <View className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                  </View>

                  {/* Message Details */}
                  <View className="flex-1 ml-3.5 mr-2">
                    <View className="flex-row items-center justify-between mb-1">
                      <View className="flex-row items-center flex-1 mr-2" style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <Text
                          className={`font-figtree-bold text-base ${
                            isUnread ? 'text-[#232323]' : 'text-[#232323]'
                          }`}
                          numberOfLines={1}
                        >
                          {conv.photographerName}
                        </Text>
                        <CheckCircleIcon size={14} color="#00A03C" />
                      </View>

                      <Text
                        className={`font-figtree text-[11px] ${
                          isUnread ? 'font-figtree-bold text-[#00A03C]' : 'text-[#6C6C6C]'
                        }`}
                      >
                        {conv.lastMessageTime}
                      </Text>
                    </View>

                    <View className="flex-row items-center justify-between">
                      <Text
                        className={`font-figtree text-xs flex-1 mr-2 ${
                          isUnread
                            ? 'font-figtree-bold text-[#232323]'
                            : 'text-[#6C6C6C]'
                        }`}
                        numberOfLines={1}
                      >
                        {conv.lastMessage}
                      </Text>

                      {isUnread ? (
                        <View className="bg-[#00A03C] px-2 py-0.5 rounded-full items-center justify-center min-w-[20px]">
                          <Text className="font-figtree-bold text-[10px] text-white">
                            {conv.unreadCount}
                          </Text>
                        </View>
                      ) : (
                        <ChevronRightIcon size={16} color="#8C8C8C" />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View className="pt-6">
              <EmptyState
                icon={<MessageSquareIcon size={32} color="#232323" />}
                title={searchQuery ? 'No Matching Messages' : 'No Conversations Yet'}
                description={
                  searchQuery
                    ? `No chats found matching "${searchQuery}". Try clearing your search.`
                    : 'Book a photographer or initiate an inquiry to start chatting here.'
                }
                actionLabel={searchQuery ? 'Clear Search' : 'Discover Photographers'}
                onAction={() => {
                  if (searchQuery) setSearchQuery('');
                  else router.push('/(tabs)/explore');
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
