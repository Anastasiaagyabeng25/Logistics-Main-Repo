import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../src/context/AuthContext";

export default function LoginScreen() {
  const { login, isLoading, error } = useAuth();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [selectedRole, setSelectedRole] = React.useState<"user" | "driver">(
    "user"
  );

  const handleLogin = async () => {
    try {
      // Development bypass - any email/password works
      if (__DEV__ && (email || password)) {
        await login(email || "dev@example.com", password || "dev123");
      } else {
        await login(email, password);
      }

      // Navigate directly based on selected role
      if (selectedRole === "driver") {
        router.push("/(driver)/(tabs)/dashboard");
      } else {
        router.push("/(user)/(tabs)/home");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Top Section Header */}
        <View className="relative">
          <Image
            source={require("../../assets/images/top section.svg")}
            style={{ width: "100%", height: 180 }}
            contentFit="fill"
            contentPosition="top left"
          />
          <View className="absolute top-16 left-6 right-0 items-start">
            <Text className="text-4xl font-bold text-white mb-2">Login</Text>
            <Text className="text-white/90 text-lg">
              Sign in to your account
            </Text>
            {__DEV__ && (
              <Text className="text-white/70 text-sm mt-2">
                DEV: Any email/password works for testing
              </Text>
            )}
          </View>
        </View>

        <View className="flex-1 px-6 py-8">
          {/* Role Selector */}
          <View className="mb-6">
            <Text className="text-gray-700 mb-3 text-base font-medium text-center">
              Select Role
            </Text>
            <View className="flex-row bg-gray-100 rounded-xl p-1">
              <TouchableOpacity
                className={`flex-1 py-3 px-4 rounded-lg ${
                  selectedRole === "user" ? "bg-purple-600" : "bg-transparent"
                }`}
                onPress={() => setSelectedRole("user")}
              >
                <Text
                  className={`font-semibold text-sm text-center ${
                    selectedRole === "user" ? "text-white" : "text-gray-500"
                  }`}
                >
                  User
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-1 py-3 px-4 rounded-lg ${
                  selectedRole === "driver" ? "bg-green-500" : "bg-transparent"
                }`}
                onPress={() => setSelectedRole("driver")}
              >
                <Text
                  className={`font-semibold text-sm text-center ${
                    selectedRole === "driver" ? "text-white" : "text-gray-500"
                  }`}
                >
                  Driver
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Error Message */}
          {error && (
            <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-5">
              <Text className="text-red-600 text-sm">{error}</Text>
            </View>
          )}

          {/* Form */}
          <View className="gap-5">
            <View>
              <Text className="text-gray-700 mb-2.5 text-lg font-medium">
                Email
              </Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 text-lg"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2.5 text-lg font-medium">
                Password
              </Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 text-lg"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />
            </View>

            <TouchableOpacity
              className={`${
                isLoading ? "bg-purple-400" : "bg-purple-600"
              } rounded-lg py-4.5 mt-8 ${
                isLoading ? "opacity-70" : "opacity-100"
              }`}
              onPress={handleLogin}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <Text className="text-white text-center font-semibold text-lg">
                {isLoading ? "Signing In..." : "Login"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View className="mt-8 gap-5">
            <Link href="/(auth)/forgot-password" asChild>
              <TouchableOpacity>
                <Text className="text-purple-600 text-center text-base">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </Link>

            <View className="flex-row justify-center items-center">
              <Text className="text-gray-500 text-base">
                Don't have an account?{" "}
              </Text>
              <Link href="/(auth)/register" asChild>
                <TouchableOpacity>
                  <Text className="text-purple-600 font-semibold text-base">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>

            {/* Onboarding Button */}
            <View className="mt-4">
              <Link href="/(onboarding)/splash" asChild>
                <TouchableOpacity className="bg-gray-100 border border-gray-300 rounded-lg py-3">
                  <Text className="text-gray-700 text-center font-medium text-base">
                    View Onboarding
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
