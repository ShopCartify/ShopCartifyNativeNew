import React from "react";
import { Text, TouchableOpacity} from "react-native";
import COLORS from "./Colors";
import { SIZES } from "./Sizes";

const SignButton = ({title,onPress = () => {}}) => {
    return(
    <TouchableOpacity
    activeOpacity={0.7} 
    onPress={onPress}
     style ={{
        height:6/100*(SIZES.height),
        width:87/100*(SIZES.width),
        top:12/100*(SIZES.width),
        borderRadius:2/100*(SIZES.width),
        backgroundColor:COLORS.yellow ,
        justifyContent:'center',
        alignItems:'center'
        }}>
       <Text style={{color:COLORS.white, fontWeight: 'bold',fontSize:5/100*(SIZES.width)}}>
       {title}
       </Text>
        </TouchableOpacity>
        
    );
};
export default SignButton