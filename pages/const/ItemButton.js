
import React from "react";
import { Text, TouchableOpacity} from "react-native";
import COLORS from "./Colors";
const AddButton = ({title,onPress = () => {}}) => {
    return(
    <TouchableOpacity
    activeOpacity={0.7} 
    onPress={onPress}
     style ={{
        // display:'flex',
        height:55,
        width:'100%',
        top:100,
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
export default AddButton
