import React, { useState, useCallback, useEffect } from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
// import { Link } from '@react-navigation/native';
// import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

// import axios from 'axios';
import { Dimensions } from 'react-native';


const { width } = Dimensions.get('window');


import BASE_URL from '../../secrets/.SecretConstants';




const product = "product";
const products = "products"

const ProductDisplay = ({}) => {

  const [storedValue , setStoredValue] = useState()
  const [productDetail , setProductDetail] = useState()
  const [isNotLoading, setNotLoading] = useState(false)
  const[error , setError] = useState()
  const navigation = useNavigation();


  const fetchData =useCallback(async ()=>{
    
      let value = await AsyncStorage.getItem("product")
      let data = JSON.stringify(value)

   
		try {
			const response = await axios.get(
				BASE_URL+"/api/v1/productController/findProductByToken/" +
					data,
			
			);
			if (response.status !== 200){
				throw new Error("Product not found")
			}else if (response.status === 200) {
				
	
	  			setProductDetail(response.data.data)
	  			setNotLoading(true)

			console.log(response.data.data);
			}
			
      
		} catch (error) {
			if(error.message === "Request failed with status code 500" ){
				
				console.log(error.message)
			}else if(error.message === "Product not found") {
				console.log(error.message);
			}else{
				console.log(error.message);
			}

      	
			
		}
  }, []);


    const addToCart =async () => {
		
      let productsArray = await AsyncStorage.getItem(products);

		if (productsArray === null) {
			productsArray = [];
			
		} else {
			productsArray = JSON.parse(productsArray);
		}

		productsArray.push(productDetail);
   
		AsyncStorage.setItem(products, JSON.stringify(productsArray));
    // let arr = 	JSON.parse(await AsyncStorage.getItem(products))
	// alert(arr[0])
	

	};
	const handleCart=(event)=>{
		event.preventDefault();
		addToCart()
		navigation.navigate("scan");
	}

	useEffect(() => {
		fetchData();
	}, [fetchData]);


  return (
    <SafeAreaView style={pros.holder}>
    <ScrollView>   
       {/* <View > */}
      
        <Text style={pros.titleText}>Product Details</Text>
		 <View >
		
		<Text>Product Detail</Text>
		<View >
			<View >
				<View style={styles.container}>
					<Image
						source={isNotLoading ?productDetail.productQrCodeUrl : undefined} // Replace with your image source
						style={styles.image}
					/>
   				 </View>
			<Text >Name : {isNotLoading ?productDetail.productName : <Text> Loading... </Text>} </Text>
			<Text >Description : {isNotLoading ? productDetail.productDescription : <Text> Loading... </Text>}</Text>
			<Text>Price : {isNotLoading ? productDetail.productPrice : <Text> Loading... </Text>}</Text>
			</View>
		</View>
	
		<Button title='Add To Cart' onPress={handleCart} />

		</View>

    </ScrollView>
	</SafeAreaView>
  );
};

const pros = StyleSheet.create({
	holder:{
		flex:1 ,  
		backgroundColor:'#fff', 
		paddingTop: 50,
	},

	titleText:{
		fontSize:18,
		marginBottom:10,
	},
	text: {
		fontSize: width < 400 ? 16 : 24, 
		fontWeight: 'bold',
	  },

});
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	image: {
	  width: 200, // Set the width of the image
	  height: 200, // Set the height of the image
	  resizeMode: 'contain', // Adjust the resizeMode as needed (e.g., 'cover', 'stretch')
	},
  });

export default ProductDisplay;


