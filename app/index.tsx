import { Redirect } from 'expo-router';
import { useAuth } from '../src/context/AuthContext';

export default function Index() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href='/(auth)/login' />;
  }

  if (user?.role === 'user') {
    return <Redirect href='/(user)/(tabs)/home' />;
  }

  if (user?.role === 'driver') {
    return <Redirect href='/(driver)/(tabs)/dashboard' />;
  }

  return <Redirect href='/(auth)/login' />;
}
