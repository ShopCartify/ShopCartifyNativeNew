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
        height: 5.5/100*(SIZES.height),
        width:  18/100*(SIZES.width),
        padding: 1/100*(SIZES.width),
        top:15,
        borderRadius:10,
        // right:100,
        backgroundColor:COLORS.yellow ,
        justifyContent:'center',
        alignItems:'center'
        }}>
       <Text style={{color:COLORS.white, fontWeight: 'bold',fontSize: 4.6/100*(SIZES.width)}}>
       {title}
       </Text>
        </TouchableOpacity>
        
    );
};
export default Button