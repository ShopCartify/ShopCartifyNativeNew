import { View, Text, Keyboard } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../const/Colors'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../const/Input';
import SignButton from '../const/SignButton'
import Loader from '../const/Loader';
// import { ToastContainer, toast } from "react-toastify";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dimensions,StyleSheet } from 'react-native';
import BASE_URL from '../../secrets/.SecretConstants';
import { SIZES } from '../const/Sizes';


const { width } = Dimensions.get('window');

const SignUpScreen = ({navigation})=> {
  // const validate = () => {};
  const [inputs,setInputs]= React.useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
     showPassword: false,
    userName: "",
  })
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    id: ""
  })
const [btnTittle, setBtnTittle] = useState("SignUp")
const [error,setError]= React.useState({});
const [loading,setLoading]= React.useState(false);

  const validate = () => {
    let valid = true;
  Keyboard.dismiss();
  setBtnTittle("Procesing... ")
  if(!inputs.email){
    handleError("please input email",'email')
    valid = false;

  }else if(!inputs.email.match(/\S+@\S+.\S+/)){
  handleError("please input valid email",'email')
  valid = false
  }

  if(!inputs.fullName){
    handleError("please input fullname",'fullName')
    valid = false
  }

  if(!inputs.password){
    handleError("please input password",'password')
    valid = false
  }

  if(!inputs.phoneNumber){
    handleError("please input phone Number",'phoneNumber')
    valid = false
  }else if(inputs.password.length < 5){
    handleError("Min password length of 5",'phoneNumber')
  }

  if(!inputs.userName){
    handleError("please input user Name",'userName')
    valid = false
  }


 

  if(valid){
    register();
  }
}

  const register = async ()=>{
    // alert("processing ... "+inputs.firstName)


		try {
			const response = await axios.post(
				BASE_URL+"/api/v1/auth/register" ,
          inputs
			)
      setBtnTittle("Successful...")
      console.log('response is: ' +  response.data.data);
      alert('sign up was successful');

      let responseValue = response.data
      setUser(responseValue)
      AsyncStorage.setItem("user", JSON.stringify(responseValue))

      navigation.navigate('user_dashboard');

		} catch (error) {
      alert(error);
      console.log("network error! ");
		}
    setLoading(true)

    
    // setLoading(true);


    setTimeout(()=>{
      setLoading(false);
      try{
        AsyncStorage.setItem("user",JSON.stringify(response.data))
        navigation.navigate('LoginScreen')
      }catch (error){
        alert('Error','Something went wrong', error)
      } 
    })


    // navigation.navigate('UserDashboard');

}
const handleOnChange = (text,input)=>{
  setInputs(prevState => ({...prevState,[input]: text}))
};
const handleError =(errorMessage,input)=>{
  setError(prevState => ({...prevState,[input]: errorMessage}))
    
}

  return (
    <SafeAreaView style={{backgroundColor: COLORS.green}}>
    <Loader visible ={loading}/>
    {/* <ToastContainer /> */}
      <ScrollView
         contentContainerStyle={{
            // paddingTop:'200%',
            paddingVertical: 40/100*(SIZES.width),
            paddingHorizontal:20,
            width:SIZES.width,
           }}>
            <Text style={{color:COLORS.white, fontSize:10/100*(SIZES.width), fontWeight:'bold',top:10/100*(SIZES.width)}}>
              Register
            </Text>
            <Text style={{color:COLORS.grey, fontSize:4.5/100*(SIZES.width), marginVertical:10,top:10/100*(SIZES.width)}}>
              Enter Your Details to register
            </Text>
               <View style={{marginVertical:1/100*(SIZES.width)}}>

            <Input 
              placeholder="Enter your email address"
              iconName="email-outline"
              label="Email"
              error={error.email}
              onfocus={()=>
              handleError(null,'email')}
             onChangeText={(text) =>handleOnChange(text, 'email')}
            />
               <Input 
              placeholder="Enter your your FirstName"
              iconName="account-outline"
              label="First Name"
              error={error.firstName}
              onfocus={()=>
              handleError(null,'firstName')}
              onChangeText={(text) => handleOnChange(text, 'firstName')}
              // error="input.email"
            />
          <Input 
              // KeyboardType="numeric"
              placeholder="Enter your lastName"
              iconName="account-outline"
              label="Last Name"
              error={error.lastName}
              onfocus={()=>
              handleError(null,'lastName')}
              onChangeText={(text) => handleOnChange(text, 'lastName')}
            />
            <Input 
              placeholder="Enter your password"
              secureTextEntry={true}
              iconName="lock-outline"
              label="Password"
              error={error.password}
              onfocus={()=>
              handleError(null,'password')}
              // error="input.email"
              onChangeText={(text) => handleOnChange(text, 'password')}
            />
            
             <Input 
              placeholder="Enter your user name"
              iconName="account-outline"
              label="user name"
              error={error.userName}
              onfocus={()=>
              handleError(null,'userName')}
              onChangeText={(text) => handleOnChange(text, 'userName')}
            />
           <SignButton title={btnTittle} onPress={validate}/>
            
            <Text onPress={()=> navigation.navigate('LoginScreen')}
              style={{
                color:COLORS.grey,
                textAlign:'center',
                fontSize:4/100*(SIZES.width),
                fontWeight:'bold',
                top:45,
                left:20,
              }}
              >              
              <Text>
              Already have an account?Login 
              </Text>
            </Text>
            </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignUpScreen;


