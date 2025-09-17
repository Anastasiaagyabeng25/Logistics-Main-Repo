import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    // Handle registration logic
    console.log('Register:', formData);
  };

  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='flex-1 px-6 py-8'>
        <View className='mb-8'>
          <Text className='text-3xl font-bold text-primary-600 mb-2'>Create Account</Text>
          <Text className='text-secondary-600'>Sign up to get started</Text>
        </View>

        <View className='space-y-4'>
          <View>
            <Text className='text-secondary-700 mb-2'>Name</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Enter your name'
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
            />
          </View>

          <View>
            <Text className='text-secondary-700 mb-2'>Email</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Enter your email'
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          <View>
            <Text className='text-secondary-700 mb-2'>Mobile</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Enter your mobile number'
              value={formData.mobile}
              onChangeText={(text) => setFormData({...formData, mobile: text})}
              keyboardType='phone-pad'
            />
          </View>

          <View>
            <Text className='text-secondary-700 mb-2'>Password</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Enter your password'
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              secureTextEntry
            />
          </View>

          <View>
            <Text className='text-secondary-700 mb-2'>Confirm Password</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
              secureTextEntry
            />
          </View>

          <TouchableOpacity className='bg-primary-600 rounded-lg py-4 mt-6' onPress={handleRegister}>
            <Text className='text-white text-center font-semibold text-lg'>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View className='mt-6 flex-row justify-center items-center'>
          <Text className='text-secondary-600'>Already have an account? </Text>
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
