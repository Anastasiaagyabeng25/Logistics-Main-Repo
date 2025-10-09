import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useReducer } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: "user" | "driver";
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  hasCompletedOnboarding: boolean;
}

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ONBOARDING_COMPLETE"; payload: boolean };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  hasCompletedOnboarding: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ONBOARDING_COMPLETE":
      return { ...state, hasCompletedOnboarding: action.payload };
    default:
      return state;
  }
};

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: any) => Promise<void>;
  completeOnboarding: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const token = await AsyncStorage.getItem("authToken");
      const userData = await AsyncStorage.getItem("userData");
      const onboardingComplete =
        await AsyncStorage.getItem("onboardingComplete");

      if (token && userData) {
        const user = JSON.parse(userData);
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      }

      if (onboardingComplete === "true") {
        dispatch({ type: "SET_ONBOARDING_COMPLETE", payload: true });
      }
    } catch (error) {
      console.error("Auth check error:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: "LOGIN_START" });

      // Mock login - replace with actual API call
      const mockUser: User = {
        id: "1",
        email,
        name: "John Doe",
        phone: "+1 (555) 123-4567",
        role: email.includes("driver") ? "driver" : "user",
      };

      await AsyncStorage.setItem("authToken", "mock-token");
      await AsyncStorage.setItem("userData", JSON.stringify(mockUser));

      dispatch({ type: "LOGIN_SUCCESS", payload: mockUser });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: "Login failed" });
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("userData");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const register = async (userData: any) => {
    try {
      dispatch({ type: "LOGIN_START" });

      // Mock registration - replace with actual API call
      const mockUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        phone: userData.mobile,
        role: userData.role || "user",
      };

      await AsyncStorage.setItem("authToken", "mock-token");
      await AsyncStorage.setItem("userData", JSON.stringify(mockUser));
      await AsyncStorage.setItem("onboardingComplete", "true");

      dispatch({ type: "LOGIN_SUCCESS", payload: mockUser });
      dispatch({ type: "SET_ONBOARDING_COMPLETE", payload: true });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: "Registration failed" });
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboardingComplete", "true");
      dispatch({ type: "SET_ONBOARDING_COMPLETE", payload: true });
    } catch (error) {
      console.error("Onboarding completion error:", error);
    }
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    register,
    completeOnboarding,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
