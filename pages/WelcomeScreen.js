import { View ,Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import COLORS from './const/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import LottieView from 'lottie-react-native';
// import Button from './const/Button'
import Butt from './const/Butt'







const WelcomeScreen = ({navigation}) => {
    // const navigation = useNavigation( WelcomeScreen);
    return(
        <SafeAreaView className="flex-1" style={{backgroundColor: COLORS.green,paddingTop: '200%',height:900}}>
        <ScrollView
         contentContainerStyle={{
            paddingHorizontal:20,
            }}>
              
        <View>
            <Text className="fff" 
            style={{color: COLORS.white,fontSize:37,alignItems:'center',top:130,left:50}}>
                Let's Get Started!
            </Text>
            <View className="Image">
                <LottieView 
                source={require('../assets/theme/animation.json')}
                autoPlay
                loop
                style={{width: 350, height: 350,top:120,left:10,
                }}
                />
            </View>

            <Butt title="Sign Up" onPress={()=> navigation.navigate('SignUpScreen')}/>
            
          </View>
            <Text style={{top:336,color:COLORS.white,left:75}}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                <Text style={{top:317,left:250,fontSize:15,color:COLORS.yellow}}>Login</Text>
            </TouchableOpacity>


   
 </ScrollView>
 </SafeAreaView>
    )
}

export default WelcomeScreen;  