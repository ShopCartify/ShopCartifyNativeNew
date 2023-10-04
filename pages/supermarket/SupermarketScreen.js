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

const SupermarketScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: '',
    companyName: '',
    password: '',
    companyLocation: '',
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const validate = () => {
    let valid = true;
    setError({}); // Clear previous errors

    if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      valid = false;
    }

    if (!inputs.companyName) {
      handleError('Please input your company name', 'companyName');
      valid = false;
    }
    if (!inputs.password || inputs.password.length < 5) {
      handleError('Password must be at least 5 characters', 'password');
      valid = false;
    }

    if (!inputs.companyLocation) {
      handleError('Please input your company location', 'companyLocation');
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  const register = async () => {
    setLoading(true);
    try {
      await AsyncStorage.setItem('user', JSON.stringify(inputs));
      setLoading(false);
      navigation.navigate('LoginScreen');
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong');
    }
  };

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

  const pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image picker cancelled');
      } else if (response.error) {
        console.error('Image picker error:', response.error);
      } else {
        // Image selected successfully, you can use 'response.uri' for the image URI
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
      <Loader visible={loading} />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.white, fontSize: 40, fontWeight: 'bold', marginTop: 40 }}>
          Supermarket
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details for Supermarket Information
        </Text>
        <View style={{ marginVertical: 10 }}>
          {/* Input components */}
          <Input
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Email"
            error={error.email}
            onFocus={() => handleError(null, 'email')}
            onChangeText={(text) => handleOnChange(text, 'email')}
          />
          <Input
            placeholder="Enter your company name"
            iconName="account-outline"
            label="Company Name"
            error={error.companyName}
            onFocus={() => handleError(null, 'companyName')}
            onChangeText={(text) => handleOnChange(text, 'companyName')}
          />
          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            secureTextEntry={true}
            error={error.password}
            onFocus={() => handleError(null, 'password')}
            onChangeText={(text) => handleOnChange(text, 'password')}
          />
          <Input
            placeholder="Company Location"
            iconName="location-outline"
            label="Company Location"
            error={error.companyLocation}
            onFocus={() => handleError(null, 'companyLocation')}
            onChangeText={(text) => handleOnChange(text, 'companyLocation')}
          />
        </View>

        <View style={{ top:-29 }}>
          
          <Button title="Pick a File" onPress={pickDocument} />
          <Text>{selectedImage ? 'Yes' : ''}</Text>
          <Button title="Pick an Image" onPress={pickImage} />
        </View>
        <Button title="Sign Up" onPress={validate} />
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
