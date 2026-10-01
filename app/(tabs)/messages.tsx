import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMessagesStore } from '@/stores/messages';
import { Avatar } from '@/components/ui/avatar';
import { EmptyState } from '@/components/ui/empty-state';
import { MessageSquareIcon, ChevronRightIcon, HelpIcon } from '@/utils/icons';

export default function MessagesScreen() {
  const router = useRouter();
  const { conversations, init } = useMessagesStore();

  useEffect(() => {
    init();
  }, [init]);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header matching Profile Header (No Shadows) */}
      <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-figtree-bold text-2xl text-[#232323]">
              Messages
            </Text>
            <Text className="font-figtree text-xs text-[#232323]/60 mt-0.5">
              Chat directly with your booked photographers
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Help"
            style={({ pressed }) => ({
              width: 44,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 22,
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <HelpIcon size={36} color="#232323" />
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
        {conversations && conversations.length > 0 ? (
          conversations.map((conv) => (
            <TouchableOpacity
              key={conv.id}
              onPress={() => router.push(`/chat/${conv.id}`)}
              activeOpacity={0.85}
              className="flex-row items-center bg-white p-4 rounded-[20px] border border-[#23232314] mb-3"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 12,
                elevation: 4,
              }}
            >
              <Avatar
                url={conv.photographerAvatar}
                name={conv.photographerName}
                size="lg"
              />

              <View className="flex-1 ml-3.5 mr-2">
                <View className="flex-row items-center justify-between mb-1">
                  <Text
                    className="font-figtree-bold text-base text-[#232323]"
                    numberOfLines={1}
                  >
                    {conv.photographerName}
                  </Text>
                  <Text className="font-figtree text-[10px] text-[#232323]/40">
                    {conv.lastMessageTime}
                  </Text>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text
                    className="font-figtree text-xs text-[#232323]/60 flex-1 mr-2"
                    numberOfLines={1}
                  >
                    {conv.lastMessage}
                  </Text>

                  {conv.unreadCount > 0 ? (
                    <View className="w-5 h-5 rounded-full bg-[#232323] items-center justify-center">
                      <Text className="font-figtree-bold text-[10px] text-white">
                        {conv.unreadCount}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>

              <ChevronRightIcon size={20} color="#232323" />
            </TouchableOpacity>
          ))
        ) : (
          <EmptyState
            icon={<MessageSquareIcon size={28} color="#232323" />}
            title="No Conversations Yet"
            description="Book a photographer or initiate an inquiry to start chatting here."
            actionLabel="Discover Photographers"
            onAction={() => router.push('/(tabs)/explore')}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
