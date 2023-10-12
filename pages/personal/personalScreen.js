import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Switch, Alert,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for data storage
import Input from '../const/Input';
import Button from '../const/Button';
import Loader from '../const/Loader';
import COLORS from '../const/Colors';
import { Dimensions,StyleSheet } from 'react-native';
import { SIZES } from '../const/Sizes';


const { width } = Dimensions.get('window');

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
      <Image
            source={require('../../assets/theme/applogo.png')}
          style={{left:25/100*(SIZES.width), 
          resizeMode: "contain",
          position: "absolute",
          aspectRatio: 2,
          width: 45/100*(SIZES.width),
          top:4/100*(SIZES.width)
          }}
          />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.white, 
        fontSize: 5/100*(SIZES.width), 
        fontWeight: 'bold', 
        marginTop: 28/100*(SIZES.width),left:15/100*(SIZES.width)}}>
          Update User Information
        </Text>
        <Text style={{ color: COLORS.grey,
         fontSize: 4/100*(SIZES.width),
         left:5/100*(SIZES.width) ,marginVertical: 10 }}>
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
        <Text style={{ color: 'red', fontSize: 3/100*(SIZES.height), marginTop: 10/100*(SIZES.width) }}>Notifications</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5/100*(SIZES.width) }}>
          <Text style={{ color:'orange', flex: 1 }}>Promotions:</Text>
          <Switch
            value={promotionsEnabled}
            onValueChange={(value) => setPromotionsEnabled(value)}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2/100*(SIZES.width) }}>
          <Text style={{ color:'orange', flex: 1 }}>Advertising:</Text>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: width < 400 ? 16 : 24, 
    fontWeight: 'bold',
  },
});


