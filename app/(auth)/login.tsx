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
import { useAuth } from "../../src/context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login error:", error);
    }
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
          {/* Header */}
          <View style={{ marginBottom: 40 }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "#7c3aed",
                marginBottom: 12,
              }}
            >
              Welcome Back!
            </Text>
            <Text style={{ color: "#6b7280", fontSize: 16 }}>
              Sign in to your account
            </Text>
          </View>

          {/* Form */}
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
                value={email}
                onChangeText={setEmail}
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
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#7c3aed",
                borderRadius: 10,
                paddingVertical: 18,
                marginTop: 32,
              }}
              onPress={handleLogin}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 19,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View style={{ marginTop: 32, gap: 20 }}>
            <Link href="/(auth)/forgot-password" asChild>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#7c3aed",
                    textAlign: "center",
                    fontSize: 16,
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </Link>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#6b7280", fontSize: 16 }}>
                Don't have an account?{" "}
              </Text>
              <Link href="/(auth)/register" asChild>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#7c3aed",
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    Sign Up
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
