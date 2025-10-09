import { useRouter } from "expo-router";
import {
  Bell,
  CreditCard,
  Gift,
  LogOut,
  Settings,
  Shield,
  User,
} from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../src/context/AuthContext";

export default function UserProfileScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/(auth)/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-4">
        {/* Profile Header */}
        <View className="bg-white rounded-xl p-6 mb-6">
          <View className="flex-row items-center mb-4">
            <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mr-4">
              <User color="#7c3aed" size={32} />
            </View>
            <View className="flex-1">
              <Text className="text-xl font-semibold text-gray-900 mb-1">
                John Doe
              </Text>
              <Text className="text-gray-500 text-base mb-1">
                john.doe@example.com
              </Text>
              <Text className="text-purple-600 text-sm">+1 (555) 123-4567</Text>
            </View>
          </View>

          <TouchableOpacity className="bg-purple-600 rounded-lg py-3">
            <Text className="text-white text-center font-semibold text-base">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View className="gap-4">
          <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center">
            <Bell color="#64748b" size={20} />
            <Text className="text-gray-900 font-medium ml-3 flex-1 text-base">
              Notifications
            </Text>
            <Text className="text-gray-400 text-base">{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center">
            <CreditCard color="#64748b" size={20} />
            <Text className="text-gray-900 font-medium ml-3 flex-1 text-base">
              Payment Methods
            </Text>
            <Text className="text-gray-400 text-base">{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center">
            <Gift color="#64748b" size={20} />
            <Text className="text-gray-900 font-medium ml-3 flex-1 text-base">
              Rewards Program
            </Text>
            <Text className="text-gray-400 text-base">{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center">
            <Shield color="#64748b" size={20} />
            <Text className="text-gray-900 font-medium ml-3 flex-1 text-base">
              Security
            </Text>
            <Text className="text-gray-400 text-base">{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center">
            <Settings color="#64748b" size={20} />
            <Text className="text-gray-900 font-medium ml-3 flex-1 text-base">
              Settings
            </Text>
            <Text className="text-gray-400 text-base">{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white rounded-xl p-4 flex-row items-center mt-6"
            onPress={handleLogout}
          >
            <LogOut color="#ef4444" size={20} />
            <Text className="text-red-500 font-medium ml-3 flex-1 text-base">
              Logout
            </Text>
            <Text className="text-gray-400 text-base">{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
