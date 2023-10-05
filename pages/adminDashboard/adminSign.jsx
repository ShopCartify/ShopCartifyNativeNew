import React, { useState } from "react";
import SupermarketAdmin from "./SupermarketAdmin";
import CheckoutAdmin from "./CheckoutAdmin";
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/core";

const SignUps = () => {
  const [role, setRole] = useState("");

  const navigation = useNavigation();

  const handleSignUp = (event) => {
    event.preventDefault();
    {role === "SupermarketAdmin" && navigation.navigate("SupermarketScreen")}
    {role === "CheckoutAdmin" && navigation.navigate("CheckoutScreen")}

  };

  return (
    <SafeAreaView>
    <ScrollView style={signer.wrap}>
      <Text>Email:</Text>
      <TextInput type="text" />

      <Text>Password:</Text>
      <TextInput type="password" />

      <Text>Role:</Text>
      <Picker
        selectedValue={role}
        onValueChange={(value) => setRole(value)}
      >
        <Picker.Item label="Select Role" value="" />
        <Picker.Item label="SupermarketAdmin" value="SupermarketAdmin" />
        <Picker.Item label="CheckoutAdmin" value="CheckoutAdmin" />
      </Picker>

      <Button title="Sign Up" onPress={handleSignUp} />

    </ScrollView>
    </SafeAreaView>
  );
};

const signer = StyleSheet.create({
    wrap:{
        marginTop: 100,
        // backgroundColor:'#4b4b88',
    }
})
export default SignUps;
