import  { Paystack, PayStackWebView , paystackProps}  from 'react-native-paystack-webview';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,Ljinking } from 'react-native';
import { View, Text,ScrollView, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import Input from '../const/Input'; 
// import COLORS from '../const/Colors';



const Pay =()=>{

  return (
    <ScrollView>
      
    </ScrollView>

  


      
        // <PayStackWebView
        // buttonText = "Pay Now"
        // showPayButton ={true}
        // paystackKey="pk_test_ae03bd0172becbef0bd43e8c5a1a9aca6aea57f0"
        // paystackSecretKey ="sk_test_fb21b650a3f6a1292eba3c98ae00953e0b9b6847"
        // billingEmail="paystackwebview@something.com"
        // amount={'25000.00'}
        // billingMobile = ""
        // billingName = ""
        // ActivityIndicatorColor="green"
        // safeAreaViewContainer = {{marginTop : 5}}
        // safeAreaViewContainerModal = {{marginTop : 5}}
   

        // onCancel={(e) => {
        //     // handle response here
        //   }}
        //   onSuccess={(res) => {
        //     // handle response here
        //   }}
        //   autoStart={true}

        // />
  );

}

// export default Pay
const PaystackPayment = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");


  const initialiazePayment = async () => {
    try{
      const response = await axios.post(
        'https://api.paystack.co/transaction/initialize',{
          email, 
          amount: amount * 100,  
        },
        {
          headers: {
            Authorization : 'Bearer sk_test_fb21b650a3f6a1292eba3c98ae00953e0b9b6847',
            'Content-Type': 'application/json',
          },
        }
      );
      const authorization_url =  response.data.data.authorization_url;
    }
    catch(error){
      console.warn('error intializing payment', error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paystack Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      <Button title="Pay Now" onPress={initialiazePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PaystackPayment

// import React, { useRef } from 'react';
// import  { Paystack, PayStackWebView , paystackProps}  from 'react-native-paystack-webview';

// import { View, TouchableOpacity,Text } from 'react-native';

// function MakePayment(){
//     const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  
//     return (
//       <View style={{flex: 1}}>
//         <Paystack
//           paystackKey="pk_test_ae03bd0172becbef0bd43e8c5a1a9aca6aea57f0"
//         paystackSecretKey ="sk_test_fb21b650a3f6a1292eba3c98ae00953e0b9b6847"
//           billingEmail="paystackwebview@something.com"
//           amount={'25000.00'}
//           onCancel={(e) => {
//             // handle response here
//           }}
//           onSuccess={(res) => {
//             // handle response here
//           }}
//           ref={paystackWebViewRef}
//         />
  
//           <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
//             <Text>Pay Now</Text>
//           </TouchableOpacity>
//         </View>
//     );
//   }

//   export default MakePayment
