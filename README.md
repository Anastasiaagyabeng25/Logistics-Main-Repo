# ShipLink - Logistics Mobile App

A React Native logistics app built with Expo, TypeScript, and NativeWind, featuring role-based authentication for users and drivers.

## Features

- **Role-based Authentication**: Separate flows for users and drivers
- **Modern UI**: Built with NativeWind (Tailwind CSS for React Native)
- **TypeScript**: Full type safety throughout the application
- **Navigation**: Expo Router with tab-based navigation
- **State Management**: React Context for authentication and app state
- **Form Handling**: React Hook Form with Yup validation
- **Icons**: Lucide React Native icons
- **Storage**: AsyncStorage for persistent data

## Project Structure

`
app/                     # Expo Router directory
 (auth)/             # Authentication route group
    _layout.tsx     # Auth layout
    login.tsx       # Login screen
    register.tsx    # Register screen
    forgot-password.tsx
 (user)/             # User role route group  
    _layout.tsx     # User tabs layout
    (tabs)/         # User tab routes
       home.tsx
       requests.tsx
       profile.tsx
    [id].tsx        # Dynamic routes
 (driver)/           # Driver role route group
    _layout.tsx     # Driver tabs layout  
    (tabs)/         # Driver tab routes
       dashboard.tsx
       deliveries.tsx
       earnings.tsx
    [id].tsx        # Dynamic routes
 _layout.tsx         # Root layout
 index.tsx           # Entry point/redirect logic

src/
 components/         # Reusable components
 context/            # React Context providers
 hooks/              # Custom hooks
 services/           # API services
 types/              # TypeScript types
 utils/              # Utility functions
 constants/          # App constants
`

## Setup Instructions

1. **Install Dependencies**
   `ash
   npm install
   `

2. **Start the Development Server**
   `ash
   npm start
   `

3. **Run on Device/Simulator**
   `ash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   `

## Dependencies

- **Expo**: ~54.0.7
- **React Native**: 0.81.4
- **NativeWind**: Tailwind CSS for React Native
- **Expo Router**: File-based routing
- **React Navigation**: Navigation library
- **Lucide React Native**: Icon library
- **AsyncStorage**: Local storage
- **React Hook Form**: Form handling
- **Yup**: Schema validation

## Color Scheme

The app uses a purple-based color scheme inspired by the Figma design:

- **Primary**: Purple shades (#9333ea, #7c3aed, etc.)
- **Secondary**: Grey shades (#64748b, #334155, etc.)
- **Background**: Light blue (#E8F7FD) for light mode
- **Status Colors**: Green (success), Orange (warning), Red (error)

## Authentication Flow

1. **Unauthenticated users** are redirected to the auth screens
2. **Users** with 'user' role are redirected to user tabs
3. **Drivers** with 'driver' role are redirected to driver tabs
4. **Mock authentication** is implemented for development

## Development Notes

- The app includes mock data for development
- Authentication is currently mocked (replace with real API calls)
- All screens are responsive and follow the design system
- TypeScript types are defined for all data structures
- Form validation is implemented using Yup schemas

## Next Steps

1. Integrate with real authentication API
2. Add real-time location tracking
3. Implement push notifications
4. Add payment integration
5. Add real-time chat between users and drivers
6. Implement order tracking and status updates
