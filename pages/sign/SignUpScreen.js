import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../const/Input';
import Button from '../const/Button'
import Loader from '../const/Loader';




const SignUpScreen = ({navigation})=> {
  // const validate = () => {};
  const [inputs,setInputs]= React.useState({
    email: "",
    fullName: "",
    password: "",
    phoneNumber:"",
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

  const register = ()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      try{
        AsyncStorage.setItem("user",JSON.stringify(inputs))
        navigation.navigate('LoginScreen')
      }catch (eror){
        Alert.alert('Error','Something went wrong')
      }
    })

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
              placeholder="Enter your your fullname"
              iconName="account-outline"
              label="fullname"
              error={error.fullName}
              onfocus={()=>
              handleError(null,'fullname')}
              onChangeText={(text) => handleOnChange(text, 'fullname')}
              // error="input.email"
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
            <Input 
              KeyboardType="numeric"
              placeholder="Enter your phone number"
              iconName="phone-outline"
              label="Phone number"
              error={error.phoneNumber}
              onfocus={()=>
              handleError(null,'phoneNumber')}
              onChangeText={(text) => handleOnChange(text, 'phone')}
            />
             <Input 
              placeholder="Enter your username"
              iconName="account-outline"
              label="user name"
              error={error.userName}
              onfocus={()=>
              handleError(null,'userName')}
              onChangeText={(text) => handleOnChange(text, 'username')}
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