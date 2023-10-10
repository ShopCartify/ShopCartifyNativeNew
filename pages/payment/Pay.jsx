import  { Paystack, PayStackWebView , paystackProps}  from 'react-native-paystack-webview';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,Ljinking } from 'react-native';
import WelcomeButton from '../const/WelcomeButton';
import { View, Button, Text, SafeAreaView, ScrollView } from 'react-native';

const Pay =()=>{

  return (
   
      <View>
        {/* <PayStackWebView
        buttonText = "Pay Now"
        showPayButton ={true}
        paystackKey="pk_test_ae03bd0172becbef0bd43e8c5a1a9aca6aea57f0"
        paystackSecretKey ="sk_test_fb21b650a3f6a1292eba3c98ae00953e0b9b6847"
        billingEmail="paystackwebview@something.com"
        amount={'25000.00'}
        billingMobile = ""
        billingName = ""
        ActivityIndicatorColor="green"
        safeAreaViewContainer = {{marginTop : 5}}
        safeAreaViewContainerModal = {{marginTop : 5}}

        onCancel={(e) => {
            // handle response here
          }}
          onSuccess={(res) => {
            // handle response here
          }}
          autoStart={true}

        /> */}
        <Text>Man</Text>
		 </View >

  );

}

export default Pay

import React, { useRef } from 'react';
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
