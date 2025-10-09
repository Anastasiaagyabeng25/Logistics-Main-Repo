import { Redirect } from "expo-router";
import LoadingScreen from "../components/LoadingScreen";
import { useAuth } from "../src/context/AuthContext";

export default function Index() {
  const { isAuthenticated, user, hasCompletedOnboarding, isLoading } =
    useAuth();

  // Show loading screen while checking auth state
  if (isLoading) {
    return <LoadingScreen />;
  }

  // If user hasn't completed onboarding, show onboarding flow
  if (!hasCompletedOnboarding) {
    return <Redirect href="/(onboarding)/splash" />;
  }

  // If user is not authenticated, show login
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  // Route based on user role
  if (user?.role === "user") {
    return <Redirect href="/(user)/(tabs)/home" />;
  }

  if (user?.role === "driver") {
    return <Redirect href="/(driver)/(tabs)/dashboard" />;
  }

  return <Redirect href="/(auth)/login" />;
}
