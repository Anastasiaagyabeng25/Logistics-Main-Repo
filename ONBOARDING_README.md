# ShipLink Global - Onboarding Flow

## Overview

This app implements a complete onboarding flow for ShipLink Global, a logistics platform that connects importers, companies, and drivers.

## Onboarding Flow

### 1. Splash Screen (`app/(onboarding)/splash.tsx`)

- Brand introduction with ShipLink Global logo
- Purple gradient background with wave pattern
- 3-second display before transitioning to features

### 2. Feature Screens (`app/(onboarding)/features.tsx`)

- **Screen 1**: "Find trusted logistics Companies easily"
- **Screen 2**: "Track your shipments in real-time"
- **Screen 3**: "Get last-mile delivery at your door"
- Swipeable interface with dot indicators
- Skip and Next/Get Started buttons

### 3. Role Selection (`app/(onboarding)/role-selection.tsx`)

- **Importer**: For users who want to import goods
- **Company**: For logistics companies
- **Driver**: For last-mile delivery providers
- Visual selection with checkmarks
- Links to registration with selected role

### 4. Registration (`app/(auth)/register.tsx`)

- Role-based registration form
- Integration with AuthContext
- Form validation and error handling
- Loading states during registration

### 5. Login (`app/(auth)/login.tsx`)

- Email/phone and password authentication
- Error handling and loading states
- Links to registration and forgot password

## Authentication Context

The `AuthContext` manages:

- User authentication state
- Onboarding completion tracking
- Role-based user data
- AsyncStorage persistence

## Navigation Flow

```
App Start → Loading Check → Onboarding (if not completed) → Role Selection → Registration/Login → Dashboard
```

## Key Features

- ✅ Complete onboarding flow matching Figma design
- ✅ Role-based registration (Importer/Company/Driver)
- ✅ Persistent onboarding state
- ✅ Authentication integration
- ✅ Loading states and error handling
- ✅ Purple theme with wave patterns
- ✅ Responsive design

## Usage

1. First-time users see the onboarding flow
2. Users select their role (Importer/Company/Driver)
3. Users register with role-specific information
4. Users are redirected to appropriate dashboard based on role
5. Returning users skip onboarding and go directly to login

## File Structure

```
app/
├── (onboarding)/
│   ├── _layout.tsx
│   ├── splash.tsx
│   ├── features.tsx
│   └── role-selection.tsx
├── (auth)/
│   ├── login.tsx
│   ├── register.tsx
│   └── forgot-password.tsx
└── index.tsx (main router)

src/
└── context/
    └── AuthContext.tsx

components/
└── LoadingScreen.tsx
```

