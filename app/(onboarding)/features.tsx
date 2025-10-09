import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const features = [
  {
    id: 1,
    title: "Find trusted logistics Companies easily",
    description:
      "Connect with verified logistics partners worldwide for your import needs.",
    icon: "Logistics-amico",
    imageSource: require("../../assets/images/Logistics-amico.svg"),
  },
  {
    id: 2,
    title: "Track your shipments in real-time",
    description:
      "Stay updated with live tracking and notifications throughout your shipment journey.",
    icon: "Location-tracking",
    imageSource: require("../../assets/images/Location tracking-amico.svg"),
  },
  {
    id: 3,
    title: "Get last-mile delivery at your door",
    description:
      "Connect with local drivers for seamless final delivery to your location.",
    icon: "Self-driving-car",
    imageSource: require("../../assets/images/self driving car-amico.svg"),
  },
];

export default function FeaturesScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/(onboarding)/role-selection");
    }
  };

  const handleSkip = () => {
    router.push("/(onboarding)/role-selection");
  };

  const currentFeature = features[currentIndex];

  const renderIcon = () => {
    if (
      currentFeature.icon === "Logistics-amico" ||
      currentFeature.icon === "Location-tracking" ||
      currentFeature.icon === "Self-driving-car"
    ) {
      return (
        <Image
          source={currentFeature.imageSource}
          style={{ width: 200, height: 200 }}
          contentFit="contain"
        />
      );
    }
    return <Text className="text-8xl">{currentFeature.icon}</Text>;
  };

  return (
    <View className="flex-1 bg-white">
      {/* Wave Pattern */}
      <View className="absolute top-0 left-0 right-0 h-30 bg-purple-600 rounded-b-3xl" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {/* Content */}
        <View className="items-center px-6 py-6">
          {/* Feature Icon */}
          <View className="w-80 h-80 bg-gray-50 rounded-3xl justify-center items-center mb-8 shadow-lg">
            {renderIcon()}
          </View>

          {/* Feature Content */}
          <View className="items-center mb-8 px-4">
            <Text className="text-3xl font-bold text-gray-900 text-center mb-6 leading-10">
              {currentFeature.title}
            </Text>
            <Text className="text-lg text-gray-600 text-center leading-7">
              {currentFeature.description}
            </Text>
          </View>

          {/* Dots Indicator */}
          <View className="flex-row space-x-3">
            {features.map((_, index) => (
              <View
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="flex-row justify-between items-center px-6 py-8 bg-white">
        <TouchableOpacity onPress={handleSkip} className="py-3 px-6">
          <Text className="text-gray-500 text-base font-medium">Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          className="bg-purple-600 rounded-lg py-3 px-8"
        >
          <Text className="text-white text-base font-semibold">
            {currentIndex === features.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
