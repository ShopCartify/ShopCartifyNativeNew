import React, { useState, useCallback, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
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
import { CartProvider, useCart } from '../store/CartContext';
// import WelcomeButton from '../const/WelcomeButton';
import Button from '../const/Button';
import {CartContext} from '../store/CartContext'
import { SIZES } from '../const/Sizes';
// import AddButton from '../const/ItemButton';
// import { TouchableOpacity } from 'react-native-gesture-handler';

//http://localhost:1961/api/v1/cart/addToCart // RequestBody
//http://localhost:1961/api/v1/cart/removeFrom //  RequestBody
// http://localhost:1961/api/v1/cart/findAllCartProductsByUniqueCartId/{{ }} //String {uniqueCartId}



const product = "product";
const products = "products"
// const productQrCodeUrl = ""

const ProductDisplay = ({}) => {
const {setCartItems} = useContext(CartContext)
  const [storedValue , setStoredValue] = useState()
  const [productDetail , setProductDetail] = useState()
  const [isNotLoading, setNotLoading] = useState(false)
  const[error , setError] = useState()
  const[uniqueCartId, setUniqueCartId] = useState();
  const[btnTittle, setBtnTittle] = useState("Add To Cart");
  const[addProductRequest, setAddProductRequest] = useState({
	"productName": "",
	"supermarketCode": "",
	"cartUniqueId": uniqueCartId,
	"numberOfProducts": 1
  })
  const navigation = useNavigation();
  const {cart, removeFromCart, clearCart, addItemToCart} = useCart()




  const fetchData =useCallback(async ()=>{
    
      let value = await AsyncStorage.getItem("product")
	
      let data = JSON.stringify(value)
	 
	   value = JSON.parse(await AsyncStorage.getItem("uniqueCart"))
	  
	   setUniqueCartId(JSON.stringify(value.uniqueCartId))
	   
		
		try {
			const response = await axios.get(
				BASE_URL+"/api/v1/productController/findProductByToken/" +
					data,
			
			);
			setBtnTittle("Retriving...")
			if (response.status !== 200){
				throw new Error("Product not found")
			}else if (response.status === 200) {
				
	  			setProductDetail(response.data.data)
				setAddProductRequest(response.data.data)
				setBtnTittle('SUCCESS!')
	  			setNotLoading(true)

			console.log(response.data.data);
			setBtnTittle("Add To Cart")
			}
			
      
		} catch (error) {
			setBtnTittle("Product Not Found")
			if(error.message === "Request failed with status code 500" ){
				
				console.log(error.message)
			}else if(error.message === "Product not found") {
				console.log(error.message);
			}else{
				console.log(error.message);
			}
			setBtnTittle("Add To Cart")
		}
  }, []);

  useEffect(() => {
	fetchData();
}, [fetchData]);

  const addToCartBackend =async () => {

	console.log("bvxnbvxbvxbx", productDetail);
	try {
		const response = await axios.post(
			BASE_URL+
			"/api/v1/cart/addToCart",
		productDetail
		
		);
		setBtnTittle("Adding Product To Cart")
	
		if (response.status !== 200){
			throw new Error("Product not found")
		}else if (response.status === 200) {
			setCartItems(response.data.data)
			AsyncStorage.setItem("uniqueCart", JSON.stringify(response.data))

		console.log(response.data);

		setBtnTittle("Successful!")
		navigation.navigate("WelcomeScreen")

		}
		
  
	} catch (error) {
		setBtnTittle(Failed)
		alert("unable to add product to cart. Try again")
		if(error.message === "Request failed with status code 500" ){
			
			console.log(error.message)
		}else if(error.message === "Product not found") {
			console.log(error.message);
		}else{
			console.log(error.message);
		}
	}

  
  };
    const addToCart =async () => {
		
		
      let productsArray = await AsyncStorage.getItem(products);
	  console.log(addItemToCart(products))

		if (productsArray === null) {
			productsArray = [];
			 
		} else {
			productsArray = JSON.parse(productsArray);
		}

		productsArray.push(productDetail);
   
		AsyncStorage.setItem(products, JSON.stringify(productsArray));
    
	};
	const handleCart=(event)=>{
		event.preventDefault();  

		addToCartBackend()
		// navigation.navigate("scan");
	}

	const handleViewCart =()=>{ 
		  
		navigation.navigate('Items')
	} 	
	const handleScanAgain =()=>{
		
		navigation.navigate('scan')
	}


  return (
    <SafeAreaView style={pros.holder}>
    <ScrollView>   
       {/* <View > */}
      
        <Text style={pros.titleText}>Product Details</Text>
		 <View>
		<View >
			<View  style={pros.wrapProduct}>
				<View style={pros.container}>
				{/* <Image source={isNotLoading ?productDetail.productQrCodeUrl : undefined} style={pros.image}/> */}
				<Image source={{ uri: isNotLoading ? productDetail.productQrCodeUrl : "akhj"}}
  					style={pros.image} />

					<View style={pros.miniProduct}>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>supermarket Name:</Text>{isNotLoading ?productDetail.supermarketName : <Text> Loading... </Text>} </Text>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>Name:</Text>{isNotLoading ?productDetail.productName : <Text> Loading... </Text>} </Text>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>Description:</Text>{isNotLoading ? productDetail.productDescription : <Text> Loading... </Text>}</Text>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>Price:</Text>{isNotLoading ? productDetail.productPrice : <Text> Loading... </Text>}</Text>
					</View>
   				</View>

				   {/* <View style={pros.miniProduct}>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>Name:</Text>{isNotLoading ?productDetail.productName : <Text> Loading... </Text>} </Text>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>Description:</Text>{isNotLoading ? productDetail.productDescription : <Text> Loading... </Text>}</Text>
						<Text style={pros.txt}><Text style={{fontSize:15, fontWeight:'bold',}}>Price:</Text>{isNotLoading ? productDetail.productPrice : <Text> Loading... </Text>}</Text>
					</View> */}
			
			<View style={{marginBottom:10, marginTop:10,}}><Button title={btnTittle} onPress={handleCart}/></View>
			<View style={{marginBottom:10,}}><Button title="View Cart" onPress={handleViewCart}/></View>
			<View style={{marginBottom:20/100*(SIZES.width),}}><Button title="Scan Again" onPress={handleScanAgain}/></View>
			
			</View>

		</View>
		</View>

    </ScrollView>
	</SafeAreaView>
  );
};

const pros = StyleSheet.create({
	holder:{
		flex:1,  
		backgroundColor:'#4b4b88', 
		paddingTop: 200,
	},

	titleText:{
		textAlign: 'center',
		fontSize:20,
		fontWeight: 'bold',
		// marginBottom:10,
		color: 'white',
		
	},
	text: {
		fontSize: width < 400 ? 16 : 24, 
		fontWeight: 'bold',
	  },
 
	container: {
	  flex: 1,
	  justifyContent: 'center',
	//   alignItems: 'center',
	},

	image: {
	  flex: 1,
	  width: 100,
	  height: 100,
	  borderWidth: 2,
	  borderColor: 'grey',
	  marginBottom:-75,
	//   marginTop: -
	//   resizeMode: 'contain',
	},

	wrapProduct:{
		// width: 500,
		flex:1,
		// alignContent: 'center',
		marginTop: 20/100*(SIZES.width),
		marginHorizontal: 10,
		backgroundColor:'white',
		borderRadius: 10,
		padding:15,
		// #4b4b88
	},

	txt:{
		fontSize:15,
		fontWeight:'normal',
		lineHeight: 30,
		// marginTop: -30,
	},

	miniProduct:{
		marginBottom: 10,
		marginTop:-20,
		marginLeft: 120,
	},

	addcart:{
		marginBottom: 30,
	},

});

export default ProductDisplay;


