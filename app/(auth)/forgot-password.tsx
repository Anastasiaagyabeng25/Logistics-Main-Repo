import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = React.useState('');

  const handleResetPassword = () => {
    // Handle password reset logic
    console.log('Reset password for:', email);
  };

  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='flex-1 px-6 py-8'>
        <View className='mb-8'>
          <Text className='text-3xl font-bold text-primary-600 mb-2'>Reset Password</Text>
          <Text className='text-secondary-600'>Enter your email to reset your password</Text>
        </View>

        <View className='space-y-4'>
          <View>
            <Text className='text-secondary-700 mb-2'>Email</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Enter your email'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          <TouchableOpacity className='bg-primary-600 rounded-lg py-4 mt-6' onPress={handleResetPassword}>
            <Text className='text-white text-center font-semibold text-lg'>Reset Password</Text>
          </TouchableOpacity>
        </View>

        <View className='mt-6 flex-row justify-center items-center'>
          <Text className='text-secondary-600'>Remember your password? </Text>
          <Link href='/(auth)/login' asChild>
            <TouchableOpacity>
              <Text className='text-primary-600 font-semibold'>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
