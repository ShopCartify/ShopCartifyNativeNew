import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, SafeAreaView, StyleSheet, ActivityIndicator, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SIZES } from '../const/Sizes';

const SupermarketAdmin = () => {
  const [loading, setLoading] = useState(true);

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
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="orange" />
          </View>
        ) :
         (
          <View style={styles.wrapper}>
            <View style={styles.sectionsOne}>
              <Text style={styles.pro}>Products</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('PScreen')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="search" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Search Products</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ViewAllProducts')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="list" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>View All Products</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inputa}
                onPress={() => navigation.navigate('AddProductScreen')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="plus" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Add Products</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('RemoveProducts')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="remove" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Remove Products</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('UpdateProducts')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="edit" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Update Products</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>Payments</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ConfirmPayment')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="check" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Confirm/Approve payment</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>History</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('PurchaseHistory')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="history" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Purchase History</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('TransactionHistory')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="history" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Transaction History</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sections}>
              <Text style={styles.pro}>Admin</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('InviteAdmin')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="user-plus" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Invite Admin</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('AllSupermarketAdmins')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="users" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>All supermarket admins</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('AllCheckoutAdmins')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="users" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>All checkout admins</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionLast}>
              <Text style={styles.pro}>Reports</Text>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('ViewNotifications')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="bell" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>View notifications</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('SendReport')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="send" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Send report</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('RespondToReports')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="comments" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Respond to reports</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inputs}
                onPress={() => navigation.navigate('Logout')}
              >
                <View style={styles.iconTextContainer}>
                  <FontAwesome name="sign-out" size={15} color="white" style={styles.icon} />
                  <Text style={styles.inputText}>Log out</Text>
                </View>
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
    marginRight: 4/100*(SIZES.width), 
  },

  allwrap:{
    backgroundColor:'#4b4b88',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    // fontSize: 15/100*(SIZES.width),
    marginVertical: 9,
    paddingLeft: 20,
  },
  inputText:{
    color: 'white'
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
