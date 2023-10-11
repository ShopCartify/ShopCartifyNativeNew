import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

const CheckoutAdmin = () => {
  
  const user = {
    profileName: 'Admin Cephas',
    email: 'ayodeji@gmail.com',
    
  };

  const navigation = useNavigation;

  return (
    <SafeAreaView style={checky.biggy}>
      <ScrollView>
          <View style={checky.cont}>
            <View style = {checky.header}>
                <Text style={checky.txt}>Checkout Admin</Text>
            </View> 

            <View style={checky.sect}>  
                <Text style={checky.pro}>Products</Text> 

                <View>
                    <Link to="/" style={checky.inputs}>Search products</Link>
                </View>

                <View>
                    <Link to="/" style={checky.inputs}>View products</Link>
                </View>
            </View>          

          <View style={checky.sect}>
            <Text style={checky.pro}>Reports</Text>
            <View>
                <Link to="/" style={checky.inputs}>View notifications</Link>
            </View>

            <View>
                <Link to="/" style={checky.inputs}>Send Report</Link>
            </View>          

            <View>
                <Link to="/" style={checky.inputs}>Respond to reports</Link>
            </View>

            <View>
                <Link to="/" style={checky.inputs}>Log out</Link>
            </View>
          </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const checky = StyleSheet.create({
  biggy:{
    backgroundColor: '#4b4b88',
  },

  cont: {
    // padding: 30,
    backgroundColor: '#4b4b88',
    // marginTop: 70,
  },

  header:{
    
    marginTop: 45,
    marginBottom: 15,
  },

  txt:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },

  inputs: {
    color: 'white',
    fontSize: 14,
    // fontWeight: '',
    marginVertical: 8,
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

  sect:{
    marginTop: 25,
    backgroundColor: '#43437a',
    // backgroundColor:'white',
  },

});

export default CheckoutAdmin;
