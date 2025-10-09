import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(onboarding)/features");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-purple-600 justify-center items-center px-10">
      {/* Logo and Brand */}
      <View className="items-center">
        <View className="mb-10">
          <Image
            source={require("../../assets/images/onboarding image.svg")}
            style={{
              width: 150,
              height: 150,
              shadowColor: "#374151",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 10,
            }}
            contentFit="contain"
          />
        </View>

        <Text className="text-4xl font-bold text-white text-center mb-3 tracking-wide">
          ShipLink Global
        </Text>
        <Text className="text-base text-white/90 text-center font-normal">
          Connecting the world through logistics
        </Text>
      </View>
    </View>
  );
}
