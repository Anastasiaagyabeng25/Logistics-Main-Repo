import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Package, Truck } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const roles = [
  {
    id: "user",
    title: "Importer",
    description: "I want to import goods and find logistics partners",
    icon: "Package",
  },
  {
    id: "driver",
    title: "Driver",
    description: "I provide last-mile delivery services",
    icon: "Truck",
  },
];

export default function RoleSelectionScreen() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // Animation values
  const shakeAnim = new Animated.Value(0);
  const moveAnim = new Animated.Value(0);

  useEffect(() => {
    // Continuous shake animation for icon containers
    const shakeAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ])
    );

    // Continuous forward movement animation for truck
    const moveAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );

    shakeAnimation.start();
    moveAnimation.start();

    return () => {
      shakeAnimation.stop();
      moveAnimation.stop();
    };
  }, []);

  const handleRoleSelect = async (roleId: string) => {
    setSelectedRole(roleId);

    // Store the selected role
    await AsyncStorage.setItem("selectedRole", roleId);

    // Navigate to registration with the selected role
    router.push({
      pathname: "/(auth)/register",
      params: { role: roleId },
    });
  };

  const renderIcon = (iconName: string, size: number = 56) => {
    const iconColor = "#7c3aed"; // Uniform purple color

    if (iconName === "Truck") {
      // For truck, we'll create a forward movement effect
      const translateX = moveAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-3, 3],
      });

      return (
        <Animated.View style={{ transform: [{ translateX }] }}>
          <Truck color={iconColor} size={size} />
        </Animated.View>
      );
    }

    switch (iconName) {
      case "Package":
        return <Package color={iconColor} size={size} />;
      case "Truck":
        return <Truck color={iconColor} size={size} />;
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Wave Pattern */}
      <View className="absolute top-0 left-0 right-0 h-32 bg-purple-600" />

      {/* Header */}
      <View className="px-6 pt-16 pb-8">
        <Text className="text-3xl font-bold text-white text-center mb-3">
          Choose Your Role
        </Text>
        <Text className="text-purple-100 text-base text-center">
          Select how you'll be using ShipLink Global
        </Text>
      </View>

      {/* Role Cards */}
      <View className="flex-1 justify-center items-center px-8">
        <View className="w-full max-w-sm space-y-12 mt-6">
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              className={`bg-white rounded-xl p-6 shadow-lg ${
                selectedRole === role.id
                  ? "border-2 border-purple-600"
                  : "border border-gray-200"
              }`}
              onPress={() => handleRoleSelect(role.id)}
              activeOpacity={0.8}
            >
              <View className="items-center">
                <Animated.View
                  className="w-16 h-16 bg-gray-50 rounded-full items-center justify-center mb-4"
                  style={{
                    transform: [
                      {
                        translateY: shakeAnim.interpolate({
                          inputRange: [-1, 1],
                          outputRange: [-2, 2],
                        }),
                      },
                    ],
                  }}
                >
                  {renderIcon(role.icon, 56)}
                </Animated.View>

                <Text
                  className={`text-xl font-bold mb-2 ${
                    selectedRole === role.id ||
                    role.id === "user" ||
                    role.id === "driver"
                      ? "text-purple-600"
                      : "text-gray-900"
                  }`}
                >
                  {role.title}
                </Text>
                <Text
                  className={`text-center text-sm leading-5 ${
                    selectedRole === role.id ||
                    role.id === "user" ||
                    role.id === "driver"
                      ? "text-purple-600"
                      : "text-gray-600"
                  }`}
                >
                  {role.description}
                </Text>
              </View>

              {selectedRole === role.id && (
                <View className="absolute top-4 right-4 bg-purple-600 rounded-full w-6 h-6 items-center justify-center">
                  <Text className="text-white text-sm font-bold">✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bottom Actions */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          className="py-4"
          onPress={() => router.push("/(auth)/login")}
        >
          <Text className="text-purple-600 text-center text-base font-medium">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
