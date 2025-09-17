import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MapPin, Clock, Star, Truck } from 'lucide-react-native';

export default function DriverDashboardScreen() {
  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='px-6 py-4'>
        {/* Header */}
        <View className='mb-6'>
          <Text className='text-2xl font-bold text-secondary-900 mb-1'>Driver Dashboard</Text>
          <Text className='text-secondary-600'>Welcome back, John!</Text>
        </View>

        {/* Status Card */}
        <View className='bg-white rounded-xl p-6 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-lg font-semibold text-secondary-900'>Status</Text>
            <TouchableOpacity className='bg-success-500 rounded-full px-4 py-2'>
              <Text className='text-white font-medium'>Available</Text>
            </TouchableOpacity>
          </View>
          
          <View className='flex-row items-center mb-2'>
            <MapPin color='#64748b' size={16} />
            <Text className='text-secondary-600 ml-2'>Current Location: Downtown</Text>
          </View>
          <View className='flex-row items-center'>
            <Clock color='#64748b' size={16} />
            <Text className='text-secondary-600 ml-2'>Online for 2h 30m</Text>
          </View>
        </View>

        {/* Stats */}
        <View className='flex-row space-x-4 mb-6'>
          <View className='bg-white rounded-xl p-4 flex-1'>
            <View className='flex-row items-center mb-2'>
              <Truck color='#7c3aed' size={20} />
              <Text className='text-secondary-600 ml-2 text-sm'>Today's Deliveries</Text>
            </View>
            <Text className='text-2xl font-bold text-secondary-900'>8</Text>
          </View>

          <View className='bg-white rounded-xl p-4 flex-1'>
            <View className='flex-row items-center mb-2'>
              <Star color='#f59e0b' size={20} />
              <Text className='text-secondary-600 ml-2 text-sm'>Rating</Text>
            </View>
            <Text className='text-2xl font-bold text-secondary-900'>4.8</Text>
          </View>
        </View>

        {/* Available Requests */}
        <View className='mb-6'>
          <Text className='text-lg font-semibold text-secondary-900 mb-4'>Available Requests</Text>
          
          <TouchableOpacity className='bg-white rounded-xl p-4 mb-3'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Package Delivery</Text>
              <Text className='text-primary-600 font-semibold'>.00</Text>
            </View>
            <Text className='text-secondary-600 text-sm mb-1'>From: Downtown Office</Text>
            <Text className='text-secondary-600 text-sm mb-2'>To: Residential Area</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-secondary-500 text-sm'>Distance: 5.2 km</Text>
              <Text className='text-secondary-500 text-sm'>Est. Time: 15 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white rounded-xl p-4'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Document Delivery</Text>
              <Text className='text-primary-600 font-semibold'>.00</Text>
            </View>
            <Text className='text-secondary-600 text-sm mb-1'>From: Business District</Text>
            <Text className='text-secondary-600 text-sm mb-2'>To: Airport</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-secondary-500 text-sm'>Distance: 12.8 km</Text>
              <Text className='text-secondary-500 text-sm'>Est. Time: 25 min</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
