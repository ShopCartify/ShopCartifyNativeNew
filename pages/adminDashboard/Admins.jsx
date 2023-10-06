// import { View, Text } from "react-native"

// export default function Admins(){
//     return(
//         <View>
//             <Text>helo world</Text>
//         </View>
//     )
// }

import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
// import Line from './Line';
import { useNavigation, Link } from '@react-navigation/native';
// import adminStyles from './adminStyles';

const Admins = () => {
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
                <Link>Search Products</Link>
            </View>

            <View>
                <Link>View All Products</Link>
            </View>

            <View>
                <Link to="/AddproductScreen" style={styles.inputs}>Add Products</Link>
            </View>

            <View>
                <Link>Remove Products</Link>
            </View>

            <View>
                <Link>Update Products</Link>
            </View>

          </View>

          <View style={styles.sectionsTwo}>
            <Text style={styles.pro}>Payments</Text>
            <View>
              <Link>Confirm/Approve payment</Link>
            </View>
          </View>

          <View style={styles.sections}>
            <Text style={styles.pro}>History</Text>
            <View>
              <Link>Purchase history</Link>
            </View>  

            <View>
              <Link>Transaction history</Link>
            </View>          
          </View>     

          <View style={styles.sections}>
            <Text style={styles.pro}>Admin</Text>
            <View>
              <Link>Invite admin</Link>
            </View>

            <View>
              <Link>All supermarket admins</Link>
            </View>

            <View>
              <Link>All checkout admins</Link>
            </View>
          </View>       

          <View style={styles.sections}>
            <Text style={styles.pro}>Reports</Text>
            <View>
                <Link>View notifications</Link>
            </View>

            <View>
              <Link>Send report</Link>
            </View>          

            <View>
                <Link>Respond to reports</Link>
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

export default Admins;
