import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import wine from '../../assets/theme/wine.jpeg' 
import Logo from '../../assets/theme/applogo.png'
import { Dimensions, StyleSheet } from 'react-native';
import { SIZES } from '../const/Sizes';

const { width } = Dimensions.get('window');

const WishList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Martini Sparkling ',
      description: '750ml',
      price: 7200.99,
    },
    // Add more items to the wishlist as needed
  ]);

  const [total, setTotal] = useState(0.0);

  const calculateTotal = () => {
    let sum = 0;
    for (const item of items) {
      sum += item.price;
    }
    setTotal(sum);
  };

  const removeFromWishlist = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <ScrollView style={wishlistStyles.container}>
      <View style={wishlistStyles.houseall}>
      <Image
            source={require('../../assets/theme/applogo.png')}
          style={{left:25/100*(SIZES.width), 
          resizeMode: "contain",
          position: "absolute",
          aspectRatio: 2,
          width: 45/100*(SIZES.width),
          top:8/100*(SIZES.width)
          }}
          />
        <View style={wishlistStyles.allItems}>
          <View style={wishlistStyles.form}>
          <View style={wishlistStyles.begin}>
              <Text style={wishlistStyles.h1}>MY WISHLIST</Text>
              <View style={wishlistStyles.innerhouse}>
                {items.map((item) => (
                  <View style={wishlistStyles.hold} key={item.id}>
                    <View style={wishlistStyles.add}>
                      <View style={wishlistStyles.productInfoTwo}>
                        <View style={wishlistStyles.wine}>
                          <Image source={wine} style={wishlistStyles.wineImage} />
                        </View>
                        <Text style={wishlistStyles.productName}>{item.name}</Text>
                        <Text style={wishlistStyles.productDesc}>{item.description}</Text>
                        <Text style={wishlistStyles.price}>N{item.price}</Text>
                      </View>
                      <TouchableOpacity
                        style={wishlistStyles.removeHolder}
                        onPress={() => removeFromWishlist(item.id)}
                      >
                        <Icon name="trash-o" size={30} color="red" />
                        <Text style={wishlistStyles.remove}>REMOVE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            
          </View>
        </View>
        
      </View>
      <Text style={wishlistStyles.totalText}>Total: N{total}</Text>
          <View style={{}}>
          <TouchableOpacity style={{marginTop: 40}} onPress={() => calculateTotal()}>
                <Text style={wishlistStyles.buttonText}>CHECK OUT</Text>
              </TouchableOpacity>
              </View>
             
          
    </ScrollView>
  );
};


const wishlistStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b4b88',
    height: SIZES.height,
    // borderWidth: 3  
  },
   
  houseall: {
    padding: 20,
  },
 
  allItems: {
    marginTop: 20,
  },
  form: {
    borderWidth: 1,
    // borderColor: '#ddd',
    borderRadius: 10,
    padding: 2/100*(SIZES.width),
    backgroundColor:'white',
    top:50/100*(SIZES.width),
    height:40/100*(SIZES.height)
  },
  begin: {
    marginBottom: 20,
  },
  h1: {
    fontSize: 5/100*(SIZES.width),
    fontWeight: 'bold',
    marginBottom: 10,
    top:-30/100*(SIZES.width),
    marginLeft:25/100*(SIZES.width),
    color:'orange'
    
  },
  innerhouse: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height:70/100*(SIZES.width),
    top:-6/100*(SIZES.width)
  },
  hold: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  add: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wineImage: {
    width: 40/100*(SIZES.width),
    height: 50/100*(SIZES.width),
    marginRight: 10,
    top:8/100*(SIZES.width),
    left:1/100*(SIZES.width),
  },
  productName: {
    fontSize: 5/100*(SIZES.width),
    fontWeight: 'bold',
    left:43/100*(SIZES.width),
    top:-100
  },
  productDesc: {
    fontSize: 14/100*(SIZES.width),
    left:50/100*(SIZES.width),
    top:-20/100*(SIZES.width),
    fontSize:6/100*(SIZES.width)
  },
  price: {
    fontSize: 16/100*(SIZES.width),
    fontWeight: 'bold',
    marginLeft: 50/100*(SIZES.width),
    top:-15/100*(SIZES.width),
    fontSize:5/100*(SIZES.width)
  },
  removeHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    top:28/100*(SIZES.width),
    right:70/100*(SIZES.width),
  },

  remove: {
    color: 'red',
    marginLeft: 2/100*(SIZES.width),
    fontSize: 3/100*(SIZES.width),
  },
  buttonText: {
    backgroundColor: '#ffc107',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 4/100*(SIZES.width),
    fontWeight: 'bold',
    width:80/100*(SIZES.width),
    left:10/100*(SIZES.width),
    borderRadius:10/100*(SIZES.width)
  
   
  },
  totalText: {
    fontSize: 5/100*(SIZES.width),
    fontWeight: 'bold',
    marginTop: 50/100*(SIZES.width),
    color:'white',
    left:10/100*(SIZES.width)
  },
});

export default WishList;







