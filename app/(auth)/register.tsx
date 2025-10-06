import { Link } from "expo-router";
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

export default function RegisterScreen() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    // Handle registration logic
    console.log("Register:", formData);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f9fafb" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 32 }}>
          <View style={{ marginBottom: 40 }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "#7c3aed",
                marginBottom: 12,
              }}
            >
              Create Account
            </Text>
            <Text style={{ color: "#6b7280", fontSize: 16 }}>
              Sign up to get started
            </Text>
          </View>

          <View style={{ gap: 20 }}>
            <View>
              <Text
                style={{
                  color: "#374151",
                  marginBottom: 10,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Name
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 14,
                  color: "#111827",
                  fontSize: 17,
                }}
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, name: text })
                }
                returnKeyType="next"
              />
            </View>

            <View>
              <Text
                style={{
                  color: "#374151",
                  marginBottom: 10,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Email
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 14,
                  color: "#111827",
                  fontSize: 17,
                }}
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
              <Text
                style={{
                  color: "#374151",
                  marginBottom: 10,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Mobile
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 14,
                  color: "#111827",
                  fontSize: 17,
                }}
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
              <Text
                style={{
                  color: "#374151",
                  marginBottom: 10,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Password
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 14,
                  color: "#111827",
                  fontSize: 17,
                }}
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
              <Text
                style={{
                  color: "#374151",
                  marginBottom: 10,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Confirm Password
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 14,
                  color: "#111827",
                  fontSize: 17,
                }}
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
              style={{
                backgroundColor: "#7c3aed",
                borderRadius: 10,
                paddingVertical: 18,
                marginTop: 32,
              }}
              onPress={handleRegister}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 19,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 32,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#6b7280", fontSize: 16 }}>
              Already have an account?{" "}
            </Text>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                <Text
                  style={{ color: "#7c3aed", fontWeight: "600", fontSize: 16 }}
                >
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
