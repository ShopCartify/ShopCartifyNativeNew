import React from 'react'
import {  NavigationContainer} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from './pages/SignUpScreen';
import Loader from './pages/const/Loader';


const Stack = createStackNavigator();

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');
  React.useEffect(() => {
     setTimeout(authUser, 2000);
  }, []);
    const authUser = async () => {
      try {
        let userData = await AsyncStorage.getItem('user');
        if (userData) {
          userData = JSON.parse(userData);
          if (userData?.loggedIn) {
            setInitialRouteName('WelcomeScreen');
          } else {
            setInitialRouteName('LoginScreen');
          }
        } else {
          setInitialRouteName('SignUpScreen');
        }
      } catch (error) {
        setInitialRouteName('SignUpScreen');
      }
    };
  return (
    <NavigationContainer>
      {initialRouteName === '' ? (
        <Loader visible={true} />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
