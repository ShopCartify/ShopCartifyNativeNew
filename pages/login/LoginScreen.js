
import { Text, Keyboard, Alert,TouchableOpacity, View} from 'react-native'

import React, { useState } from 'react';
// import React from 'react'
import COLORS from '../const/Colors'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../const/Input';
import Checkbutton from '../const/Checkbutton';
import Button from '../const/Button';
import Loader from '../const/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import HomeScreen from './HomeScreen';
import LottieView from 'lottie-react-native';
import { CheckBox } from '@rneui/themed';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import { CheckBox } from '@rneui/themed';
// import Icon from 'react-native-vector-icons/FontAwesome';




import { Dimensions, StyleSheet } from 'react-native';
import { SIZES } from '../const/Sizes';
 
const { width } = Dimensions.get('window');
import axios from 'axios';
import BASE_URL from '../../secrets/.SecretConstants';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';




const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",

  })

  const [error, setError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isFocused, setIsFocused] = useState(false)
  const [btnTittle, setBtnTittle] = useState("Login")


  // const handleCheckboxChange = () => {
  //   if(showInput===false)
  //   setShowInput(true);
  // else{
  //   setShowInput(false)
  // }
  // };

  const handleCheckboxChange = () => {
    if(showInput===false)
    setShowInput(true);
  else{
    setShowInput(false)
  }
  };
  const handleRegisterPress = () => {
    navigation.navigate('SignUpScreen');
  };


  const validate = () => {
    ;
    setBtnTittle("verifying ")
    let valid = true;
    Keyboard.dismiss();
    if (!inputs.email) {
      handleError("please input email", 'email')
      valid = false;

    }
    if (!inputs.password) {
      valid = false
      handleError("please input password", 'password')
    }
    if (valid) {
      login();
    }
  }
  const login = async () => {
    setBtnTittle("processing ... ")


    try {
      const response = await axios.post(
        BASE_URL + '/api/v1/auth/login',
        inputs

      )
      // console.log('response is: ' + response.data);
      setBtnTittle('login successful');
      alert('login successful');
      let responseValue = response.data
      
      // setUser(responseValue)
      AsyncStorage.setItem("user", JSON.stringify(responseValue))

      navigation.navigate('user_dashboard') 

    } catch (error) {
      setBtnTittle("error login failed");
      console.log("error");
      console.log(error);
    }
    setTimeout(() => {
      setBtnTittle("Login")
    
    }, 2000);
    // setBtnTittle("Login")

    // setLoading(true);
    // setTimeout(async()=>{
    //   setLoading(false);
    //   let userData = await AsyncStorage.getItem("user");
    //   if(userData){
    //     userData = JSON.parse(userData);
    //     if(inputs.email == userData.email && 
    //       inputs.password == userData.password
    //       ){
    //       AsyncStorage.setItem(
    //         "user"
    //         ,JSON.stringify({...userData,loggedin:true}),
    //         );
    //         navigation.navigate('HomeScreen')
    //     }else{
    //       Alert.alert('Error','invalid details')
    //     }
    //   }else{
    //     Alert.alert('Error','user does not exist')
    //   }
    // }, 3000);
  }




  const handleOnChange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }))
  };
  const handleError = (errorMessage, input) => {
    setError(prevState => ({ ...prevState, [input]: errorMessage }))
  }

  return (

    <SafeAreaView style={styles.mainContainer}>
      <Loader visible={loading} />
      <ScrollView contentContainerStyle={styles.container}
      >
        <Text style={{ color: COLORS.white, fontSize: 6 / 100 * (SIZES.width),
         fontWeight: 'bold', top:15/100*(SIZES.width)}}>
          User Login
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10, top: 15/100*(SIZES.width) }}>
          Enter Your Details to Login
        </Text>

        <View className="Image">
          <LottieView
            source={require('../../assets/theme/animationbb.json')}
            autoPlay
            loop
            style={{
              width: 550 / 100 * (SIZES.width), 
              height: 30 / 100 * (SIZES.height),
               alignItems: "center",
               top:5/100*(SIZES.width)
            }}
          />
        </View>
        <View style={{ width: 90 / 100 * (SIZES.width) }}>

          <Input
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Email"
            error={error.email}
            onfocus={() =>
              handleError(null, 'email')}
            onChangeText={(text) => handleOnChange(text, 'email')}

          />

          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            error={error.password}
            onfocus={() =>
              handleError(null, 'password')}
            // error="input.email"
            onChangeText={(text) => handleOnChange(text, 'password')}
          />
        </View>


        
        
        {/* <Checkbox
            value={showInput}
            onPress={handleCheckboxChange}
            onPressIn={()=>{setIsFocused(true)}}
          /> */}
          {/* <Pressable
           value={showInput}
            onPress={handleCheckboxChange}
            onPressIn={()=>
            setIsFocused(true)}
            onPressOut={()=>
            setIsFocused(false)}
            >
            <Ionicons
            name={isFocused? "checkbox-outline" : "square-outline"}  
            size={34}            
            color={COLORS.darkBlue}
            style={{backgroundColor:isFocused? "green":"white",
            top:8/100*(SIZES.width),
            right:38/100*(SIZES.width),
            borderRadius:10/100*(SIZES.width)}}
            />            
            </Pressable>
          <Text style={{color:COLORS.yellow,
          fontSize:4/100*(SIZES.width),
          top:1/100*(SIZES.width),
          right:10/100*(SIZES.width)}}>Signup as an admin</Text>
         
          {showInput && (
            
            <TextInput
            placeholder = "Enter something"
            style={{width:80/100*(SIZES.width),
            height:6/100*(SIZES.height),
            backgroundColor:COLORS.light,
            borderRadius:2/100*(SIZES.width),
            top:6/100*(SIZES.width)
            }}
            />
            
          )} */}
          
      

            {/* <Input 
              placeholder="Enter your password"
              iconName="lock-outline"
              label="Password"
              error={error.password}
              onfocus={()=>
              handleError(null,'password')}
              // error="input.email"
              onChangeText={(text) => handleOnChange(text, 'password')}
            /> */}
           

        <Button title={btnTittle} onPress={validate} />
        <Text onPress={() => navigation.navigate('SignUpScreen')}

          // onPress={validate}
          style={{
            color: COLORS.grey,
            textAlign: 'center',
            fontSize: 3.5 / 100 * (SIZES.width),
            fontWeight: 'bold',  
            top:18/100*(SIZES.width),
            left: 10/100*(SIZES.width),
          }}>

          <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={{right:15/100*(SIZES.width),fontSize:4/100*(SIZES.width),color:COLORS.grey}}>
            Dont have an account? 
          </Text>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
        </Text>


      </ScrollView>
    </SafeAreaView>
  )
}
export default LoginScreen;


const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    width: SIZES.width,
    height: SIZES.height,
    backgroundColor: COLORS.green,
    paddingHorizontal: 3 / 100 * (SIZES.width),
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: "center",
    paddingBottom: 20 / 100 * (SIZES.height),

  },
  tick:{
    // color:COLORS.blue,
    display:'flex',
    backgroundColor: "blue",
    position: "relative",
    // zIndex: 999
    overlayColor: "red"
  },
  loginText:{
    color:COLORS.grey,
    top:-5.5/100*(SIZES.width),
    left:27/100*(SIZES.width),
    fontSize:4/100*(SIZES.width)
  }
});