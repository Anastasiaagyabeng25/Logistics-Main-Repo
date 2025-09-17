import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react-native';

export default function DriverEarningsScreen() {
  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='px-6 py-4'>
        <Text className='text-2xl font-bold text-secondary-900 mb-6'>Earnings</Text>
        
        {/* Today's Earnings */}
        <View className='bg-white rounded-xl p-6 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-lg font-semibold text-secondary-900'>Today's Earnings</Text>
            <DollarSign color='#7c3aed' size={20} />
          </View>
          <Text className='text-3xl font-bold text-primary-600 mb-2'>.50</Text>
          <Text className='text-secondary-600'>From 8 deliveries</Text>
        </View>

        {/* Weekly Stats */}
        <View className='flex-row space-x-4 mb-6'>
          <View className='bg-white rounded-xl p-4 flex-1'>
            <View className='flex-row items-center mb-2'>
              <TrendingUp color='#22c55e' size={20} />
              <Text className='text-secondary-600 ml-2 text-sm'>This Week</Text>
            </View>
            <Text className='text-xl font-bold text-secondary-900'>.25</Text>
          </View>

          <View className='bg-white rounded-xl p-4 flex-1'>
            <View className='flex-row items-center mb-2'>
              <Calendar color='#7c3aed' size={20} />
              <Text className='text-secondary-600 ml-2 text-sm'>Deliveries</Text>
            </View>
            <Text className='text-xl font-bold text-secondary-900'>42</Text>
          </View>
        </View>

        {/* Recent Earnings */}
        <View className='mb-6'>
          <Text className='text-lg font-semibold text-secondary-900 mb-4'>Recent Earnings</Text>
          
          <View className='bg-white rounded-xl p-4 mb-3'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Package Delivery</Text>
              <Text className='text-primary-600 font-semibold'>.00</Text>
            </View>
            <Text className='text-secondary-600 text-sm'>Downtown to Residential</Text>
            <Text className='text-secondary-500 text-sm'>2 hours ago</Text>
          </View>

          <View className='bg-white rounded-xl p-4 mb-3'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Document Delivery</Text>
              <Text className='text-primary-600 font-semibold'>.00</Text>
            </View>
            <Text className='text-secondary-600 text-sm'>Business District to Airport</Text>
            <Text className='text-secondary-500 text-sm'>1 day ago</Text>
          </View>

          <View className='bg-white rounded-xl p-4'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-secondary-900 font-semibold'>Express Delivery</Text>
              <Text className='text-primary-600 font-semibold'>.00</Text>
            </View>
            <Text className='text-secondary-600 text-sm'>City Center to Suburbs</Text>
            <Text className='text-secondary-500 text-sm'>2 days ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
