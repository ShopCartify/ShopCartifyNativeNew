import React, { useState, useCallback,useEffect } from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { SIZES } from '../const/Sizes';

import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width } = Dimensions.get('window');

const UserDashboard = () => {


  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  

  const userData = (user) =>{
    setEmail(user.email)
    setId(user.id)
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setUserName(user.userName)

  }

  const navigation = useNavigation();

  const fetchData =useCallback(async ()=>{
   
    
    let value = await AsyncStorage.getItem("user")
    let user = JSON.parse(value)

    userData(user)
    
   
    console.log("logged in user email ", email);

}, []);

useEffect(() => {
fetchData();
}, [fetchData]);

  return (
    <SafeAreaView style={styles.allwrap}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <Text style={styles.titext}>User dashboard</Text>

          </View>      
          <View style={styles.sectionsOne}>
            <Text style={styles.pro}>Information</Text>
            <View>
                <Link to="/scan" style={styles.inputs}>Scan</Link>
            </View>

            
            <View>
                <Link to="/SupermarketScreen" style={styles.inputs}>Own a Supermarket</Link>
            </View>

            <View>
                <Link to="/WelcomeScreen" style={styles.inputs}>Home button</Link>
            </View>

            <View>
                <Link to="/PersonalScreen" style={styles.inputs}>Personal information</Link>
            </View>

            <View>
                <Link to="/Items" style={styles.inputs}>View Cart</Link>
            </View>
            <View>
                <Link to="/WishList" style={styles.inputs}>View Wishlist</Link>
            </View>

             <View>
                <Link to="/CreateFamily" style={styles.inputs}>CreateFamily</Link>
            </View> 
            <View className="Image">
                <LottieView 
                source={require('../../assets/theme/GIRL.json')}
                autoPlay
                loop
                style={{width: 550/100*(SIZES.width), height: 80/100*(SIZES.width),right:40,
                }}
                />
            </View> 


          </View>
          <View style={styles.sectionsOne}>
           <Text> Welcome <Text style={styles.pro}> {email}</Text> </Text>
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
    marginLeft: 110,
  },
  inputs: {
    color: 'white',
    fontSize: 15,
    marginVertical: 9,
    paddingLeft: 20,
  },
  pro: {
    color: 'orange',
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

