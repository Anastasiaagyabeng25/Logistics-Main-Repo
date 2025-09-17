import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Package, MapPin, Clock, DollarSign } from 'lucide-react-native';

export default function UserRequestsScreen() {
  const requests = [
    {
      id: '1',
      title: 'Package Delivery',
      status: 'in_transit',
      from: 'Downtown Office',
      to: 'Residential Area',
      price: 25.00,
      time: '2 hours ago',
    },
    {
      id: '2',
      title: 'Document Delivery',
      status: 'pending',
      from: 'Business District',
      to: 'Airport',
      price: 45.00,
      time: '1 day ago',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-warning-500';
      case 'in_transit': return 'text-success-500';
      case 'delivered': return 'text-primary-600';
      default: return 'text-secondary-500';
    }
  };

  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='px-6 py-4'>
        <Text className='text-2xl font-bold text-secondary-900 mb-6'>My Requests</Text>
        
        {requests.map((request) => (
          <TouchableOpacity key={request.id} className='bg-white rounded-xl p-4 mb-4'>
            <View className='flex-row items-center justify-between mb-3'>
              <Text className='text-secondary-900 font-semibold text-lg'>{request.title}</Text>
              <Text className={	ext-sm font-medium }>
                {request.status.replace('_', ' ').toUpperCase()}
              </Text>
            </View>
            
            <View className='space-y-2 mb-3'>
              <View className='flex-row items-center'>
                <MapPin color='#64748b' size={16} />
                <Text className='text-secondary-600 ml-2'>From: {request.from}</Text>
              </View>
              <View className='flex-row items-center'>
                <MapPin color='#64748b' size={16} />
                <Text className='text-secondary-600 ml-2'>To: {request.to}</Text>
              </View>
            </View>
            
            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <DollarSign color='#7c3aed' size={16} />
                <Text className='text-primary-600 font-semibold ml-1'></Text>
              </View>
              <View className='flex-row items-center'>
                <Clock color='#64748b' size={16} />
                <Text className='text-secondary-500 ml-1'>{request.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
