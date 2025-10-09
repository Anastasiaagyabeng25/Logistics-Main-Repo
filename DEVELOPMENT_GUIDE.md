# Development Guide - ShipLink Global

## 🚀 Quick Start

### Running the App

```bash
npm install
npm start
```

### Development Features

## 🛠️ Development Panel

A purple settings button (⚙️) appears in the top-right corner of all screens in development mode.

### Features:

- **Role Switching**: Instantly switch between User, Driver, and Company roles
- **Onboarding Reset**: Reset onboarding flow to test the complete user journey
- **Quick Logout**: Logout and return to auth screens
- **Current Status**: Shows current user role and authentication state

## 🔐 Authentication Bypass

### Login Screen

- **Any email/password combination works** in development mode
- You can enter anything or leave fields empty
- The system will automatically authenticate you

### Role Assignment

- **User Role**: Any email that doesn't contain "driver" gets user role
- **Driver Role**: Any email containing "driver" gets driver role
- **Company Role**: Can be set via development panel

## 📱 Testing Flows

### 1. Complete Onboarding Flow

1. Reset onboarding using Dev Panel
2. App will restart from splash screen
3. Go through: Splash → Features → Role Selection → Registration
4. Complete registration to reach dashboard

### 2. Role Switching

1. Use Dev Panel to switch between User/Driver/Company
2. Instantly see different dashboards and features
3. Test role-specific functionality

### 3. Authentication Flow

1. Quick logout from Dev Panel
2. Test login with any credentials
3. Test registration flow
4. Test forgot password flow

## 🎯 Development Commands

```bash
# Start development server
npm start

# Run on specific platforms
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web browser

# Lint code
npm run lint
```

## 📁 Key Development Files

### Authentication

- `src/context/AuthContext.tsx` - Auth state management with dev helpers
- `app/(auth)/login.tsx` - Login with dev bypass

### Development Tools

- `components/DevPanel.tsx` - Development control panel
- `DEVELOPMENT_GUIDE.md` - This guide

### Mock Data

- All screens contain realistic mock data
- User profiles, delivery requests, earnings data
- Ready for real API integration

## 🔄 Removing Development Features

When ready for production:

1. **Remove Dev Panel**:
   - Delete `components/DevPanel.tsx`
   - Remove DevPanel imports from layout files
   - Remove `__DEV__` checks

2. **Remove Auth Bypass**:
   - Remove development bypass in `app/(auth)/login.tsx`
   - Remove `devLogin` and `resetOnboarding` from AuthContext
   - Implement real API calls

3. **Clean Up**:
   - Remove development helper functions
   - Remove mock data
   - Add real API integration

## 🎨 UI/UX Features

### Design System

- Purple theme (`#7c3aed`)
- Consistent card layouts
- Proper spacing and typography
- Status indicators and icons

### Responsive Design

- Works on different screen sizes
- Proper keyboard handling
- Loading states and error handling

## 📊 Current Features

### User Role

- Home dashboard with quick actions
- Request delivery services
- Track packages
- View delivery history
- Profile management

### Driver Role

- Dashboard with available requests
- Delivery management
- Earnings tracking
- Status management

### Company Role

- Uses same flow as user (can be customized)
- Ready for company-specific features

## 🔧 Customization

### Adding New Roles

1. Update User interface in `src/context/AuthContext.tsx`
2. Add role routing in `app/index.tsx`
3. Create role-specific screens
4. Update Dev Panel with new role option

### Styling Changes

- All styles use React Native StyleSheet
- Consistent color scheme in all components
- Easy to modify theme colors

### Mock Data

- Update mock data in individual screen files
- Add more realistic sample data
- Prepare for API integration

## 🚨 Important Notes

- **Development features only work in `__DEV__` mode**
- **All authentication is mocked** - replace with real API
- **Mock data is hardcoded** - replace with API calls
- **Dev Panel will not appear in production builds**

## 📞 Support

For questions about development setup or features, refer to:

- `README.md` - General project information
- `ONBOARDING_README.md` - Onboarding flow details
- Code comments in individual files
