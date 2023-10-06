import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';

const SupermarketAdmin = () => {
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
            <Text style={styles.titext}>Supermarket Admin</Text>
          </View>      
          <View style={styles.sectionsOne}>
            <Text style={styles.pro}>Products</Text>
            <View>
                <Text style={styles.inputs}>Search Products</Text>
            </View>

            <View>
                <Text style={styles.inputs}>View All Products</Text>
            </View>

            <View>
                <Link to="/AddproductScreen" style={styles.inputs}>Add Products</Link>
            </View>

            <View>
                <Text style={styles.inputs}>Remove Products</Text>
            </View>

            <View>
                <Text style={styles.inputs}>Update Products</Text>
            </View>

          </View>

          <View style={styles.sectionsTwo}>
            <Text style={styles.pro}>Payments</Text>
            <View>
              <Text style={styles.inputs}>Confirm/Approve payment</Text>
            </View>
          </View>

          <View style={styles.sections}>
            <Text style={styles.pro}>History</Text>
            <View>
              <Text style={styles.inputs}>Purchase history</Text>
            </View>  

            <View>
              <Text style={styles.inputs}>Transaction history</Text>
            </View>          
          </View>     

          <View style={styles.sections}>
            <Text style={styles.pro}>Admin</Text>
            <View>
              <Text style={styles.inputs}>Invite admin</Text>
            </View>

            <View>
              <Text style={styles.inputs}>All supermarket admins</Text>
            </View>

            <View>
              <Text style={styles.inputs}>All checkout admins</Text>
            </View>
          </View>       

          <View style={styles.sections}>
            <Text style={styles.pro}>Reports</Text>
            <View>
                <Text style={styles.inputs}>View notifications</Text>
            </View>

            <View>
              <Text style={styles.inputs}>Send report</Text>
            </View>          

            <View>
                <Text style={styles.inputs}>Respond to reports</Text>
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
