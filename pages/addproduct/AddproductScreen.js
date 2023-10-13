import React, { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native';
// import Loader from '../const/Loader';
// import ImagePicker from 'react-native-image-picker';
import COLORS from '../const/Colors'
import Input from '../const/Input';
import AddBut from '../const/AddBut'
import LottieView from 'lottie-react-native';
import axios from 'axios';
import BASE_URL from '../../secrets/.SecretConstants';
import { SIZES } from '../const/Sizes';



const AddProduct = () => {
  const [error, setError] = useState('');
  const [btnTitle, setBtnTittle] = useState("Add Product");
  const [product, setProduct] = useState({
    productName: '',
    productPrice: '0.00',
    productDescription: '',
    productImageUrl: '', 
    supermarketCode: '',
  });

    
  const handleOnChange = (text,input)=>{
    setProduct(prevState => ({...prevState,[input]: text}))
  };

  const handleSubmit = async () => {
    setBtnTittle("Process...")
    try {
        const response = await axios.post(
          BASE_URL+"/api/v1/productController/addNewProduct" ,
          product
        )
        alert("saved successfully")
        // toast.success("saved successfully")

    } catch (error) {
      setError(error.message || 'An error occurred while submitting the form.');
      setBtnTittle("Unsuccessful!!")
      // toast.error('Error submitting form:', error);
      alert('Error submitting form:', error)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
<ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}> 
          <Image
          source={require('../../assets/theme/applogo.png')}
          style={{left:25/100*(SIZES.width), 
          resizeMode: "contain",
          position: "absolute",
          aspectRatio: 2,
          width: 45/100*(SIZES.width),
          top:4/100*(SIZES.width)
          }}
          />
      
    <Text style={{ color: COLORS.white, 
    fontSize: 7/100*(SIZES.width), 
    fontWeight: 'bold', 
    marginTop: 30/100*(SIZES.width),
    left:23/100*(SIZES.width)}}>
Add Product
</Text>
 <Text style={{ color: COLORS.grey, 
 fontSize: 4/100*(SIZES.width),
  top:4/100*(SIZES.width)}}>
    </Text> 
 <View style={{ marginVertical: 10 }}>
          <Input
            placeholder="Enter your product Name"
           
            label="Product Name"
            error={error.productName}
            // onFocus={() => handleError(null, 'productName')}
            onChangeText={(text) => handleOnChange(text, 'productName')}
          />
          <Input
            placeholder="Enter your product price"
           
            label="Product Price"
            error={error.productPrice}
            // onFocus={() => handleError(null, 'productPrice')}
            onChangeText={(text) => handleOnChange(text, 'productPrice')}
          />
        
            <Input
            placeholder="Enter your product description"
           
            label="Product Description"
            error={error.productDescription}
            // onFocus={() => handleError(null, 'productDescription')}
            onChangeText={(text) => handleOnChange(text, 'productDescription')}
          />
    <Input
            placeholder="Enter your supermarket code"
           
            label="Supermarket Code"
            error={error.supermarketCode}
            // onFocus={() => handleError(null, 'productDescription')}
            onChangeText={(text) => handleOnChange(text, 'supermarketCode')}
          />
          <View className="Image">
                <LottieView 
                source={require('../../assets/theme/animationbb.json')}
                autoPlay
                loop
                style={{width:200/100*(SIZES.width),
                 height: 50/100*(SIZES.width),
                 top:2/100*(SIZES.width),left:30,
                }}
                />
            </View>

 </View>
 <View style={{height:(SIZES.height)}}>
       <TouchableOpacity style={{height:18.8/100*(SIZES.height),top:-3/100*(SIZES.width)}}>
      <AddBut title="Select Image" />
      {product.productImageUrl ? (
        <Image source={{ uri: product.productImageUrl }} style={styles.image} />
       ) : null}
       </TouchableOpacity>
       <TouchableOpacity style={{height:18.8/100*(SIZES.height),top:-20/100*(SIZES.width)}}>
       <AddBut title="Upload Image"  />
      {error ? <Text >{error}</Text> : null}
      </TouchableOpacity>

      <TouchableOpacity style={{height:20/100*(SIZES.width),top:-50/100*(SIZES.width)}}>
       <AddBut title={btnTitle} onPress={handleSubmit} />
       </TouchableOpacity>
       </View>
       </ScrollView>
      </SafeAreaView>
   );
      
 };
 export default AddProduct;
