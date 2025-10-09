import { Image } from "expo-image";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
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

export default function RegisterScreen() {
  const { register, isLoading, error } = useAuth();
  const { role } = useLocalSearchParams();
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: role || "user",
  });

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await register(formData);

      // Navigate directly based on role
      if (formData.role === "driver") {
        router.push("/(driver)/(tabs)/dashboard");
      } else {
        router.push("/(user)/(tabs)/home");
      }
    } catch (error) {
      console.error("Registration error:", error);
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
            <Text className="text-4xl font-bold text-white mb-2">SignUp</Text>
            <Text className="text-white/90 text-lg">
              Create your {formData.role === "user" ? "Importer" : "Driver"}{" "}
              account
            </Text>
          </View>
        </View>

        <View className="flex-1 px-6 py-8">
          {/* Error Message */}
          {error && (
            <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-5">
              <Text className="text-red-600 text-sm">{error}</Text>
            </View>
          )}

          <View className="gap-5">
            <View>
              <Text className="text-gray-700 mb-2.5 text-lg font-medium">
                Name
              </Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 text-lg"
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, name: text })
                }
                returnKeyType="next"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2.5 text-lg font-medium">
                Email
              </Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 text-lg"
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2.5 text-lg font-medium">
                Mobile
              </Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 text-lg"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChangeText={(text) =>
                  setFormData({ ...formData, mobile: text })
                }
                keyboardType="phone-pad"
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
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
                secureTextEntry
                returnKeyType="next"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2.5 text-lg font-medium">
                Confirm Password
              </Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 text-lg"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData({ ...formData, confirmPassword: text })
                }
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={handleRegister}
              />
            </View>

            <TouchableOpacity
              className={`${
                isLoading ? "bg-purple-400" : "bg-purple-600"
              } rounded-lg py-4.5 mt-8 ${
                isLoading ? "opacity-70" : "opacity-100"
              }`}
              onPress={handleRegister}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <Text className="text-white text-center font-semibold text-lg">
                {isLoading ? "Creating Account..." : "Sign up"}
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-8 flex-row justify-center items-center">
            <Text className="text-gray-500 text-base">
              Already have an account?{" "}
            </Text>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                <Text className="text-purple-600 font-semibold text-base">
                  Sign In
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
