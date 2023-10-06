import React, { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
// import Loader from '../const/Loader';
// import ImagePicker from 'react-native-image-picker';
import COLORS from '../const/Colors'
import Input from '../const/Input';
import AddBut from '../const/AddBut'
import LottieView from 'lottie-react-native';
import axios from 'axios';



const AddProduct = () => {
  const [error, setError] = useState('');
  const [product, setProduct] = useState({
    productName: '',
    productPrice: '0.00',
    productDescription: '',
    productImageUrl: '', 
    supermarketCode: 'bO4n1',
  });

    
  const handleOnChange = (text,input)=>{
    setProduct(prevState => ({...prevState,[input]: text}))
  };

  const handleSubmit = async () => {
    
    try {
        const response = await axios.post(
          "https://8f2d-62-173-45-70.ngrok-free.app/api/v1/productController/addNewProduct" ,
          product
        )
        alert("saved successfully")
        // toast.success("saved successfully")

    } catch (error) {
      setError(error.message || 'An error occurred while submitting the form.');
      // toast.error('Error submitting form:', error);
      alert('Error submitting form:', error)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
<ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}> 
    <Text style={{ color: COLORS.white, fontSize: 40, fontWeight: 'bold', marginTop: 40 }}>
Add Product
</Text>
 <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
Enter Your Details for Personal Information
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
