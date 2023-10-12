<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet, ActivityIndicator, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SIZES } from '../const/Sizes';

const SupermarketAdmin = () => {
  const [loading, setLoading] = useState(true);

=======
import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import {FontAwesome} from 'react-native-vector-icons/FontAwesome';


const SupermarketAdmin = () => {

  const [loading, setLoading] = useState(true);
  
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.allwrap}>
      <ScrollView>
<<<<<<< HEAD
      <Image
            source={require('../../assets/theme/applogo.png')}
          style={{left:25/100*(SIZES.width), 
          resizeMode: "contain",
          position: "absolute",
          aspectRatio: 2,
          width: 45/100*(SIZES.width),
          top:-2/100*(SIZES.width)
          }}
          />
        <Text style={styles.titext}>Supermarket Admin</Text>
=======
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="orange" />
          </View>
<<<<<<< HEAD
        ) :
         (
          <View style={styles.wrapper}>
            <View style={styles.sectionsOne}>
=======
        ) : (
          <View style={styles.wrapper}>
            <View>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              <Text style={styles.pro}>Products</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('PScreen')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="search" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Search Products</Text>
                </View>
              </TouchableOpacity>

=======
                <FontAwesome name="search" size={30} color="white" />
                <Text style={styles.inputText}>Search Products</Text>
              </TouchableOpacity>
              
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ViewAllProducts')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="list" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>View All Products</Text>
                </View>
=======
                <FontAwesome name="list" size={30} color="white" />
                <Text style={styles.inputText}>View All Products</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inputa}
                onPress={() => navigation.navigate('AddProductScreen')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="plus" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Add Products</Text>
                </View>
=======
                <FontAwesome name="plus" size={30} color="white" />
                <Text style={styles.inputText}>Add Products</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('RemoveProducts')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="remove" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Remove Products</Text>
                </View>
=======
                <FontAwesome name="remove" size={30} color="white" />
                <Text style={styles.inputText}>Remove Products</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('UpdateProducts')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="edit" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Update Products</Text>
                </View>
=======
                <FontAwesome name="edit" size={30} color="white" />
                <Text style={styles.inputText}>Update Products</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>Payments</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ConfirmPayment')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="check" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Confirm/Approve payment</Text>
                </View>
=======
                <FontAwesome name="check" size={30} color="white" />
                <Text style={styles.inputText}>Confirm/Approve payment</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>History</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('PurchaseHistory')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="history" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Purchase History</Text>
                </View>
=======
                <FontAwesome name="history" size={30} color="white" />
                <Text style={styles.inputText}>Purchase History</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('TransactionHistory')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="history" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Transaction History</Text>
                </View>
=======
                <FontAwesome name="history" size={30} color="white" />
                <Text style={styles.inputText}>Transaction History</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>Admin</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('InviteAdmin')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="user-plus" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Invite Admin</Text>
                </View>
=======
                <FontAwesome name="user-plus" size={30} color="white" />
                <Text style={styles.inputText}>Invite Admin</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('AllSupermarketAdmins')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="users" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>All supermarket admins</Text>
                </View>
=======
                <FontAwesome name="users" size={30} color="white" />
                <Text style={styles.inputText}>All supermarket admins</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('AllCheckoutAdmins')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="users" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>All checkout admins</Text>
                </View>
=======
                <FontAwesome name="users" size={30} color="white" />
                <Text style={styles.inputText}>All checkout admins</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
            </View>

            <View style={styles.sectionLast}>
              <Text style={styles.pro}>Reports</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ViewNotifications')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="bell" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>View notifications</Text>
                </View>
=======
                <FontAwesome name="bell" size={30} color="white" />
                <Text style={styles.inputText}>View notifications</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('SendReport')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="send" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Send report</Text>
                </View>
=======
                <FontAwesome name="send" size={30} color="white" />
                <Text style={styles.inputText}>Send report</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('RespondToReports')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="comments" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Respond to reports</Text>
                </View>
=======
                <FontAwesome name="comments" size={30} color="white" />
                <Text style={styles.inputText}>Respond to reports</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('Logout')}
              >
<<<<<<< HEAD
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="sign-out" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Log out</Text>
                </View>
=======
                <FontAwesome name="sign-out" size={30} color="white" />
                <Text style={styles.inputText}>Log out</Text>
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  

=======
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
<<<<<<< HEAD
    marginRight: 4/100*(SIZES.width), 
=======
    marginRight: 10,
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
  },

  allwrap:{
    backgroundColor:'#4b4b88',
  },

  loader: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'center',
    alignItems: 'center',
=======
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#4b4b88',
    paddingTop:350,
    paddingBottom:500,
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
  },

  title:{
    marginTop: 4/100*(SIZES.width),
    marginBottom: 15/100*(SIZES.width),
  },

  titext:{
    fontSize: 5/100*(SIZES.width),
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25/100*(SIZES.width),
    marginBottom: 10/100*(SIZES.width), 
    textAlign: 'center',
  },

  inputs: {
    color: 'white',
<<<<<<< HEAD
    // fontSize: 15/100*(SIZES.width),
    marginVertical: 9,
    paddingLeft: 20,
  },
  inputText:{
    color: 'white'
=======
    fontSize: 15,
    marginVertical: 9,
    paddingLeft: 20,
>>>>>>> 6c1cf470dd9a577e88abf2cc98cee1f39a0c00f3
  },

  inputa: {
    color: 'white',
    fontSize: 15,
    marginVertical: 9,
    paddingLeft: 20,

  },
  pro:{
    color: 'orange',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  sectionsOne:{
    borderWidth: 4,
    marginRight:15,
    marginLeft: 15,
    borderRadius: 13,
    borderColor: 'transparent',
    backgroundColor: '#43437a',
  },

  sectionsTwo:{
    borderWidth:4,
    marginRight:15,
    marginLeft: 15,
    borderRadius: 13,
    borderColor: 'transparent',
    backgroundColor: '#43437a',
    marginTop: 10,

},

  sections:{
    marginTop: 10,
    borderWidth:4,
    marginRight:15,
    marginLeft: 15,
    borderRadius: 13,
    borderColor: 'transparent',
    backgroundColor: '#43437a',
  },

  sectionLast:{
    marginTop: 10,
    marginBottom:30,
    borderWidth:4,
    marginRight:15,
    marginLeft: 15,
    borderRadius: 13,
    borderColor: 'transparent',
    backgroundColor: '#43437a',
  },

});

export default SupermarketAdmin;