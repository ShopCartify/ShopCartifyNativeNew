import React, { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
// import Loader from '../const/Loader';
import ImagePicker from 'react-native-image-picker';
import COLORS from '../const/Colors'
import Input from '../const/Input';
import AddBut from '../const/AddBut'
import LottieView from 'lottie-react-native';
import axios from 'axios';
import getBaseUrl, { BASE_URL } from '../../secrets/.SecretConstants';


const AddProduct = () => {
  const [error, setError] = useState('');
  const [product, setProduct] = useState({
    productName: '',
    productPrice: '0.00',
    productDescription: '',
    productImageUrl: '', // Updated to an empty string
    supermarketCode: 'Ibiza',
  });

    

  const handleOnChange = (text,input)=>{
    setInputs(prevState => ({...prevState,[input]: text}))
  };

  const handleSubmit = async () => {
    alert("https://8f2d-62-173-45-70.ngrok-free.app")
    try {
        const response = await axios.post(
          "https://8f2d-62-173-45-70.ngrok-free.app/api/v1/productController/addNewProduct" ,
          {
            "productName": "boxe",
            "productDescription": "for school",
            "productPrice": 3490.00,
            "productImageUrl": "frontend/",
            "productQrCodeUrl": "frontend",
            "supermarketName": "MAC",
            "supermarketCode": "jd3e3",
            "supermarketAdminEmail": "makefd@gamil.com"
          }
        )
        alert("saved successfully")
    } catch (error) {
      setError(error.message || 'An error occurred while submitting the form.');
      alert('Error submitting form:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
<ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}> 
    <Text style={{ color: COLORS.white, fontSize: 40, fontWeight: 'bold', marginTop: 40 }}>
Register
</Text>
 <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
Enter Your Details for Personal Information
    </Text> 
 <View style={{ marginVertical: 10 }}>

      {/* <Input
        label="Product Name"
        // secureTextEntry={true}
        onChangeText={(text) => handleOnChange(text, 'productName')}
        placeholder="Product Name"
      />

      <Input
        label="product Price"
        onChangeText={(text) => handleOnChange(text, 'productPrice')}
        placeholder="Product Price"
      />
      <Input
        label="product Description"
        onChangeText={(text) => handleOnChange(text, 'product Description')}
        placeholder="Product Description"
       
      /> */}
          <View className="Image">
                <LottieView 
                source={require('../../assets/theme/animationbb.json')}
                autoPlay
                loop
                style={{width: 250, height: 150,top:-10,left:30,
                }}
                />
            </View>

</View>
       <TouchableOpacity style={{height:90,top:-50}}>
      <AddBut title="Select Image" />
      {product.productImageUrl ? (
        <Image source={{ uri: product.productImageUrl }} style={styles.image} />
      ) : null}
      </TouchableOpacity>
      <TouchableOpacity style={{height:100,top:-60}}>
      <AddBut title="Upload Image"  />
      {error ? <Text >{error}</Text> : null}
      </TouchableOpacity>
      <TouchableOpacity style={{height:100,top:-80}}>
      <AddBut title="Add Product" onPress={handleSubmit} />
      </TouchableOpacity>
      
</ScrollView>
</SafeAreaView>
  );
};
export default AddProduct;
