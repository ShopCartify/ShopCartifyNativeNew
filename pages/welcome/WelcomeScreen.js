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




  const HeroSection = ({navigation})=> {
  // const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/theme/applogo.png')}
            style={styles.logo}
          />
          {/* <View style={styles.buttonWrapper}>
          <AnotherButton  title="Signup"  onPress={()=> navigation.navigate('SignUpScreen')}/>
          <AnotherButton title="Login"  onPress={()=> navigation.navigate('LoginScreen')}/>          
          </View> */}
         


          {/* <TouchableOpacity style={styles.openMenu} onPress={toggleMenu}>
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>
          {isMenuOpen && (
            <View style={styles.menu}>
              <TouchableOpacity style={styles.closeMenu} onPress={toggleMenu}>
                <Text style={styles.menuText}>✕</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Contact us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Create account</Text>
              </TouchableOpacity> */}
            </View>
          {/* )} */}
      

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
        <View style={styles.hhh}>
        <Text  style={{top:-26/100*(SIZES.width),fontSize:4/100*(SIZES.width),color:COLORS.light}}>
      Already have an account?{' '}
      <TouchableOpacity>
        <Text style={{fontSize:4/100*(SIZES.width),color:COLORS.blue,top:1/100*(SIZES.width)}}>
          Login
        </Text>
      </TouchableOpacity>
    </Text>
    </View>
     
     <WelcomeButton title="Get started"  onPress={()=> navigation.navigate('')}
          style={{
             
        marginTop:100,
        top:15/100*(SIZES.width),
       

          }}
        />
        {/* <Text style={styles.text}>
          Do you know that you can become a supermarket owner,
          you can register to get started .
        </Text> */}
  
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
      top:-18/100*(SIZES.width),
      width:80/100*(SIZES.width),
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

  hhh:{
    top:2/100*(SIZES.width)

  },
  menuText: {
    // fontSize: 10,
    // color: COLORS.white,
    // left:80,
    // width:100,
    // fontWeight:'900'
  },
  // menu: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  //   backgroundColor: COLORS.green,
  //   padding: 10,
  // },
  // closeMenu: {
  //   alignSelf: 'flex-end',
  //   padding: 10,
  // },
  // menuItem: {
  //   paddingVertical: 10,
  // },
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
    top:-6/100*(SIZES.width) 
  },
  getStarted:{
  width:20/100*(SIZES.width)
  }
});

export default HeroSection;

