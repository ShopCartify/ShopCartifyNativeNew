import React from "react";
import { Text, TouchableOpacity} from "react-native";
import COLORS from "./Colors";
import { SIZES } from "./Sizes";

const Button = ({title,onPress = () => {}}) => {
    return(
    <TouchableOpacity
    activeOpacity={0.7} 
    onPress={onPress}
     style ={{
        height:6/100*(SIZES.height),
        width:87/100*(SIZES.width),
        top:10,
        borderRadius:10,
        backgroundColor:COLORS.yellow ,
        justifyContent:'center',
        alignItems:'center'
        }}>
       <Text style={{color:COLORS.white, fontWeight: 'bold',fontSize:18}}>
       {title}
       </Text>
        </TouchableOpacity>
        
    );
};
export default Button