import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

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
          <Text style={styles.text}>Item:</Text>
          <Text style={styles.text}>{scannedData}</Text>
        </View>
      )}

      {scanned && (
            <Button
            color="#517405"
              title={'Scan Again'}
              onPress={() => setScanned(false)}
            />
          )}
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#ff9b50',
  },
  scannerContainer: {
    flexDirection: 'row',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'baseLine',
    alignItems: 'baseline',
    backgroundColor: '#ff9b50',
  },
  dataContainer: {
    padding: 40,
    backgroundColor: '#ff9b50',
  },
  text: {
    color: 'white',
    textAlign: 'left',
  },
});