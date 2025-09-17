import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../src/context/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <ScrollView className='flex-1 bg-background-light'>
      <View className='flex-1 px-6 py-8'>
        {/* Header */}
        <View className='mb-8'>
          <Text className='text-3xl font-bold text-primary-600 mb-2'>Welcome Back!</Text>
          <Text className='text-secondary-600'>Sign in to your account</Text>
        </View>

        {/* Form */}
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

          <View>
            <Text className='text-secondary-700 mb-2'>Password</Text>
            <TextInput
              className='bg-white border border-border-light rounded-lg px-4 py-3 text-secondary-900'
              placeholder='Enter your password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity className='bg-primary-600 rounded-lg py-4 mt-6'>
            <Text className='text-white text-center font-semibold text-lg'>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Links */}
        <View className='mt-6 space-y-4'>
          <Link href='/(auth)/forgot-password' asChild>
            <TouchableOpacity>
              <Text className='text-primary-600 text-center'>Forgot Password?</Text>
            </TouchableOpacity>
          </Link>

          <View className='flex-row justify-center items-center'>
            <Text className='text-secondary-600'>Don't have an account? </Text>
            <Link href='/(auth)/register' asChild>
              <TouchableOpacity>
                <Text className='text-primary-600 font-semibold'>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
