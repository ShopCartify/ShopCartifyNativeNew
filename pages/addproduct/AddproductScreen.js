import React, { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
// import Loader from '../const/Loader';
import ImagePicker from 'react-native-image-picker';
import COLORS from '../const/Colors'
import Input from '../const/Input';
import AddBut from '../const/AddBut'
import LottieView from 'lottie-react-native';


const AddProduct = () => {
  const [error, setError] = useState('');
  const [product, setProduct] = useState({
    productName: '',
    productPrice: '0.00',
    productDescription: '',
    productImageUrl: '', // Updated to an empty string
    supermarketCode: 'Ibiza',
  });

    

 

  const handleSubmit = async () => {
    try {
        const response = await axios.get(
          NG_ROK_URL+"api/v1/productController/addNewProduct" ,
            product
        )
    } catch (error) {
      setError(error.message || 'An error occurred while submitting the form.');
      console.error('Error submitting form:', error);
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

      <Input
        label="Product Name"
        secureTextEntry={true}
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
      <AddBut title="Select Image" onPress={handleImageChange} />
      {product.productImageUrl ? (
        <Image source={{ uri: product.productImageUrl }} style={styles.image} />
      ) : null}
      </TouchableOpacity>
      <TouchableOpacity style={{height:100,top:-60}}>
      <AddBut title="Upload Image" onPress={handleUpload} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      </TouchableOpacity>
      <TouchableOpacity style={{height:100,top:-80}}>
      <AddBut title="Add Product" onPress={handleSubmit} />
      </TouchableOpacity>
      
</ScrollView>
</SafeAreaView>
  );
};
export default AddProduct;
