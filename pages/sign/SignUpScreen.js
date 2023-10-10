import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../const/Input';
import Button from '../const/Button'
import Loader from '../const/Loader';
// import { ToastContainer, toast } from "react-toastify";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dimensions,StyleSheet } from 'react-native';


const { width } = Dimensions.get('window');
import BASE_URL from '../../secrets/.SecretConstants';




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

  
const [error,setError]= React.useState({});
const [loading,setLoading]= React.useState(false);

  const validate = () => {
    let valid = true;
  Keyboard.dismiss();
  if(!inputs.email){
    handleError("please input email",'email')
    valid = false;

  }else if(!inputs.email.match(/\S+@\S+.\S+/)){
  handleError("please input valid email",'email')
  valid = false
  }

  // if(!inputs.fullName){
  //   handleError("please input fullname",'fullName')
  //   valid = false
  // }

  // if(!inputs.password){
  //   handleError("please input password",'password')
  //   valid = false
  // }

  // if(!inputs.phoneNumber){
  //   handleError("please input phone Number",'phoneNumber')
  //   valid = false
  // }else if(inputs.password.length < 5){
  //   handleError("Min password length of 5",'phoneNumber')
  // }

  // if(!inputs.userName){
  //   handleError("please input user Name",'userName')
  //   valid = false
  // }


 

  if(valid){
    register();
  }
}

  const register = async ()=>{
    alert("processing ... "+inputs.firstName)

    
		try {
			const response = await axios.post(
				BASE_URL+'/api/v1/auth/register' ,
          inputs
			
			)
      console.log('response is: ' +  response.data.id);
      alert('sign up was successful');
		} catch (error) {
      alert(error);
		}
    // setLoading(true);

    // setTimeout(()=>{
    //   setLoading(false);
    //   try{
    //     AsyncStorage.setItem("user",JSON.stringify(response.data))
    //     navigation.navigate('LoginScreen')
    //   }catch (error){
    //     alert('Error','Something went wrong', error)
    //   } 
    // })

    navigation.navigate('UserDashboard');

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
    {/* <ToastContainer /> */}
      <ScrollView
         contentContainerStyle={{
            // paddingTop:'200%',
            paddingHorizontal:20,
           }}>
            <Text style={{color:COLORS.white, fontSize:40, fontWeight:'bold',top:0}}>
              Register
            </Text>
            <Text style={{color:COLORS.grey, fontSize:18, marginVertical:10,top:0}}>
              Enter Your Details to register
            </Text>
               <View style={{marginVertical:1}}>
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
           
            <Button title="SignUp" onPress={validate}/>
            <Text onPress={()=> navigation.navigate('LoginScreen')}
              style={{
                color:COLORS.grey,
                textAlign:'center',
                fontSize:16,
                fontWeight:'bold',
                top:30,
                left:20,
              }}>
              
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


const style = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  text: {
    fontSize: width < 400 ? 16 : 24,
    fontWeight: 'bold',
  },
});