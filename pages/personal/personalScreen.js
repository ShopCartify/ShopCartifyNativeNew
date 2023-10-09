import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Switch, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for data storage
import Input from '../const/Input';
import Button from '../const/Button';
import Loader from '../const/Loader';
import COLORS from '../const/Colors';

const PersonalScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    userName: "",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [promotionsEnabled, setPromotionsEnabled] = useState(false);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(false);

  const validate = () => {
    let valid = true;
    // Clear previous errors
    setError({});

  
    if (!inputs.firstName) {
      handleError('Please input your first name', 'firstName');
      valid = false;
    }

    if (!inputs.lastName) {
      handleError('Please input your last name', 'lastName');
      valid = false;
    }

    if (!inputs.userName ) {
      handleError('Please input your user name', 'userName');
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        // Save user data to AsyncStorage
        AsyncStorage.setItem('user', JSON.stringify(inputs))
        navigation.navigate('LoginScreen')
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    });
  };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setError(prevState => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
      <Loader visible={loading} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.white, fontSize: 40, fontWeight: 'bold', marginTop: 40 }}>
          Update User Information
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details for Personal Information
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Input
            placeholder="Enter your first name"
            iconName="account-outline"
            label="First Name"
            error={error.firstName}
            onFocus={() => handleError(null, 'firstName')}
            onChangeText={(text) => handleOnChange(text, 'firstName')}
          />
          <Input
            placeholder="Enter your last name"
            iconName="account-outline"
            label="Last Name"
            error={error.lastName}
            onFocus={() => handleError(null, 'lastName')}
            onChangeText={(text) => handleOnChange(text, 'lastName')}
          />
            <Input
            placeholder="Enter your user name"
            iconName="account-outline"
            label="User Name"
            error={error.userName}
            onFocus={() => handleError(null, 'userName')}
            onChangeText={(text) => handleOnChange(text, 'userName')}
          />
      
        </View>
        <Text style={{ color: COLORS.white, fontSize: 18, marginTop: 20 }}>Notifications</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: COLORS.grey, flex: 1 }}>Promotions:</Text>
          <Switch
            value={promotionsEnabled}
            onValueChange={(value) => setPromotionsEnabled(value)}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: COLORS.grey, flex: 1 }}>Advertising:</Text>
          <Switch
            value={advertisingEnabled}
            onValueChange={(value) => setAdvertisingEnabled(value)}
          />
        </View>
        <Button title="Update" onPress={validate} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalScreen;


