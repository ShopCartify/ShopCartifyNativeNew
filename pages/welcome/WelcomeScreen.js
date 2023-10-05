import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import qrcode from '../../assets/theme/qrcode.json';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../const/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeButton from '../const/WelcomeButton';

const HeroSection = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.green, flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/theme/applogo.png')}
            style={styles.logo}
          />
          <TouchableOpacity style={styles.openMenu} onPress={toggleMenu}>
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
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.imageContainer}>
          <LottieView
            source={require('../../assets/theme/animation.json')}
            autoPlay
            loop
            style={styles.animation}
          />
          <Text style={styles.title}>Scan Your Way To Checkout</Text>
          <Text style={styles.description}>
            Driving payments innovation with our smart solution
          </Text>
        </View>
        <WelcomeButton title="Scan Here" />

        <View style={styles.qrCodeContainer}>
          <LottieView
            style={styles.qrcode}
            source={qrcode}
            autoPlay
            loop
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: COLORS.green,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 190,
    height: 100,
  },
  openMenu: {
    padding: 10,
  },
  menuText: {
    // fontSize: 10,
    color: COLORS.white,
    left:80,
    width:100,
    fontWeight:'900'
  },
  menu: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: COLORS.green,
    padding: 10,
  },
  closeMenu: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  animation: {
    width: 410,
    height: 450,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -10,
    color: COLORS.white,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    color: COLORS.yellow,
  },
  qrCodeContainer: {
    // alignItems: 'center',
    marginTop: 35,
    backgroundColor:COLORS.light,
    width:200,
    //     top:-25,
        height:130,
        borderRadius:10
    
  },
  qrcode: {
    width: 200,
    height: 200,
    top:-18
  },
});

export default HeroSection;

