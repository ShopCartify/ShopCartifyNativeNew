import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnotherButton from '../const/AnotherButton'
import { Dimensions,StyleSheet } from 'react-native';


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

  const handleBarCodeScanned = ({ type, data }) => {

    setScanned(true);
    setScannedData(data);

    AsyncStorage.setItem(product, data)
    navigation.navigate('productDisplay')
  };


  return (
    <View style={styles.container}>
      {hasPermission === null ? (
        <Text style={styles.text}>Camera permission?</Text>
      ) : hasPermission === false ? (
        <Text style={styles.text}>No access to camera</Text>
      ) : (
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      )}
      {scannedData && (
        <View style={styles.dataContainer}>
          {/* <Text style={styles.text}>Item:</Text> */}
          {/* <Text style={styles.text}>{scannedData}</Text> */}
        </View>
      )}

      {scanned && (
          
        <View style={{height:100,width:400,left:100,top:-55}}>
          <AnotherButton title="view cart"  onPress={()=>  navigation.navigate('Items')}/>
        </View> 

          )}
          
          <View style={{height:100,width:400,left:340}}>
          <AnotherButton title="View Cart"  onPress={()=> navigation.navigate('Items')}/>
          </View>           
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#4b4b88',
  },
  scannerContainer: {
    flexDirection: 'row',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'baseLine',
    alignItems: 'baseline',
    backgroundColor: '#4b4b88',
  },
  dataContainer: {
    padding: 40,
    backgroundColor: '#4b4b88',
  },
  text: {
    color: 'white',
    textAlign: 'left',
    fontSize: width < 400 ? 16 : 24,
    // fontWeight: 'bold',
  },
});