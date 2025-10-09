import { DollarSign, TrendingUp } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function DriverEarningsScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">Earnings</Text>

        {/* Total Earnings */}
        <View className="bg-white rounded-xl p-6 mb-6">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-lg font-semibold text-gray-900">
              Total Earnings
            </Text>
            <TrendingUp color="#10b981" size={20} />
          </View>
          <Text className="text-3xl font-bold text-green-600">$1,250.00</Text>
          <Text className="text-green-600 text-sm mt-1">
            +12% from last week
          </Text>
        </View>

        {/* Weekly Breakdown */}
        <View className="bg-white rounded-xl p-6 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            This Week
          </Text>

          <View className="space-y-3">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Monday</Text>
              <Text className="font-semibold text-gray-900">$180.00</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Tuesday</Text>
              <Text className="font-semibold text-gray-900">$220.00</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Wednesday</Text>
              <Text className="font-semibold text-gray-900">$195.00</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Thursday</Text>
              <Text className="font-semibold text-gray-900">$250.00</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Friday</Text>
              <Text className="font-semibold text-gray-900">$285.00</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Saturday</Text>
              <Text className="font-semibold text-gray-900">$120.00</Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row gap-4">
          <View className="flex-1 bg-white rounded-xl p-4">
            <View className="flex-row items-center mb-2">
              <DollarSign color="#7c3aed" size={20} />
              <Text className="text-gray-600 text-sm ml-2">
                Avg. per Delivery
              </Text>
            </View>
            <Text className="text-xl font-bold text-gray-900">$32.50</Text>
          </View>

          <View className="flex-1 bg-white rounded-xl p-4">
            <View className="flex-row items-center mb-2">
              <TrendingUp color="#f59e0b" size={20} />
              <Text className="text-gray-600 text-sm ml-2">
                Total Deliveries
              </Text>
            </View>
            <Text className="text-xl font-bold text-gray-900">38</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
