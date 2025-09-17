import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, MapPin, Clock, Package } from 'lucide-react-native';

export default function UserHomeScreen() {
  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='px-6 py-4'>
        {/* Header */}
        <View className='mb-6'>
          <Text className='text-2xl font-bold text-secondary-900 mb-1'>Welcome back!</Text>
          <Text className='text-secondary-600'>Ready to ship something?</Text>
        </View>

        {/* Quick Actions */}
        <View className='mb-6'>
          <TouchableOpacity className='bg-primary-600 rounded-xl p-6 mb-4'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-1'>
                <Text className='text-white text-xl font-semibold mb-2'>New Delivery Request</Text>
                <Text className='text-primary-100'>Create a new delivery request</Text>
              </View>
              <Plus color='white' size={24} />
            </View>
          </TouchableOpacity>

          <View className='flex-row space-x-4'>
            <TouchableOpacity className='bg-white rounded-xl p-4 flex-1'>
              <MapPin color='#7c3aed' size={20} />
              <Text className='text-secondary-900 font-semibold mt-2'>Track Package</Text>
              <Text className='text-secondary-600 text-sm'>Track your shipments</Text>
            </TouchableOpacity>

            <TouchableOpacity className='bg-white rounded-xl p-4 flex-1'>
              <Clock color='#7c3aed' size={20} />
              <Text className='text-secondary-900 font-semibold mt-2'>Recent Orders</Text>
              <Text className='text-secondary-600 text-sm'>View recent activity</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Requests */}
        <View className='mb-6'>
          <Text className='text-lg font-semibold text-secondary-900 mb-4'>Recent Requests</Text>
          
          <View className='bg-white rounded-xl p-4 mb-3'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Package Delivery</Text>
              <Text className='text-success-500 text-sm font-medium'>In Transit</Text>
            </View>
            <Text className='text-secondary-600 text-sm mb-2'>From: Downtown Office</Text>
            <Text className='text-secondary-600 text-sm mb-2'>To: Residential Area</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-primary-600 font-semibold'>.00</Text>
              <Text className='text-secondary-500 text-sm'>2 hours ago</Text>
            </View>
          </View>

          <View className='bg-white rounded-xl p-4'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Document Delivery</Text>
              <Text className='text-warning-500 text-sm font-medium'>Pending</Text>
            </View>
            <Text className='text-secondary-600 text-sm mb-2'>From: Business District</Text>
            <Text className='text-secondary-600 text-sm mb-2'>To: Airport</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-primary-600 font-semibold'>.00</Text>
              <Text className='text-secondary-500 text-sm'>1 day ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
