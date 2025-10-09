import { Clock, MapPin, Plus } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function UserHomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-4">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back!
          </Text>
          <Text className="text-gray-600 text-base">
            Ready to ship something?
          </Text>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <TouchableOpacity className="bg-purple-600 rounded-xl p-4 mb-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-white text-lg font-semibold mb-1">
                  New Delivery Request
                </Text>
                <Text className="text-purple-100 text-sm">
                  Create a new delivery request
                </Text>
              </View>
              <Plus color="white" size={24} />
            </View>
          </TouchableOpacity>

          <View className="flex-row gap-4">
            <TouchableOpacity className="flex-1 bg-white rounded-xl p-4">
              <MapPin color="#7c3aed" size={20} />
              <Text className="text-gray-900 font-semibold text-base mt-2 mb-1">
                Track Package
              </Text>
              <Text className="text-gray-600 text-sm">
                Track your shipments
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-white rounded-xl p-4">
              <Clock color="#7c3aed" size={20} />
              <Text className="text-gray-900 font-semibold text-base mt-2 mb-1">
                Recent Orders
              </Text>
              <Text className="text-gray-600 text-sm">
                View recent activity
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Requests */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Recent Requests
          </Text>

          <View className="bg-white rounded-xl p-4 mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-semibold text-gray-900">
                Package Delivery
              </Text>
              <Text className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                In Transit
              </Text>
            </View>
            <Text className="text-gray-600 text-sm mb-1">
              From: Downtown Office
            </Text>
            <Text className="text-gray-600 text-sm mb-3">
              To: Residential Area
            </Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-green-600">$25.00</Text>
              <Text className="text-gray-500 text-sm">2 hours ago</Text>
            </View>
          </View>

          <View className="bg-white rounded-xl p-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-semibold text-gray-900">
                Document Delivery
              </Text>
              <Text className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                Pending
              </Text>
            </View>
            <Text className="text-gray-600 text-sm mb-1">
              From: Business District
            </Text>
            <Text className="text-gray-600 text-sm mb-3">To: Airport</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-green-600">$45.00</Text>
              <Text className="text-gray-500 text-sm">1 day ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
