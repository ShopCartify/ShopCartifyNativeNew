import React from 'react'
import {  NavigationContainer} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './pages/homescreen/HomeScreen';
import LoginScreen from './pages/login/LoginScreen';
import WelcomeScreen from './pages/welcome/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from './pages/sign/SignUpScreen';
import Loader from './pages/const/Loader';
import PersonalScreen from './pages/personal/personalScreen'
import SupermarketScreen from './pages/supermarket/SupermarketScreen'
import DashHome from './pages/adminDashboard/DashHome';
import CheckoutAdmin from './pages/adminDashboard/CheckoutAdmin';
import SignUps from './pages/adminDashboard/adminSign';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SupermarketAdmin from './pages/adminDashboard/SupermarketAdmin';
import Items from './pages/cart/Items';
import AddProduct from './pages/addproduct/AddproductScreen';
import CodeScanner from './pages/scan/Scan';


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
    <SafeAreaProvider>
    <NavigationContainer>
       {initialRouteName === '' ? (
        <Loader visible={true} />
      ) : ( 
         <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}

          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> 
          {/* <Stack.Screen name="PersonalScreen" component={PersonalScreen} /> */}
          {/* <Stack.Screen name="scan" component={CodeScanner} /> */}

          {/* <Stack.Screen name="signn" component={SignUps} /> */}
          {/* <Stack.Screen name="SupermarketScreen" component={SupermarketAdmin} /> */}
          {/* <Stack.Screen name="CheckoutScreen" component={CheckoutAdmin} /> */}

          {/* <Stack.Screen name="signs" component={SignUps} /> */}
          <Stack.Screen name="SupermarketScreen" component={SupermarketAdmin} />
          <Stack.Screen name="CheckoutScreen" component={CheckoutAdmin} />
          {/* <Stack.Screen name="ItemScreen" component={Items} /> */}

          {/* <Stack.Screen name="AdminScreen" component={DashHome} /> */}
          {/* <Stack.Screen name="SupermarketScreen" component={SupermarketScreen} /> */}

          <Stack.Screen name="AddproductScreen" component={AddProduct} />

        </Stack.Navigator>
      )}  
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
