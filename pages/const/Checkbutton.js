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
        height:55,
        width:70/100*(SIZES.width),
        // top:-1/100*(SIZES.width),
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