import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../const/Input';
import Button from '../const/Button';
import Loader from '../const/Loader';
import COLORS from '../const/Colors';
// import DocumentPicker from '@react-native-document-picker';
import ImagePicker from 'react-native-image-picker'; 
import axios from 'axios';

let userId = 1
let supermarketCode =  "" 

const SupermarketScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    "supermarketName": "",
    "supermarketEmail": "",
    "cacUrl": "",
    "registeredUserId": userId,
    "supermarketLocation": "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const validate = () => {
    let valid = true;
    setError({}); // Clear previous errors

    // if (!inputs.email.match(/\S+@\S+\.\S+/)) {
    //   handleError('Please input a valid email', 'email');
    //   valid = false;
    // }

    // if (!inputs.companyName) {
    //   handleError('Please input your company name', 'companyName');
    //   valid = false;
    // }
    // if (!inputs.password || inputs.password.length < 5) {
    //   handleError('Password must be at least 5 characters', 'password');
    //   valid = false;
    // }

    // if (!inputs.companyLocation) {
    //   handleError('Please input your company location', 'companyLocation');
    //   valid = false;
    // }

    if (valid) {
      register();
    }
  };
  const register = async ()=>{
    alert(inputs.supermarketEmail)
		try {
			const response = await axios.post(
				"https://8f2d-62-173-45-70.ngrok-free.app/api/v1/supermarketAdminController/registerSupermarketAdmin" ,
          inputs
			
			)
      console.log(response.data);
      alert(response.data.data)
      alert("successful registration")
      AsyncStorage.setItem("supermarket",JSON.stringify(response.data.data))
		} catch (error) {
      console.log(error);
		}
    setLoading(true);

    setTimeout(()=>{
      setLoading(false);
      try{
        AsyncStorage.setItem("supermarket",JSON.stringify(response.data))
        navigation.navigate('SupermarketScreen')
      }catch (eror){
        Alert.alert('Error','Something went wrong')
      }
    })

  }

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setError((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        throw err;
      }
    }
  };

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
      <Loader visible={loading} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.white, fontSize: 30, fontWeight: 'bold', marginTop: 40 }}>
          supermarket SignUp
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details for Supermarket Information
        </Text>
        <View style={{ marginVertical: 10 }}>
         
          <Input
            placeholder="Enter your company name"
            iconName="account-outline"
            label="Company Name"
            error={error.supermarketName}
            onFocus={() => handleError(null, 'supermarketName')}
            onChangeText={(text) => handleOnChange(text, 'supermarketName')}
          />
          <Input
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Company Email"
            error={error.supermarketEmail}
            onFocus={() => handleError(null, 'supermarketEmail')}
            onChangeText={(text) => handleOnChange(text, 'supermarketEmail')}
          />
      
          <Input
            placeholder="Company Location"
            // iconName="location-outline"
            label="Company Location"
            error={error.companyLocation}
            onFocus={() => handleError(null, 'companyLocation')}
            onChangeText={(text) => handleOnChange(text, 'companyLocation')}
          />
           <Input
            placeholder="Enter your CAC Rc no."
            iconName="lock-outline"
            label="CAC"
            // secureTextEntry={true}
            error={error.CAC}
            onFocus={() => handleError(null, 'CAC')}
            onChangeText={(text) => handleOnChange(text, 'CAC')}
          />
        </View>

        <View style={{ top:-29 }}>
          
          <Button title="Pick a File" />
          <Text>{selectedImage ? 'Yes' : ''}</Text>
          <Button title="Pick an Image" />
        </View>
        <Button title="Sign Up" onPress={register} />
        <Text
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            color: COLORS.grey,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 45,
          }}
        >
          Already have an account?{' '}
          <Text style={{ color: COLORS.blue }}>Login</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupermarketScreen;
