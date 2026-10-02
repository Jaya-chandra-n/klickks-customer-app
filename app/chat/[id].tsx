import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMessagesStore } from '@/stores/messages';
import { BackHeader } from '@/components/ui/back-header';
import { Avatar } from '@/components/ui/avatar';
import { SendIcon, PhoneIcon } from '@/utils/icons';

export default function DirectChatScreen() {
  const { id } = useLocalSearchParams();
  const { conversations, messages, sendMessage } = useMessagesStore();

  const convId = (id as string) || 'conv1';
  const conversation = conversations.find((c) => c.id === convId) || conversations[0];
  const chatMessages = messages[convId] || [];

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(convId, input.trim());
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <SafeAreaView className="flex-1" edges={['top']}>
        {/* Custom Chat Header */}
        <BackHeader
          title={conversation?.photographerName || 'Direct Chat'}
          subtitle="Active Now"
          rightAction={
            <TouchableOpacity className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center">
              <PhoneIcon size={18} color="#232323" />
            </TouchableOpacity>
          }
        />

        {/* Sub-header with Photographer Info */}
        <View className="flex-row items-center px-5 py-2.5 bg-[#F8F9FA] border-b border-[#23232314]">
          <Avatar
            url={conversation?.photographerAvatar}
            name={conversation?.photographerName || 'Studio'}
            size="sm"
          />
          <View className="ml-3 flex-1">
            <Text className="font-figtree-bold text-xs text-[#232323]">
              {conversation?.photographerName || 'Studio Artist'}
            </Text>
            <View className="flex-row items-center mt-0.5">
              <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
              <Text className="font-figtree text-[10px] text-[#232323]/60">
                Studio Partner • Responds in ~15 mins
              </Text>
            </View>
          </View>
        </View>

        {/* Message Stream */}
        <ScrollView
          contentContainerStyle={{ padding: 16 }}
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center my-3">
            <Text className="font-figtree-semibold text-[10px] text-[#232323]/50 bg-[#F5F5F5] px-3 py-1 rounded-full">
              Today
            </Text>
          </View>

          {chatMessages.map((msg) => {
            const isCustomer =
              msg.senderId === 'cust-001' ||
              msg.senderId === 'customer' ||
              msg.senderId.startsWith('cust');

            return (
              <View
                key={msg.id}
                className={`mb-3 max-w-[80%] ${
                  isCustomer ? 'self-end' : 'self-start'
                }`}
              >
                <View
                  className={`px-4 py-3 rounded-2xl ${
                    isCustomer
                      ? 'bg-[#232323] rounded-br-none'
                      : 'bg-white border border-[#23232314] rounded-bl-none shadow-sm'
                  }`}
                >
                  <Text
                    className={`font-figtree text-sm leading-5 ${
                      isCustomer ? 'text-white' : 'text-[#232323]'
                    }`}
                  >
                    {msg.text}
                  </Text>
                </View>

                <Text
                  className={`font-figtree text-[9px] text-[#232323]/40 mt-1 ${
                    isCustomer ? 'text-right mr-1' : 'text-left ml-1'
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        {/* Input Bar */}
        <View className="p-3 bg-white border-t border-[#23232314] flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message to photographer..."
            placeholderTextColor="#8C8C8C"
            className="flex-1 bg-[#F8F9FA] px-4 py-3 rounded-2xl font-figtree text-sm text-[#232323] border border-[#23232314]"
          />

          <TouchableOpacity
            onPress={handleSend}
            disabled={!input.trim()}
            className={`w-11 h-11 rounded-2xl items-center justify-center ${
              input.trim() ? 'bg-[#232323]' : 'bg-[#E6E6E6] opacity-50'
            }`}
          >
            <SendIcon size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
