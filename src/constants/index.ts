export const APP_CONFIG = {
  name: 'ShipLink',
  version: '1.0.0',
  apiUrl: 'https://api.shiplink.com',
  mapApiKey: 'YOUR_MAP_API_KEY',
};

export const DELIVERY_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

export const USER_ROLES = {
  USER: 'user',
  DRIVER: 'driver',
} as const;

export const VEHICLE_TYPES = {
  CAR: 'car',
  TRUCK: 'truck',
  MOTORCYCLE: 'motorcycle',
} as const;
