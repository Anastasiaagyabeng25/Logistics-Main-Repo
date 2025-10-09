import { useRouter } from "expo-router";
import { Clock, LogOut, MapPin, Star, Truck } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../src/context/AuthContext";

export default function DriverDashboardScreen() {
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
        {/* Header */}
        <View className="flex-row justify-between items-start mb-6">
          <View>
            <Text className="text-2xl font-bold text-gray-900 mb-1">
              Driver Dashboard
            </Text>
            <Text className="text-gray-600 text-base">Welcome back, John!</Text>
          </View>
          <TouchableOpacity
            className="p-2 rounded-lg bg-red-50 border border-red-200"
            onPress={handleLogout}
          >
            <LogOut color="#ef4444" size={20} />
          </TouchableOpacity>
        </View>

        {/* Status Card */}
        <View className="bg-white rounded-xl p-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-gray-900">Status</Text>
            <TouchableOpacity className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-800 text-sm font-medium">
                Available
              </Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-2">
            <View className="flex-row items-center">
              <MapPin color="#64748b" size={16} />
              <Text className="text-gray-600 text-sm ml-2">
                Current Location: Downtown
              </Text>
            </View>
            <View className="flex-row items-center">
              <Clock color="#64748b" size={16} />
              <Text className="text-gray-600 text-sm ml-2">
                Online for 2h 30m
              </Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row gap-4 mb-6">
          <View className="flex-1 bg-white rounded-xl p-4">
            <View className="flex-row items-center mb-2">
              <Truck color="#7c3aed" size={20} />
              <Text className="text-gray-600 text-sm ml-2">
                Today's Deliveries
              </Text>
            </View>
            <Text className="text-2xl font-bold text-gray-900">8</Text>
          </View>

          <View className="flex-1 bg-white rounded-xl p-4">
            <View className="flex-row items-center mb-2">
              <Star color="#f59e0b" size={20} />
              <Text className="text-gray-600 text-sm ml-2">Rating</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-900">4.8</Text>
          </View>
        </View>

        {/* Available Requests */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Available Requests
          </Text>

          <TouchableOpacity className="bg-white rounded-xl p-4 mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-semibold text-gray-900">
                Package Delivery
              </Text>
              <Text className="text-green-600 font-bold text-lg">$25.00</Text>
            </View>
            <Text className="text-gray-600 text-sm mb-1">
              From: Downtown Office
            </Text>
            <Text className="text-gray-600 text-sm mb-3">
              To: Residential Area
            </Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500 text-sm">Distance: 5.2 km</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-semibold text-gray-900">
                Document Delivery
              </Text>
              <Text className="text-green-600 font-bold text-lg">$45.00</Text>
            </View>
            <Text className="text-gray-600 text-sm mb-1">
              From: Business District
            </Text>
            <Text className="text-gray-600 text-sm mb-3">To: Airport</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500 text-sm">Distance: 12.8 km</Text>
              <Text className="text-gray-500 text-sm">Est. Time: 25 min</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
