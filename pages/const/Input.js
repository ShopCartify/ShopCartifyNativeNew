// import React from "react";
// import { View,Text,StyleSheet } from "react-native";
// import COLORS from "./Colors";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { TextInput } from "react-native-gesture-handler";
// const Input = ({
//     label,
//     iconName,
//     error,
//     password,
//     onfocus = () => {}, 
//     ...Props 
// })=> {
//     const [isFocused, setIsFocused ] = React.useState(false)
//     const [hidePassword,setHidePassword] = React.useState(password)
//     return(
//     <View style={{marginBottom:20}}>
//     <Text style={style.label}>{label}</Text>
//     <View style={[
//     style.inputContainer
//     ,{
//     borderColor:error
//      ?COLORS.red
//      :isFocused 
//      ?COLORS.darkBlue
//      :COLORS.light},
//      ]}>
//         <Icon 
//         name={iconName}
//         style={{fontSize: 22,color:COLORS.darkBlue, marginLeft: 10,top:19}}
//         />
//         <TextInput
//             secureTextEntry={hidePassword}
//             autoCorrect={false}
//             onFocus={() => {
//                 onfocus();
//                 setIsFocused(true)
//             }}
//             onBlur={()=>{
//                 setIsFocused(false)
//             }}

//             style={{color:COLORS.darkBlue,top:-10,flex:1,left:40}}
//             {...Props}
//             />
//             {password && (
//                 <Icon 
//             onPress={()=>setHidePassword(!hidePassword)}
//                 style={{left:340,top:-15,fontSize:20,color:COLORS.darkBlue}}
//                 name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
//             />
//            )}
          
        
//     </View>
//     {error && ( <Text style={{color:COLORS.red,top:100,fontSize:14}}>
//     {error}
//     </Text>
//     )}
//     </View>
//     )
// }

// const style = StyleSheet.create({
//     label:{
//         marginVertical: 5,
//         fontSize: 14,
//         color:COLORS.grey,
//         top:95,
//     },
//     inputContainer:{
//         height:55,
//         top:100,
//         backgroundColor:COLORS.light,
//         borderRadius:10

//     }
// })
// export default Input



import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "./Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SIZES } from "./Sizes";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: COLORS.darkBlue, marginLeft: 10, top: 1 }}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{ color: COLORS.darkBlue, top:2, flex: 1, left: 6 }}
          {...props}
        />
        {password && (
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={{ left: 340, top: -15, zIndex: 2 }}
          >
            <Icon
              style={{ fontSize: 10/100*(SIZES.width), color: COLORS.darkBlue }}
              name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{ color: COLORS.red, top: 5}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 3.5/100*(SIZES.width),
    // fontSize: 14/100*(SIZES.width),
    color: COLORS.grey,
    top: 5,
  },
  inputContainer: {
    height: 6/100*(SIZES.height),
    top:0,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});

export default Input;
