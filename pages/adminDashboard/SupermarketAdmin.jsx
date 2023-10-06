import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

const SupermarketAdmin = () => {
  const admin ={
    name: 'Hemba Cephas',
    email: 'hembacephas@gmail.com',
  }

  // const navigation = useNavigation;

  return (
    <SafeAreaView style={styles.allwrap}>
      <ScrollView>
        <View style={styles.wrapper}>

          <View style = {styles.title}>
            <Text style={styles.titext}>Supermarket Admin</Text>
          </View>      
          <View style={styles.sectionsOne}>
            <Text style={styles.pro}>Products</Text>
            <View>
                <Text>Search Products</Text>
            </View>

            <View>
                <Text>View All Products</Text>
            </View>

            <View>
                <Link to="/AddproductScreen" style={styles.inputs}>Add Products</Link>
            </View>

            <View>
                <Text>Remove Products</Text>
            </View>

            <View>
                <Text>Update Products</Text>
            </View>

          </View>

          <View style={styles.sectionsTwo}>
            <Text style={styles.pro}>Payments</Text>
            <View>
              <Text>Confirm/Approve payment</Text>
            </View>
          </View>

          <View style={styles.sections}>
            <Text style={styles.pro}>History</Text>
            <View>
              <Text>Purchase history</Text>
            </View>  

            <View>
              <Text>Transaction history</Text>
            </View>          
          </View>     

          <View style={styles.sections}>
            <Text style={styles.pro}>Admin</Text>
            <View>
              <Text>Invite admin</Text>
            </View>

            <View>
              <Text>All supermarket admins</Text>
            </View>

            <View>
              <Text>All checkout admins</Text>
            </View>
          </View>       

          <View style={styles.sections}>
            <Text style={styles.pro}>Reports</Text>
            <View>
                <Text>View notifications</Text>
            </View>

            <View>
              <Text>Send report</Text>
            </View>          

            <View>
                <Text>Respond to reports</Text>
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
    marginBottom:20,
        backgroundColor: '#43437a',
  },

  sectionsTwo:{
    backgroundColor: '#43437a',
    marginTop: 10,

},

  sections:{
    marginTop: 30,
    backgroundColor: '#43437a',
    // backgroundColor:'white',
  },

});

export default SupermarketAdmin;
