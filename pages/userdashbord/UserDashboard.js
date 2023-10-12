import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const UserDashboard = () => {
  const admin = {
    name: 'Hemba Cephas',
    email: 'hembacephas@gmail.com',
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.allwrap}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <Text style={styles.titext}>User dashboard</Text>
          </View>
          <View style={styles.sectionsOne}>
            <Text style={styles.pro}>Information</Text>
            <View style={styles.linkContainer}>
              <FontAwesome name="barcode" size={30} color="white" />
              <Link to="/scan" style={styles.inputs}>
                Scan
              </Link>
            </View>
            <View style={styles.linkContainer}>
              <FontAwesome name="shopping-cart" size={30} color="white" />
              <Link to="/SupermarketScreen" style={styles.inputs}>
                Own a Supermarket
              </Link>
            </View>
            <View style={styles.linkContainer}>
              <FontAwesome name="home" size={30} color="white" />
              <Link to="/WelcomeScreen" style={styles.inputs}>
                Home button
              </Link>
            </View>
            <View style={styles.linkContainer}>
              <FontAwesome name="user" size={30} color="white" />
              <Link to="/PersonalScreen" style={styles.inputs}>
                Personal information
              </Link>
            </View>
            <View style={styles.linkContainer}>
              <FontAwesome name="shopping-basket" size={30} color="white" />
              <Link to="/Items" style={styles.inputs}>
                View Cart
              </Link>
            </View>
            <View style={styles.linkContainer}>
              <FontAwesome name="heart" size={30} color="white" />
              <Link to="/WishList" style={styles.inputs}>
                View Wishlist
              </Link>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <LottieView
              source={require('../../assets/theme/animation.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#4b4b88',
  },
  allwrap: {
    backgroundColor: '#4b4b88',
    flex: 1,
  },
  title: {
    marginTop: 45,
    marginBottom: 15,
  },
  titext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 60,
  },
  inputs: {
    color: 'white',
    fontSize: 15,
    marginVertical: 9,
    paddingLeft: 20,
  },
  pro: {
    color: 'grey',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  sectionsOne: {
    marginBottom: 100,
    backgroundColor: '#43437a',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  animation: {
    width: 550,
    height: 350,
    top: 0,
    right: 30,
  },
});

export default UserDashboard;

