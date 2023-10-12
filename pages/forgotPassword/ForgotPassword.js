import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import COLORS from '../const/Colors';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { SIZES } from '../const/Sizes';


const { width } = Dimensions.get('window');

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSavePassword = () => {
    // Simulated password change logic
    if (newPassword === confirmPassword) {
      // Passwords match
      // Simulate an API call to update the password
      setTimeout(() => {
        Alert.alert('Success', 'Password changed successfully', [
          { text: 'OK', onPress: () => navigation.navigate('WelcomeScreen') },
        ]);
      }, 1000);
    } else {
      Alert.alert('Error', 'Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <Image
            source={require('../../assets/theme/applogo.png')}
            style={styles.logo}
          />

{/* <View className="Image">
                <LottieView 
                source={require('../../assets/theme/password.json')}
                autoPlay
                loop
                style={{width: 150, height: 350,top:-80,right:10
                }}
                />
            </View> */}


    <View style={styles.cool}>
      <Text style={styles.header}>Password Change</Text>
      <TextInput
        style={styles.input}
        placeholder="Old Password"
        secureTextEntry
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
        <Text style={styles.buttonText}>Save Password</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.green
  },
  text: {
    fontSize: width < 400 ? 16 : 24, 
    fontWeight: 'bold',
  },
  header: {
    fontWeight: '700',
    fontSize: 5/100*(SIZES.width),
    marginBottom: 10,
    top:-70,
    color:COLORS.light
    // borderCurve:'circular',
    
  },

  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor:COLORS.light,
    top:-70
  },
  button: {
    backgroundColor:COLORS.yellow,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top:-60
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  logo:{
    top:-70
  }
});

export default ChangePassword;
