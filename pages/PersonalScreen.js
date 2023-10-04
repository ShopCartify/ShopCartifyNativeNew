import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import supermarketStyles from './supermarketStyles.js';
import Logo from '../../assets/images/applogo.png'
import { ScrollView } from 'react-native';

const Supermarket = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
  };

  return (
    <ScrollView style={supermarketStyles}>
    <View style={supermarketStyles.container}>
    <View style={supermarketStyles.logo}>
        <Image source={Logo} style={supermarketStyles.logoImage} />
    </View>
      <Text style={supermarketStyles.heading}>Register Supermarket</Text>
      <View style ={supermarketStyles.hold}>
      <TextInput
        style={supermarketStyles.input}
        placeholder="Company Name"
        onChangeText={text => setCompanyName(text)}
      />
      <TextInput
        style={supermarketStyles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={supermarketStyles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      {/* File input is not supported in React Native */}
      <TouchableOpacity style={supermarketStyles.button} onPress={handleSignUp}>
        <Text style={supermarketStyles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={supermarketStyles.user}>
        Already a User?{' '}
        <Text style={supermarketStyles.loginLink}>Login</Text>
      </Text>
    </View>
    </View>
    </ScrollView>
  );
};
export default Supermarket;