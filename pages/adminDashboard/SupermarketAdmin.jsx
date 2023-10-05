import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
// import Line from './Line';
import { useNavigation } from '@react-navigation/native';
// import adminStyles from './adminStyles';

const SupermarketAdmin = () => {
  const admin ={
    name: 'Hemba Cephas',
    email: 'hembacephas@gmail.com',
  }

  const navigation = useNavigation;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>

          <View style = {styles.title}>
            <Text style={styles.titext}>Supermarket Admin</Text>
          </View>      

          <View style={styles.sectionsOne}>
            <Text style={styles.pro}>Products</Text>
            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Search product</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>View all products</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Add products</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Remove products</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Update products</Text>
            </View>

          </View>

          <View style={styles.sectionsTwo}>
            <Text style={styles.pro}>Payments</Text>
            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Confirm/Approve payment</Text>
            </View>
          </View>

          <View style={styles.sections}>
            <Text style={styles.pro}>History</Text>
            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Purchase history</Text>
            </View>  

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Transaction history</Text>
            </View>          
          </View>     

          <View style={styles.sections}>
            <Text style={styles.pro}>Admin</Text>
            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Invite admin</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>All supermarket admins</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>All checkout admins</Text>
            </View>
          </View>       

          <View style={styles.sections}>
            <Text style={styles.pro}>Reports</Text>
            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>View notifications</Text>
            </View>

            <View onPress={()=>navigation.navigate('')}>
                <Text style={styles.inputs}>Send Report</Text>
            </View>          

            <View onPress={()=>navigation.navigate('')}>
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
    backgroundColor: '#4b4b88',
    // marginTop: 70,
  },

  title:{
    
    marginTop: 45,
    marginBottom: 15,
  },

  titext:{
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },

  inputs: {
    color: 'white',
    fontSize: 15,
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

  sectionsOne:{
        backgroundColor: '#43437a',
  },

  sectionsTwo:{
    backgroundColor: '#43437a',
    marginTop: 10,

},

  sections:{
    marginTop: 25,
    backgroundColor: '#43437a',
    // backgroundColor:'white',
  },

});

export default SupermarketAdmin;
