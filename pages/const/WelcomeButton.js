import React from "react";
import { Text, TouchableOpacity} from "react-native";
import COLORS from "./Colors";
import { SIZES } from "./Sizes";
const Button = ({title,onPress = () => {}, style}) => {
    return(
    <TouchableOpacity
    activeOpacity={0.7} 
    onPress={onPress}    
     style ={[{
        height:6/100*(SIZES.height),
        width:60/100*(SIZES.width),
        top:10/100*(SIZES.width),
        borderRadius:10,
        // right:100,
        backgroundColor:COLORS.yellow ,
        justifyContent:'center',
        alignItems:'center',
        }, style]}>        
       <Text style={{color:COLORS.white, fontWeight: 'bold',fontSize:4/100*(SIZES.width)}}>
       {title}
       </Text>
        </TouchableOpacity>
        
    );
};
export default Button