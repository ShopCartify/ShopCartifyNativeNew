import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import qrcode from '../../assets/theme/qrcode.json';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../const/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeButton from '../const/WelcomeButton';
import AnotherButton from '../const/AnotherButton'
import { SIZES } from '../const/Sizes';
import SignUpScreen from '../sign/SignUpScreen';




  const HeroSection = ({navigation})=> {
  // const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  
   const handleNavigation = () => {
    let isRegistered = false 
    if (isRegistered) {
 
      navigation.navigate('SupermarketScreen');
    } else {
      navigation.navigate('SupermarketScreen');
    }
  };
  const handleScreen = () => {
    let isRegistered = false 
    if (isRegistered) {
 
      navigation.navigate('SignUpScreen');
    } else {
      navigation.navigate('SignUpScreen');
    }
  };


  return (
  
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/theme/applogo.png')}
            style={styles.logo}
          />
      
            </View>
        
      

        <View style={styles.imageContainer}>
          <LottieView
            source={require('../../assets/theme/yyy.json')}
            autoPlay
            loop
            style={styles.animation}
          />
          <Text style={styles.title}>Scan Your Way To Checkout</Text>
          <Text style={styles.description}>
            Driving payments innovation with our smart solution
          </Text>
        </View>

        
        <WelcomeButton title="Scan Here"  onPress={()=> navigation.navigate('scan')}/>
        {/* <Text onPress={()=> navigation.navigate('ProductDisplay')}/> */}

        <View style={styles.qrCodeContainer}>
          <LottieView
            style={styles.qrcode}
            source={qrcode}
            autoPlay
            loop
          />
      
        </View>
       
    
    {/* <View style={styles.hhh}>
      <Text style={styles.text}>
        Already have an account?{' '}
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View> */}


   
     

     {/* <WelcomeButton title="Get started"  onPress={()=> navigation.navigate('SignUpScreen')} */}

     {/* <WelcomeButton
      title="Get started"  onPress={()=> navigation.navigate('SupermarketScreen')}

          style={{
             
        marginTop:100,
        top:15/100*(SIZES.width),
       

          }} */}
        {/* /> */}

        {/* <WelcomeButton
  title={isRegistered ? "Register Supermarket" : "Get Started"}
  onPress={() => {
    if (isRegistered) {
      // User is registered, navigate to the supermarket registration screen
      navigation.navigate('SupermarketScreen');
    } else {
      // User is not registered, navigate to the registration screen
      navigation.navigate('SignUpScreen');
    }
  }}
  style={{
    marginTop: 100,
    top: 15 / 100 * (SIZES.width),
  }}
/> */}
<Text style={styles.tet}>
      Are you a {" "}
      <Text style={styles.highlight}>ShopCartify user,</Text>
      Click to get started    
    </Text>
            


<WelcomeButton title= 'Get started' onPress={handleScreen}
    style={{
    marginTop: 100,
    top: 15 / 100 * (SIZES.width),
  }}

/>

<WelcomeButton title= 'Get started' onPress={handleNavigation} 
    style={{
    marginTop: 100,
    top: 18 / 100 * (SIZES.width),
  }}
  />  
        <Text style={styles.text}>
      Are you a {" "}
      <Text style={styles.highlight}>Supermarket Owner, </Text>
               Click to get started
    </Text>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: { 
    flex:1, 
    width: SIZES.width, 
    height: SIZES.height, 
    backgroundColor: COLORS.green,  
    paddingHorizontal: 3/100*(SIZES.width),
},
highlight: {
  fontWeight: 'bold',
  color:COLORS.yellow
  
},
  container: {
    alignItems: 'center',  
    justifyContent: "center",
    paddingBottom: 10/100*(SIZES.height),
  },
    text: {
      fontSize: 4/100*(SIZES.width), 
      alignItems: 'center', 
      fontWeight:'bold' ,
      top:-10/100*(SIZES.width),
      width:67/100*(SIZES.width),
      color:COLORS.light,
      
    },
    tet:{
      fontSize: 4/100*(SIZES.width), 
      alignItems: 'center', 
      fontWeight:'bold' ,
      top:33/100*(SIZES.width),
      width:67/100*(SIZES.width),
      color:COLORS.light,


    },
  header: {
    flexDirection: 'row',
    width: "100%",
    gap: 5,
    position: "relative",
    height: 12/100*(SIZES.height),
    alignItems: "center", 
    justifyContent: "space-between",
  },
  logo: {
    width: 45/100*(SIZES.width),
    aspectRatio: 2,
    resizeMode: "contain",
    position: "absolute",
    left:25/100*(SIZES.width)
  },
  buttonWrapper: {
    flexDirection: "row", 
    gap: 10, 
    position: "absolute", 
    left: 55/100*(SIZES.width), 
    bottom: 5/100*(SIZES.height)
  },
  openMenu: {
    padding: 10,
  },


  loginText:{
    color:COLORS.blue,
    fontSize:4/100*(SIZES.width),
    fontWeight:'bold',
    left:1/100*(SIZES.width),
    top:1/100*(SIZES.width),
    color:COLORS.red

  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  animation: {
    width: 90/100*(SIZES.width),
    height: 45/100*(SIZES.height),
  },
  title: {
    fontSize: 5/100*(SIZES.width),
    fontWeight: 'bold',
    marginTop: 10/100*(SIZES.width),
    color: COLORS.white,
  },
  description: {
    fontSize: 3.5/100*(SIZES.width),
    fontWeight:"bold",
    marginTop: 15,
    color: COLORS.yellow,
    alignItems:'center',

  },
  qrCodeContainer: {
    alignItems: 'center',
    marginTop: 10/100*(SIZES.width),
    backgroundColor:COLORS.light,
    width: 40/100*(SIZES.width),
    top:20/100*(SIZES.width),
    height:15/100*(SIZES.height),
    borderRadius:10
    
  },
  qrcode: {
   width: 40/100*(SIZES.width),
   height:25/100*(SIZES.height),
    top:-3.5/100*(SIZES.width) 
  },
  getStarted:{
  width:20/100*(SIZES.width)
  }
});

export default HeroSection;

