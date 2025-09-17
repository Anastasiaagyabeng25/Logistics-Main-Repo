import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { User, Bell, CreditCard, Gift, Shield, Settings, LogOut } from 'lucide-react-native';

export default function UserProfileScreen() {
  const handleLogout = () => {
    // Handle logout logic
    console.log('Logout');
  };

  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='px-6 py-4'>
        {/* Profile Header */}
        <View className='bg-white rounded-xl p-6 mb-6'>
          <View className='flex-row items-center mb-4'>
            <View className='w-16 h-16 bg-primary-100 rounded-full items-center justify-center mr-4'>
              <User color='#7c3aed' size={32} />
            </View>
            <View className='flex-1'>
              <Text className='text-xl font-semibold text-secondary-900'>John Doe</Text>
              <Text className='text-secondary-600'>john.doe@example.com</Text>
              <Text className='text-primary-600 text-sm'>+1 (555) 123-4567</Text>
            </View>
          </View>
          
          <TouchableOpacity className='bg-primary-600 rounded-lg py-3'>
            <Text className='text-white text-center font-semibold'>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View className='space-y-4'>
          <TouchableOpacity className='bg-white rounded-xl p-4 flex-row items-center'>
            <Bell color='#64748b' size={20} />
            <Text className='text-secondary-900 font-medium ml-3 flex-1'>Notifications</Text>
            <Text className='text-secondary-500'>></Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white rounded-xl p-4 flex-row items-center'>
            <CreditCard color='#64748b' size={20} />
            <Text className='text-secondary-900 font-medium ml-3 flex-1'>Payment Methods</Text>
            <Text className='text-secondary-500'>></Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white rounded-xl p-4 flex-row items-center'>
            <Gift color='#64748b' size={20} />
            <Text className='text-secondary-900 font-medium ml-3 flex-1'>Rewards Program</Text>
            <Text className='text-secondary-500'>></Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white rounded-xl p-4 flex-row items-center'>
            <Shield color='#64748b' size={20} />
            <Text className='text-secondary-900 font-medium ml-3 flex-1'>Security</Text>
            <Text className='text-secondary-500'>></Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white rounded-xl p-4 flex-row items-center'>
            <Settings color='#64748b' size={20} />
            <Text className='text-secondary-900 font-medium ml-3 flex-1'>Settings</Text>
            <Text className='text-secondary-500'>></Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className='bg-white rounded-xl p-4 flex-row items-center mt-6'
            onPress={handleLogout}
          >
            <LogOut color='#ef4444' size={20} />
            <Text className='text-error-500 font-medium ml-3 flex-1'>Logout</Text>
            <Text className='text-secondary-500'>></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
