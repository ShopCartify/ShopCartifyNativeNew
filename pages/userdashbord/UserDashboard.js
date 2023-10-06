import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
// import Line from './Line';
import { useNavigation, Link } from '@react-navigation/native';
// import adminStyles from './adminStyles';
import LottieView from 'lottie-react-native';

const UserDashboard = () => {
  const admin ={
    name: 'Hemba Cephas',
    email: 'hembacephas@gmail.com',
  }

  const navigation = useNavigation;

  return (
    <SafeAreaView style={styles.allwrap}>
      <ScrollView>
        <View style={styles.wrapper}>

          <View style = {styles.title}>
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
                <Link to="/" style={styles.inputs}>Family</Link>
            </View>
            <View className="Image">
                <LottieView 
                source={require('../../assets/theme/animation.json')}
                autoPlay
                loop
                style={{width: 550, height: 350,top:0,right:30,
                }}
                />
            </View>

          </View>
   
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // padding: 30,
    // width: 900,
    backgroundColor: '#4b4b88',
    // marginTop: 70,
  },

  allwrap:{
    width:900,
    backgroundColor:'#4b4b88',
  },

  title:{
    marginTop: 45,
    marginBottom: 15,
  },

  titext:{
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
    // fontWeight: '',
    marginVertical: 9,
    paddingLeft: 20,
    // backgroundColor: '#7978B5',
  },
  pro:{
    color: 'grey',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  sectionsOne:{
    marginBottom:100,
        backgroundColor: '#43437a',
        
  },
});

export default UserDashboard;
