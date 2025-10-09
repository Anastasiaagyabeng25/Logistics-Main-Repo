import { Link } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = React.useState("");

  const handleResetPassword = () => {
    // Handle password reset logic
    console.log("Reset password for:", email);
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
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>
              Enter your email to reset your password
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Email / Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email or phone"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={handleResetPassword}
              />
            </View>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleResetPassword}
            >
              <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>

          {/* Links */}
          <View style={styles.linksContainer}>
            <View style={styles.loginLinkContainer}>
              <Text style={styles.loginText}>Remember your password? </Text>
              <Link href="/(auth)/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.loginLinkText}>Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#7c3aed",
    marginBottom: 12,
  },
  subtitle: {
    color: "#6b7280",
    fontSize: 16,
  },
  form: {
    gap: 20,
  },
  label: {
    color: "#374151",
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 14,
    color: "#111827",
    fontSize: 17,
  },
  resetButton: {
    backgroundColor: "#7c3aed",
    borderRadius: 10,
    paddingVertical: 18,
    marginTop: 32,
  },
  resetButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 19,
  },
  linksContainer: {
    marginTop: 32,
    gap: 20,
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#6b7280",
    fontSize: 16,
  },
  loginLinkText: {
    color: "#7c3aed",
    fontWeight: "600",
    fontSize: 16,
  },
});
