import React, { useState, useCallback, useEffect } from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';
// import { ToastContainer, toast } from "react-toastify";
// import axios from 'axios';
// import CodeScanner from './Scan';
import { useNavigation } from '@react-navigation/core';
// import { Link } from '@react-navigation/native';
// import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
// import axios from 'axios';
import { Dimensions } from 'react-native';


const { width } = Dimensions.get('window');


let cardLogo

const items = [
	{
		image: cardLogo,
		productDescription: "product desc",
		productPrice: 250,
		productName: "Coke",
	},
  
	{
		image: cardLogo,
		productDescription: "product desc",
		productPrice: 100,
		productName: "Water",
	},
	{
		image: cardLogo,
		productDescription: "product desc",
		productPrice: 4500,
		productName: "Pizza",
	},
];

const product = "product";
const products = "products"

const ProductDisplay = ({}) => {

  const [storedValue , setStoredValue] = useState()
  const [productDetail , setProductDetail] = useState()
 
  const[error , setError] = useState()
  const navigation = useNavigation();

 

  const fetchData =useCallback(async ()=>{
    // AsyncStorage.setItem("product", "1")
      let value = await AsyncStorage.getItem("product")
      let data = JSON.stringify(value)
     console.log(data);
   
		try {
			const response = await axios.get(
				"https://9f1e-62-173-45-70.ngrok-free.app/productController/findbyNameAndCode/" +
					data,
			
			);
			// alert(response.data.data);
      // setProductDetail(response.data.data)
			alert("response");
	  console.log(response.data);
	  setProductDetail(response.data.data)
			// toast.success(response);
			alert(response);

			// console.log(response.data.data);
      
		} catch (error) {
      randomise(data)
      // alert(productDetail)
      console.log(error);
	  alert(error)
	  toast.error(error)
			// setError(error.response.data.data);
			// console.log(error.response.data.data);
		}
  }, []);
  const randomise =(value)=>{
    if (value === "1") setProductDetail(items[0]) 
    if (value === "2") setProductDetail(items[1])
    if (value === "3") setProductDetail(items[2])
    
  }

  const storeData = () =>{
    // AsyncStorage.setItem(product, storedValue)
  }

    const addToCart =async () => {
      // let productsArray = await AsyncStorage.getItem(products);

		if (productsArray === null) {
			productsArray = [];
		} else {
			productsArray = JSON.parse(productsArray);
		}
    console.log(productDetail);
		productsArray.push(productDetail);
    console.log(productsArray);
		AsyncStorage.setItem(products, JSON.stringify(productsArray));
    // alert(AsyncStorage.getItem(products))
		// console.log(JSON.parse(AsyncStorage.getItem(products)));


		// navigation.navigate('');

		navigation.navigate("scanScreen");

	};
	const handleCart=(event)=>{
		event.preventDefault();
		navigation.navigate("scanScreen");
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
            <Text >Name : {items[0].productName}</Text>
            <Text >Description : {items[0].productDescription}</Text>
            <Text>Price : {items[0].productPrice}</Text>
          </View>
        </View>

        {/* <Button title='Add To Cart' onPress={navigation.navigate("scanScreen")}></Button> */}
		{/* <Link to="/scanScreen">Add To Cart</Link> */}
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

export default ProductDisplay;


