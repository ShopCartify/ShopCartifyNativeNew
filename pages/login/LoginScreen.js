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
  const login = ()=>{
    setLoading(true);
    setTimeout(async()=>{
      setLoading(false);
      let userData = await AsyncStorage.getItem("user");
      if(userData){
        userData = JSON.parse(userData);
        if(inputs.email == userData.email && 
          inputs.password == userData.password
          ){
          AsyncStorage.setItem(
            "user"
            ,JSON.stringify({...userData,loggedin:true}),
            );
            navigation.navigate('HomeScreen')
        }else{
          Alert.alert('Error','invalid details')
        }
      }else{
        Alert.alert('Error','user does not exist')
      }
    }, 3000);
  }
   

  }
const handleOnChange = (text,input)=>{
  setInputs(prevState => ({...prevState,[input]: text}))
};
const handleError =(errorMessage,input)=>{
  setError(prevState => ({...prevState,[input]: errorMessage}))   
}

  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: COLORS.green,height:900}}>
    <Loader visible ={loading}/>
      <ScrollView
         contentContainerStyle={{
            // paddingTop:'200%',
            paddingHorizontal:20,
            }}>
            <Text style={{color:COLORS.white, fontSize:40, fontWeight:'bold',top:0}}>
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
                style={{width: 550, height: 350,top:0,right:50,
                }}
                />
            </View>

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
          
            <Button title="Login" onPress={validate}/>
            <Text onPress={()=> navigation.navigate('SignUpScreen')}
              style={{
                color:COLORS.grey,
                textAlign:'center',
                fontSize:16,
                fontWeight:'bold',
                top:45,
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