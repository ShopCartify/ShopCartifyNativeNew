import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import Button from './const/Button'
import COLORS from './const/Colors'

const HomeScreen = ({navigation}) => {
  const [userDetails,setUserDetails] = React.useState();
  React.useEffect(()=>{
     getUserDetails()
  }, []);
  const getUserDetails = async () =>{
    const userData = await AsyncStorage.getItem('user')
    if(userData){
      setUserDetails(JSON.parse(userData));
    }
    }
    const logout =()=>{
      AsyncStorage.setItem(
        'user',
        JSON.stringify({...userDetails,loggedIn:false}))
    navigation.navigate('LoginScreen')
  }
  return (
    <View 
    style={{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
      backgroundColor:COLORS.green
    }}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>
      Welcome{userDetails?.fullname}
      </Text>
      <Button title='Logout' onPress={logout}/>
    </View>
  )
}

export default HomeScreen