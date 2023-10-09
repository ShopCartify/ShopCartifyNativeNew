import { Text, Keyboard, Alert,View } from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../const/Input';
import Button from '../const/Button'
import Loader from '../const/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import HomeScreen from './HomeScreen';
import LottieView from 'lottie-react-native';

import { Dimensions,StyleSheet } from 'react-native';
import { SIZES } from '../const/Sizes';


const { width } = Dimensions.get('window');
import axios from 'axios';
import BASE_URL from '../../secrets/.SecretConstants';




const LoginScreen = ({navigation})=> {
  const [inputs,setInputs]= React.useState({
    email: "",
    password: "",
   
  })  
const [error,setError]= React.useState({});
const [loading,setLoading]= React.useState(false);

  const validate = () => {;
    let valid = true;
  Keyboard.dismiss();
  if(!inputs.email){
    handleError("please input email",'email')
    valid = false;

  }
  if(!inputs.password){
    valid = false
    handleError("please input password",'password')
  }
  if(valid){
    login();
  }
  }
  const login = async ()=>{
    alert("processing ... ")

    
		try {
			const response = await axios.post(
				BASE_URL+'/api/v1/auth/login' ,
          inputs
			
			)
      console.log('response is: ' +  response.data.id);
      alert('sign up was successful');
      navigation.navigate('user_dashboard')

		} catch (error) {
      alert(error);
		}
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

   

  
const handleOnChange = (text,input)=>{
  setInputs(prevState => ({...prevState,[input]: text}))
};
const handleError =(errorMessage,input)=>{
  setError(prevState => ({...prevState,[input]: errorMessage}))   
}

  return (
    
    <SafeAreaView style={styles.mainContainer}>
    <Loader visible ={loading}/>
      <ScrollView contentContainerStyle={styles.container}
            >
            <Text style={{color:COLORS.white,fontSize: 10/100*(SIZES.width), fontWeight:'bold',top:10}}>
              Login
            </Text>
            <Text style={{color:COLORS.grey, fontSize:18, marginVertical:10,top:20}}>
              Enter Your Details to Login
            </Text>

            <View className="Image">
                <LottieView 
                source={require('../../assets/theme/animationbb.json')}
                autoPlay
                loop
                style={{width: 550/100*(SIZES.width), height: 30/100*(SIZES.height),alignItems:"center",
                }}
                />
            </View>
            <View style={{width:90/100*(SIZES.width)}}>

            <Input 
              placeholder="Enter your email address"
              iconName="email-outline"
              label="Email"
              error={error.email}
              onfocus={()=>
              handleError(null,'email')}
             onChangeText={(text) => handleOnChange(text, 'email')}
            />
           

            <Input 
              placeholder="Enter your password"
              iconName="lock-outline"
              label="Password"
              error={error.password}
              onfocus={()=>
              handleError(null,'password')}
              // error="input.email"
              onChangeText={(text) => handleOnChange(text, 'password')}
            />
            </View>
   
            <Button title="Login"onPress={validate} />
            <Text onPress={()=> navigation.navigate('SignUpScreen ')}

            // onPress={validate}
              style={{
                color:COLORS.grey,
                textAlign:'center',
                fontSize: 3.5/100*(SIZES.width),
                fontWeight:'bold',
                top:31,
                left:20,
              }}>
              
              
               <Text>
              Dont have an account?Register 
              </Text>
            </Text>
    
      </ScrollView>
    </SafeAreaView>
  )
}
export default LoginScreen;


const styles = StyleSheet.create({

  mainContainer: { 
    flex:1, 
    width:SIZES.width, 
    height: SIZES.height, 
    backgroundColor: COLORS.green, 
    paddingHorizontal: 3/100*(SIZES.width),
},
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: "center",
    paddingBottom: 20/100*(SIZES.height),

  },
  text: {
    fontSize: width < 400 ? 16 : 24, 
    fontWeight: 'bold',
  },
});