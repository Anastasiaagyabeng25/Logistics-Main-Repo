import { Tabs } from 'expo-router';
import { BarChart3, Truck, DollarSign } from 'lucide-react-native';

export default function DriverLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#7c3aed',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e2e8f0',
        },
      }}
    >
      <Tabs.Screen
        name='(tabs)/dashboard'
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => <BarChart3 color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='(tabs)/deliveries'
        options={{
          title: 'Deliveries',
          tabBarIcon: ({ color, size }) => <Truck color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='(tabs)/earnings'
        options={{
          title: 'Earnings',
          tabBarIcon: ({ color, size }) => <DollarSign color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
