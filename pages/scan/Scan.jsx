import React, { useState, useEffect } from 'react';
import { View, Text,Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AnotherButton from '../const/AnotherButton'
import { Dimensions,StyleSheet } from 'react-native';
import CartButton from '../const/CartButton';
import { SIZES } from '../const/Sizes';
// import Expo from 'expo'

const { width } = Dimensions.get('window');


const product = "product";


export default function CodeScanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);  
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // useEffect(() => {
  //   Expo.BarCodeScanner.startScanningAsync();
  //   const scanAgain = BarCodeScanner.addListener('barCodeScanned', handleBarCodeScanned);
  
  //   return () => {
  //     scanAgain.remove();
  //   };
  // }, []);
 
  const handleBarCodeScanned = ({ type, data }) => {

    setScanned(true);
    setScannedData(data);

    AsyncStorage.setItem(product, data)
    navigation.navigate('productDisplay')
  };


  return (
    <View style={styles.container}>

<Image
            source={require('../../assets/theme/applogo.png')}
          style={{left:25/100*(SIZES.width), 
          resizeMode: "contain",
          position: "absolute",
          aspectRatio: 2,
          width: 45/100*(SIZES.width),
          top:-4/100*(SIZES.width)
          }}
          />
      {hasPermission === null ? (<Text style={styles.text}>Camera permission?</Text>) : hasPermission === false ? (
        <Text style={styles.text}>No access to camera</Text>
      ) : (
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      )}
      
      {/* {scannedData && (
        <View style={styles.dataContainer}>
          <Text style={styles.text}>Item:</Text>
          <Text style={styles.text}>{scannedData}</Text>
        </View>
      )} */}

      {scanned && (
          
        <View style={styles.cartButt1}>
          <CartButton title="View Cart"  onPress={()=>  navigation.navigate('Items')}/>
        </View>
          )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#ffc107',
  },

  cartButt1:{
    height: 100, 
    // left:15,
    // top: 10,
  },

  scannerContainer: {
    flexDirection: 'column',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'baseLine',
    alignItems: 'baseline',
    backgroundColor: '#fff',
    // marginTop: 80,
    // marginBottom:80,
    // padding: 100,
  },

  // dataContainer: {
  //   padding: 10,
  //   backgroundColor: '#4b4b88',
  // },

  text: {
    color: 'white',
    textAlign: 'left',
    fontSize: width < 400 ? 16 : 24,
    // fontWeight: 'bold',
  },
});