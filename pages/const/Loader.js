import React from "react";
import { ActivityIndicator, View, useWindowDimensions,StyleSheet,Text } from "react-native";
import COLORS from "./Colors";


const Loader = ({visible = false})=>{
    const {height,width}= useWindowDimensions();

    return(
         visible && (
         <View style={[style.container,{height,width}]}>
            <View style={style.Loader}>
                <ActivityIndicator size="large" color={COLORS.yellow} alignItem="center" />
                {/* <Text style={{marginRight:10,fontSize:16}}></Text> */}
            </View>
         </View>
         )
    )
};

const style = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
    },
    // Loader:{
    //     height:10,
    //     backgroundColor:COLORS.white,
    //     marginHorizontal:50,
    //     width: '80%',
    //     height: 100,
    //     borderRadius: 5,
    //     // flexDirection:'row',
    //     alignItem:'center',
    //     paddingHorizontal:20,
    // }
})
export default Loader;