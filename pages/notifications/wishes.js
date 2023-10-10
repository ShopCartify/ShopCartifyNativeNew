import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { customerUrl, ngrokBaseUrl } from '../../../../api/Api';
import axios from 'axios';
import WishlistCardView from './WishlistCardView';
import { Context } from '../../../../context/context';

const WishList = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const { wishListItems, handleRemoveFromWishList } = useContext(Context)

  // console.log("from context wishlist component", wishListItems);

  if (wishListItems.length == 0) {
    return(
      <View style={{padding: 20, alignItems: "center", flex: 1, justifyContent: "center"}}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "black"}}>
          No Favorites Added
        </Text>
      </View>
    )
  }


  return(
    <View >
      <FlatList
      data={wishListItems}
      renderItem={({item}) => {
      if (!item || !item.productImageUrl) {
            return null;
          }
          return <WishlistCardView 
          product={item} 
          handleRemoveFromWishList={handleRemoveFromWishList} 
          currentProductId={item.productId}
          />;
    }}
      keyExtractor={(item) => item.productId}
      numColumns={2}
      />
    </View>
  )
};

export default WishList;