export type UserRole = 'user' | 'driver';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Driver extends User {
  role: 'driver';
  licenseNumber: string;
  vehicleType: 'car' | 'truck' | 'motorcycle';
  vehicleModel: string;
  vehiclePlate: string;
  rating: number;
  totalDeliveries: number;
  isAvailable: boolean;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface DeliveryRequest {
  id: string;
  userId: string;
  driverId?: string;
  pickupAddress: string;
  deliveryAddress: string;
  pickupCoordinates: {
    latitude: number;
    longitude: number;
  };
  deliveryCoordinates: {
    latitude: number;
    longitude: number;
  };
  packageDescription: string;
  packageWeight: number;
  packageValue: number;
  status: 'pending' | 'accepted' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';
  estimatedDeliveryTime?: string;
  actualDeliveryTime?: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ThemeState {
  isDarkMode: boolean;
  colors: typeof import('../constants/theme').Colors.light | typeof import('../constants/theme').Colors.dark;
}

export type RootStackParamList = {
  '(auth)': undefined;
  '(user)': undefined;
  '(driver)': undefined;
  index: undefined;
};

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
  'forgot-password': undefined;
};

export type UserTabParamList = {
  home: undefined;
  requests: undefined;
  profile: undefined;
};

export type DriverTabParamList = {
  dashboard: undefined;
  deliveries: undefined;
  earnings: undefined;
};
