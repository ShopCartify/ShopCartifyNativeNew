import React, { useState, useCallback, useEffect } from 'react';
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
// import WelcomeButton from '../const/WelcomeButton';
import Button from '../const/Button';
import AddButton from '../const/ItemButton';
// import { TouchableOpacity } from 'react-native-gesture-handler';



const product = "product";
const products = "products"
// const productQrCodeUrl = ""

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
    let arr = 	JSON.parse(await AsyncStorage.getItem(products))
	alert(arr[0])
	

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
		 <View>
		<View >
			<View  style={pros.wrapProduct}>
				<View style={pros.container}>
				{/* <Image source={isNotLoading ?productDetail.productQrCodeUrl : undefined} style={pros.image}/> */}
				<Image source={{ uri: 'http://res.cloudinary.com/dhhhqruoy/image/upload/v1696927822/ShopCartify/QrcodeImages/bagiM8i6.png' }}
  					style={pros.image} />

					<View style={pros.miniProduct}>
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
			
			<View style={{marginBottom:10, marginTop:10,}}><Button title="Add To Cart" onPress={handleCart}/></View>
			<View style={{marginBottom:10,}}><Button title="View Cart" onPress={''}/></View>
			<View style={{marginBottom:10,}}><Button title="Scan Again" onPress={''}/></View>
			
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
		marginBottom:10,
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
		marginTop: 10,
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


