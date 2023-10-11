import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import {FontAwesome} from 'react-native-vector-icons/FontAwesome';


const SupermarketAdmin = () => {

  const [loading, setLoading] = useState(true);

  const admin ={
    name: 'Hemba Cephas',
    email: 'hembacephas@gmail.com',
  }
  
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
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="orange" />
          </View>
        ) : (
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.pro}>Products</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('PScreen')}
              >
                <FontAwesome name="search" size={30} color="white" />
                <Text style={styles.inputText}>Search Products</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ViewAllProducts')}
              >
                <FontAwesome name="list" size={30} color="white" />
                <Text style={styles.inputText}>View All Products</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inputa}
                onPress={() => navigation.navigate('AddProductScreen')}
              >
                <FontAwesome name="plus" size={30} color="white" />
                <Text style={styles.inputText}>Add Products</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('RemoveProducts')}
              >
                <FontAwesome name="remove" size={30} color="white" />
                <Text style={styles.inputText}>Remove Products</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('UpdateProducts')}
              >
                <FontAwesome name="edit" size={30} color="white" />
                <Text style={styles.inputText}>Update Products</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>Payments</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ConfirmPayment')}
              >
                <FontAwesome name="check" size={30} color="white" />
                <Text style={styles.inputText}>Confirm/Approve payment</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>History</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('PurchaseHistory')}
              >
                <FontAwesome name="history" size={30} color="white" />
                <Text style={styles.inputText}>Purchase History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('TransactionHistory')}
              >
                <FontAwesome name="history" size={30} color="white" />
                <Text style={styles.inputText}>Transaction History</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>Admin</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('InviteAdmin')}
              >
                <FontAwesome name="user-plus" size={30} color="white" />
                <Text style={styles.inputText}>Invite Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('AllSupermarketAdmins')}
              >
                <FontAwesome name="users" size={30} color="white" />
                <Text style={styles.inputText}>All supermarket admins</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('AllCheckoutAdmins')}
              >
                <FontAwesome name="users" size={30} color="white" />
                <Text style={styles.inputText}>All checkout admins</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionLast}>
              <Text style={styles.pro}>Reports</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ViewNotifications')}
              >
                <FontAwesome name="bell" size={30} color="white" />
                <Text style={styles.inputText}>View notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('SendReport')}
              >
                <FontAwesome name="send" size={30} color="white" />
                <Text style={styles.inputText}>Send report</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('RespondToReports')}
              >
                <FontAwesome name="comments" size={30} color="white" />
                <Text style={styles.inputText}>Respond to reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('Logout')}
              >
                <FontAwesome name="sign-out" size={30} color="white" />
                <Text style={styles.inputText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },

  allwrap:{
    backgroundColor:'#4b4b88',
  },

  loader: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#4b4b88',
    paddingTop:350,
    paddingBottom:500,
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
    textAlign: 'center',
  },

  inputs: {
    color: 'white',
    fontSize: 15,
    marginVertical: 9,
    paddingLeft: 20,
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