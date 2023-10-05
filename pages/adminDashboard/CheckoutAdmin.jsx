import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet} from 'react-native';
// import Line from './Line';
import { useNavigation } from '@react-navigation/native';

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
                    <Text style={checky.inputs}>Search products</Text>
                </View>

                <View>
                    <Text style={checky.inputs}>View products</Text>
                </View>
            </View>          

          <View style={checky.sect}>
            <Text style={checky.pro}>Reports</Text>
            <View>
                <Text style={checky.inputs}>View notifications</Text>
            </View>

            <View>
                <Text style={checky.inputs}>Send Report</Text>
            </View>          

            <View>
                <Text style={checky.inputs}>Respond to reports</Text>
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
