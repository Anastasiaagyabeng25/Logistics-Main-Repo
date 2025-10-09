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
      status: "pending",
      from: "Business District",
      to: "Airport",
      time: "1 day ago",
    },
    {
      id: "3",
      title: "Express Package",
      status: "completed",
      from: "Warehouse",
      to: "Office Building",
      time: "3 days ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_transit":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          My Deliveries
        </Text>

        {deliveries.map((delivery) => (
          <TouchableOpacity
            key={delivery.id}
            className="bg-white rounded-xl p-4 mb-4"
          >
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-semibold text-gray-900">
                {delivery.title}
              </Text>
              <Text
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}
              >
                {delivery.status.replace("_", " ").toUpperCase()}
              </Text>
            </View>

            <View className="mb-3">
              <View className="flex-row items-center mb-2">
                <MapPin color="#64748b" size={16} />
                <Text className="text-gray-600 text-sm ml-2">
                  From: {delivery.from}
                </Text>
              </View>
              <View className="flex-row items-center">
                <MapPin color="#64748b" size={16} />
                <Text className="text-gray-600 text-sm ml-2">
                  To: {delivery.to}
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Clock color="#64748b" size={16} />
                <Text className="text-gray-500 text-sm ml-2">
                  {delivery.time}
                </Text>
              </View>
              {delivery.status === "completed" && (
                <View className="flex-row items-center">
                  <CheckCircle color="#22c55e" size={16} />
                  <Text className="text-green-600 text-sm ml-1 font-medium">
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
