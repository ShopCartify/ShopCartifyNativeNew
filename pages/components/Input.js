// import React from "react";
// import { View } from "react-native-web";
// const Input = () => {
//     return({
//         label,
//         iconName,
//         error,
//         password,
//         onfocus = () => {},
//         ...props
        
//     }) => {
//         return <View style={{marginBottom: 20}}>
//         <Text></Text>
//         </View>;
//     }
        
   
// }
// export default Input


// import { View ,Text, TouchableOpacity} from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native'
// import COLORS from '../const/Colors'
// import { ScrollView } from 'react-native-gesture-handler'
// import LottieView from 'lottie-react-native';
// // import Button from './const/Button'
// import Butt from '../const/Butt'







// const WelcomeScreen = ({navigation}) => {
//     // const navigation = useNavigation( WelcomeScreen);
//     return(
//         <SafeAreaView className="flex-1" style={{backgroundColor: COLORS.green,paddingTop: '200%',height:900}}>
//         <ScrollView
//          contentContainerStyle={{
//             paddingHorizontal:20,
//             }}>
              
//         <View>
//             <Text className="fff" 
//             style={{color: COLORS.white,fontSize:37,alignItems:'center',top:130,left:50}}>
//                 Let's Get Started!
//             </Text>
//             <View className="Image">
//                 <LottieView 
//                 source={require('../../assets/theme/animation.json')}
//                 autoPlay
//                 loop
//                 style={{width: 350, height: 350,top:120,left:10,
//                 }}
//                 />
//             </View>

//             <Butt title="Sign Up" onPress={()=> navigation.navigate('SignUpScreen')}/>
            
//           </View>
//             <Text style={{top:336,color:COLORS.white,left:75}}>Already have an account?</Text>
//             <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
//                 <Text style={{top:317,left:250,fontSize:15,color:COLORS.yellow}}>Login</Text>
//             </TouchableOpacity>


   
//  </ScrollView>
//  </SafeAreaView>
//     )
// }

// export default WelcomeScreen;  




// };



// export default HeroSection;

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import wine from '../../assets/theme/wine.jpeg' 
import Logo from '../../assets/theme/applogo.png'

const WishList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Martini Sparkling',
      description: '750ml',
      price: 7200.99,
    },
    // Add more items to the wishlist as needed
  ]);

  const [total, setTotal] = useState(0.0);

  const calculateTotal = () => {
    let sum = 0;
    for (const item of items) {
      sum += item.price;
    }
    setTotal(sum);
  };

  const removeFromWishlist = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <ScrollView style={wishlistStyles.container}>
      <View style={wishlistStyles.houseall}>
        <View style={wishlistStyles.logo}>
          <Image source={Logo} style={wishlistStyles.logoImage} />
        </View>
        <View style={wishlistStyles.allItems}>
          <View style={wishlistStyles.form}>
            <View style={wishlistStyles.begin}>
              <Text style={wishlistStyles.h1}>MY WISHLIST</Text>
              <View style={wishlistStyles.innerhouse}>
                {items.map((item) => (
                  <View style={wishlistStyles.hold} key={item.id}>
                    <View style={wishlistStyles.add}>
                      <View style={wishlistStyles.productInfoTwo}>
                        <View style={wishlistStyles.wine}>
                          <Image source={wine} style={wishlistStyles.wineImage} />
                        </View>
                        <Text style={wishlistStyles.productName}>{item.name}</Text>
                        <Text style={wishlistStyles.productDesc}>{item.description}</Text>
                        <Text style={wishlistStyles.price}>N{item.price}</Text>
                      </View>
                      <TouchableOpacity
                        style={wishlistStyles.removeHolder}
                        onPress={() => removeFromWishlist(item.id)}
                      >
                        <Icon name="trash-o" size={30} color="red" />
                        <Text style={wishlistStyles.remove}>REMOVE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
              <TouchableOpacity onPress={() => calculateTotal()}>
                <Text style={wishlistStyles.buttonText}>CHECK OUT</Text>
              </TouchableOpacity>
              <Text style={wishlistStyles.totalText}>Total: N{total}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
import { StyleSheet } from 'react-native';

const wishlistStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b4b88',
    height:900,
  },
  houseall: {
    padding: 20,
  },
  logo: {
    alignItems: 'center',
    // width:200,
    // top:100
  },
  logoImage: {
    width: 200,
    height: 100,
    // marginBottom: 50,
    top:20
  },
  allItems: {
    marginTop: 20,
  },
  form: {
    borderWidth: 1,
    // borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    backgroundColor:'white',
    top:100,
    height:300
  },
  begin: {
    marginBottom: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    top:-100,
    marginLeft:100,
    color:'white'
    
  },
  innerhouse: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    height:200,
    top:-10
  },
  hold: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  add: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wineImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    top:20,
    right:5,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    left:160,
    top:-80
  },
  productDesc: {
    fontSize: 14,
    left:100,
    left:180,
    top:-60,
    fontSize:20
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 160,
    top:-50,
    fontSize:20
  },
  removeHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    top:115,
    right:250
  },
  remove: {
    color: 'red',
    marginLeft: 5,
    fontSize: 16,
    top:5,
    // right:110
  },
  buttonText: {
    backgroundColor: '#ffc107',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    top:150,
    height:50,
   
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
});

export default WishList;


























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

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

 

  if(valid){
    register();
  }
}

  const register = async ()=>{
    alert("processing ... ",inputs.userName,"'s", "registration.")
    
		try {
			const response = await axios.post(
				BASE_URL+'/api/v1/auth/register' ,
          Input
			
			)
      alart('response is: ' ,  response);
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
            {/* <Input 
              placeholder="Enter your password"
              secureTextEntry={true}
              iconName="lock-outline"
              label="Password"
              error={error.password}
              onfocus={()=>
              handleError(null,'password')}
              // error="input.email"
              onChangeText={(text) => handleOnChange(text, 'password')}
            /> */}

          <Input
          secureTextEntry={!this.state.showPassword} // Toggle secureTextEntry based on showPassword state
          placeholder="Enter your password"
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
        />

           <TouchableOpacity onPress={this.togglePasswordVisibility}>
          <Icon
            name={this.state.showPassword ? 'eye' : 'eye-slash'}
            size={24}
            color="#000"
            style={{ position: 'absolute', top: 10, right: 10 }}
          />
          </TouchableOpacity>
            
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