import { CheckCircle, Clock, MapPin } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function DriverDeliveriesScreen() {
  const deliveries = [
    {
      id: "1",
      title: "Package Delivery",
      status: "in_transit",
      from: "Downtown Office",
      to: "Residential Area",
      time: "2 hours ago",
    },
    {
      id: "2",
      title: "Document Delivery",
      status: "completed",
      from: "Business District",
      to: "Airport",
      time: "1 day ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_transit":
        return "text-green-500";
      case "completed":
        return "text-purple-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <ScrollView className="flex-1 bg-blue-50">
      <View className="px-6 py-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          My Deliveries
        </Text>

        {deliveries.map((delivery) => (
          <TouchableOpacity
            key={delivery.id}
            className="bg-white rounded-xl p-4 mb-4"
          >
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-secondary-900 font-semibold text-lg">
                {delivery.title}
              </Text>
              <Text
                className={`text-sm font-medium ${getStatusColor(delivery.status)}`}
              >
                {delivery.status.replace("_", " ").toUpperCase()}
              </Text>
            </View>

            <View className="space-y-2 mb-3">
              <View className="flex-row items-center">
                <MapPin color="#64748b" size={16} />
                <Text className="text-secondary-600 ml-2">
                  From: {delivery.from}
                </Text>
              </View>
              <View className="flex-row items-center">
                <MapPin color="#64748b" size={16} />
                <Text className="text-secondary-600 ml-2">
                  To: {delivery.to}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Clock color="#64748b" size={16} />
                <Text className="text-secondary-500 ml-1">{delivery.time}</Text>
              </View>
              {delivery.status === "completed" && (
                <View className="flex-row items-center">
                  <CheckCircle color="#22c55e" size={16} />
                  <Text className="text-success-500 ml-1 text-sm">
                    Completed
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
