import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import addCartStyles from './addCartStyles.js';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AsyncStorage from '@react-native-async-storage/async-storage';


const products = "products"
const items = [
	{

		desc: "product desc",
		price: 250,
		productName: "Coke",
	},
	{

		desc: "product desc",
		price: 100,
		productName: "Water",
	},
	{

		desc: "product desc",
		price: 4500,
		productName: "Pizza",
	},
];


const Items = ({navigation}) => {
  const [total, setTotal] = useState(0.0);
  const [valuesFromStorage, setValuesFromStorage] = useState(0.0);

  const increment = (item) => {
    // Implement your logic to increment item quantity here
  };

  const decrement = (item) => {
    // Implement your logic to decrement item quantity here
  };

  const storageRetrival = async ()=>{
    let productsArray = await AsyncStorage.getItem(products);
    setValuesFromStorage(productsArray)
    alert(productsArray);
  }

  const cartItems = items.map((item, index) => (
    <View style={addCartStyles.productInfoTwo} key={index}>
       <View style={addCartStyles.add}>
        <View style={addCartStyles.ccc}>
          <Image source={item.image} style={addCartStyles.image} />
          <Text style={addCartStyles.productName}>{item.productName}</Text>
          <Text style={addCartStyles.productDesc}>{item.desc}</Text>
          <Text style={addCartStyles.price}>{item.price}</Text>
                <View  style={{ flexDirection: 'row' }}>
                {/* <Text style={addCartStyles.remove}>REMOVE</Text> */}
            <Icon name="shopping-cart" size={24} color="black" />
          <TouchableOpacity style={addCartStyles.incrementDecrementButton} onPress={decrement}>
          <Text style={addCartStyles.buttonWrite}> - </Text>
          </TouchableOpacity>
          <Text style={addCartStyles.buttonTe}>0</Text>
              <View style={addCartStyles.incrementSection}>
          <TouchableOpacity style={addCartStyles.incrementDecrementButton}onPress={increment}>
          <Text style={addCartStyles.buttonWrite}> + </Text>
          </TouchableOpacity>
              </View>
            </View> 
        </View>
    </View>
  </View>
  ));
 

  return (
    <ScrollView style={addCartStyles.container}>
    <View style={addCartStyles.houseall}>
    <View style={addCartStyles.allItems}>
    <View style={addCartStyles.form}>
    
    <View style={addCartStyles.begin}>
      <Text style={addCartStyles.h1}>ITEMS</Text>
      <View style={addCartStyles.innerhouse}>
      <Text style={addCartStyles.p}>View all your selected products.{'\n'} 
      Add them to cart and view wish list</Text>
      <View style={addCartStyles.hold}>


        {cartItems}

      
      <View style={addCartStyles.totl}>
        <Text style={addCartStyles.amount}>Total amount</Text>
        <Text style={addCartStyles.n}>N {4500}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('productDisplay')}>
        <Text style={addCartStyles.buttonTet}>VIEW WISH LIST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => storageRetrival()}>
        <Text style={addCartStyles.buttonTex}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
    </View>
     </View>
     
     </View>
     </View>
   </View>
     </ScrollView>
  );
};

export default Items;