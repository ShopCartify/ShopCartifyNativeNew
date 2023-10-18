import React, { useCallback, useContext, useEffect, useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import addCartStyles from './addCartStyles.js';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemButton from '../const/ItemButton.js'

import axios from 'axios';
import BASE_URL from '../../secrets/.SecretConstants.js';

import COLORS from '../const/Colors.js';
import { SIZES } from '../const/Sizes.js';
import { CartContext } from '../store/CartContext.js';



const products = "products";


const Items = ({navigation}) => {
  const {cartItems: cartItemContext} = useContext(CartContext)
  let value = AsyncStorage.getItem("uniqueCart")
  const [total, setTotal] = useState(0.0);
  const [valuesFromStorage, setValuesFromStorage] = useState(0.0);
  const [cartProducts, setCartProducts] = useState([])
  const [isloading, setLoading] = useState(true)
console.log("cartItemContext --> ", cartItemContext)
const [fetchItems, setFetchedItems] = useState([])
  const [items, setItems] = useState([
    {
      desc: "product desc",
      price: 250,
      productName: "Coke",
      quantity: 0,
      total: 250,
    },
    {
      desc: "product desc",
      price: 100,
      productName: "Water",
      quantity: 0,
      total: 100,
    },
    {
      desc: "product desc",
      price: 500,
      productName: "Pizza",
      quantity: 0,
      total: 500,
    },
  ]);


  const increment = (item) => {
    const updatedItems = items.map((product) => {
      if (product.productName === item.productName) {
        const newQuantity = product.quantity + 1;
        const newTotal = newQuantity * product.price;
        return { ...product, quantity: newQuantity, total: newTotal };
      }
      return product;
    });
  
    setItems(updatedItems);
  
    const newTotalPrice = updatedItems.reduce((acc, product) => acc + product.total, 0);

    // setTotalPrice(newTotalPrice);

    setTotal(newTotalPrice); // Update this line to setTotal
  };
  
  const decrement = (item) => {
    const updatedItems = items.map((product) => {
      if (product.productName === item.productName && product.quantity > 0) {
        const newQuantity = product.quantity - 1;
        const newTotal = newQuantity * product.price;
        return { ...product, quantity: newQuantity, total: newTotal };
      }
      return product;
    });
  
    setItems(updatedItems);
  
    const newTotalPrice = updatedItems.reduce((acc, product) => acc + product.total, 0);

    // setTotalPrice(newTotalPrice);
    setTotal(newTotalPrice); // Update this line to setTotal

  };
  


  const fetchData =useCallback(async ()=>{
    let data = JSON.parse(await value)
    // data = "data"
    console.log("vvvv --> ",data);

  try {
    const response = await axios.get(
      BASE_URL+"/api/v1/cart/findAllCartProductsByUniqueCartId/",{
        params: {
            uniqueCartId: data.uniqueCartId
        }
    })
    console.log("Etrrrrr --> ",response.data);
    if (response.status !== 200){
      throw new Error("Product not found")
    }else if (response.status === 200) {
      

        setCartProducts(response.data.data)
      
        setLoading(false)

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

useEffect(() => {
fetchData();
}, [fetchData]);

  const storageRetrival = async ()=>{
    let productsArray = await AsyncStorage.getItem(products);
    setValuesFromStorage(productsArray)
    alert(productsArray);
  }

useEffect(()=> {
  if(cartItemContext !== null){
    fetchItems.push(cartItemContext)
  }
},[])
var v = {}
console.log("fetch items  s --> ", v)
/*
{"data":
 [{"id": 1, 
 "productDescription": "new product description", 
 "productImageUrl": "url from cloudinary", 
 "productName": "Ice Cream", 
 "productPrice": 105.39,
  "productQuantity": 0, 
  "supermarketCode": "e4d4e", 
  "uniqueCartId": "hT1i2mZ2y7"}],
 "successFul": true}
*/
  const cartItems = items.map((value, index) => (
    <View style={{height:100,top:10/100*(SIZES.width)}}>
    <View style={Styles.productInfo} key={index}>
      
      <Text style={Styles.productName}>{value.productName}</Text>
      <Text style={Styles.productDesc}>{value.productDescription}</Text>
      <Text style={Styles.price}>{value.productPrice}</Text>
      <View style={Styles.quantitySection}>
        <TouchableOpacity style={Styles.incrementDecrementButton} onPress={() => decrement(value)}>
          <Text style={Styles.buttonText}> - </Text>
        </TouchableOpacity>
        <Text style={Styles.quantity}>{value.productQuantity}</Text>
        <TouchableOpacity style={Styles.incrementDecrementButton} onPress={() => increment(value)}>
          <Text style={Styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.totalCost}>Total: N{value.total}</Text>
    </View>
    </View>
  ));
 
  return (
    <ScrollView style={addCartStyles.container}>
    <View style={addCartStyles.houseall}>
    <Image
            source={require('../../assets/theme/applogo.png')}
            style={addCartStyles.logo}
          />
  
    
    <View style={addCartStyles.begin}>
      <Text style={addCartStyles.h1}>ITEMS</Text>
      <View style={addCartStyles.innerhouse}>
      <Text style={addCartStyles.p}>View all your selected products.{'\n'} 
      Add them to cart and view wish list</Text>
      <View style={addCartStyles.hold}>


        {cartItems}

      
    
      {/* <View></View> */}
      <TouchableOpacity style={{height:10/100*(SIZES.height),top:18/100*(SIZES.width),
      width:90/100*(SIZES.width),
      left:2/100*(SIZES.width)}} onPress={() => navigation.navigate('productDisplay')}>
        <ItemButton title= "Wish list"/>
      </TouchableOpacity>

      <TouchableOpacity style={{top:-20/100*(SIZES.width),
      width:90/100*(SIZES.width),
      left:2/100*(SIZES.width),
      height:10/100*(SIZES.height)
      }} onPress={() => storageRetrival()}>
      <ItemButton title="Check out"/>
        {/* <Button style={addCartStyles.buttonTex}>CHECK OUT</Button> */}
      </TouchableOpacity>

    </View>
    </View>
     </View>
   </View>
     </ScrollView>
  );
};

export default Items;




const Styles = StyleSheet.create({
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor:COLORS.white,
    borderRadius:10,
    // width:400,
    height:70,
    right:5,
    
  },
  // image: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 5,
  // }, 
  productName: {
    fontSize: 4/100*(SIZES.width),
    fontWeight: 'bold',
    right:3/100*(SIZES.width)
    // marginLeft: 3,
  },
  productDesc: {
    fontSize: 4/100*(SIZES.width),
    color: 'gray',
    right:2/100*(SIZES.width)
    
  },
  price: {
    fontSize: 4/100*(SIZES.width),
    fontWeight: 'bold',
    right:1/100*(SIZES.width)
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  incrementDecrementButton: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    paddingHorizontal: 2/100*(SIZES.width),
    paddingVertical: 2/100*(SIZES.width),
    marginHorizontal: 5,
    right:2/100*(SIZES.width)
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  quantity: {
    fontSize: 4/100*(SIZES.width),
    right:5
  },
  totalCost: {
    fontSize: 4/100*(SIZES.width),
    fontWeight: 'bold',
    marginRight: 10/100*(SIZES.width),
    color: 'green',
  },
});


