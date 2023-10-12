
import React, { useCallback, useEffect, useState } from 'react';

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



const products = "products";


const Items = ({navigation}) => {
  const [total, setTotal] = useState(0.0);
  const [valuesFromStorage, setValuesFromStorage] = useState(0.0);
  const [cartProducts, setCartProducts] = useState([])
  const [isloading, setLoading] = useState(true)

  const [items, setItems] = useState([
    {
      desc: "product desc",
      price: 250,
      productName: "Coke",
      quantity: 0,
      total: 0,
    },
    {
      desc: "product desc",
      price: 100,
      productName: "Water",
      quantity: 0,
      total: 0,
    },
    {
      desc: "product desc",
      price: 500,
      productName: "Pizza",
      quantity: 0,
      total: 0,
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
  };


  const fetchData =useCallback(async ()=>{
    let value = await AsyncStorage.getItem("uniqueCart")
    let data = JSON.parse(value)
    // data = "data"
    console.log(data.uniqueCartId);

  try {
    const response = await axios.get(
      BASE_URL+"/api/v1/cart/findCartByUniqueCartId/"+ data.uniqueCartId, 
    );
    // console.log(response.data);
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


  const cartItems = items.map((item, index) => (
    <View style={{height:100,top:10/100*(SIZES.width)}}>
    <View style={Styles.productInfo} key={index}>
      
      <Text style={Styles.productName}>{item.productName}</Text>
      <Text style={Styles.productDesc}>{item.desc}</Text>
      <Text style={Styles.price}>{item.price}</Text>
      <View style={Styles.quantitySection}>
        <TouchableOpacity style={Styles.incrementDecrementButton} onPress={() => decrement(item)}>
          <Text style={Styles.buttonText}> - </Text>
        </TouchableOpacity>
        <Text style={Styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity style={Styles.incrementDecrementButton} onPress={() => increment(item)}>
          <Text style={Styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.totalCost}>Total: N{item.total}</Text>
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
      <TouchableOpacity style={{height:80,top:-20}} onPress={() => navigation.navigate('productDisplay')}>
        <ItemButton title= "Wish list"/>
      </TouchableOpacity>

      <TouchableOpacity style={{top:-20}} onPress={() => storageRetrival()}>
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
    fontSize: 16,
    fontWeight: 'bold',
    // marginLeft: 3,
  },
  productDesc: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    left:3
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  incrementDecrementButton: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  quantity: {
    fontSize: 16,
  },
  totalCost: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
});


