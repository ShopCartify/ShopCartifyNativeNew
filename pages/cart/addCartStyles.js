
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    houseall: {
      backgroundColor: '#4b4b88',
      height:'200%'
    },
    allItems:{
      justifyContent: 'space-around',
      alignSelf: 'center',
      alignItems: 'center',
      marginTop:-70,
      borderRadius:10,
      height:400,
        
    },
    form:{
        // backgroundColor:'white',
        height:600,
        marginTop:400,
        borderRadius:10,
        width:400,

    },
    h1: {
      textAlign: 'center',
    //   marginBottom: 20,
      marginTop:20,
      fontSize: 20,
      fontWeight: '900',
      color:'white'
    },
    p: {
      textAlign: 'center',
      fontSize: 20,
      marginTop:20,
    //   height:60,
      fontWeight:'bold',
      color:'#ffc107'
      
    },
    innerhouse:{
        // marginTop:80,
        marginLeft:10,
    },
   
    productInfoTwo:{
        flexDirection: 'row', 
        alignItems: 'center', 
        top:60,
        left:10
    },
 
    add:{
        borderWidth: 1,
            borderColor: 'green',
            flexDirection: 'row', 
            justifyContent: 'space-between',
            width:380,
            height:100, 
            borderRadius:10,
            backgroundColor:'white',
            right:10, 
    },

    ccc:{
        flexDirection: 'row', 
        marginTop:25,
        justifyContent:'space-between',
        marginRight:10,
    },


    totl:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:80
    },
  
    productName:{
        fontWeight:'bold',
        fontSize:17
    },
    productDesc:{
        fontSize:15
    },

    price:{
        fontSize:17,
        width:100
    
    },
    amount:{
        fontWeight:'bold',
        marginLeft:20,
        fontSize:20,
        color:'white'
    },
    n:{
        fontWeight:'bold',
        marginRight:40,
        color:'white',
        fontSize:20,
        

    },
    buttonTe:{
        borderWidth: 1,
        fontWeight:'bold',
        borderColor: 'green',
        borderRadius:5,
        height:20,
        width:20,
        borderLeftWidth:6,
        left:30,
        top:10
    },
    buttonWrite:{
        fontWeight:'900',
        justifyContent:'space-between',
        left:30,
        top:5,
        fontSize:25

    },
    buttonWritee:{
        fontWeight:'900',
        justifyContent:'space-between',
        left:30,
        top:5,
        fontSize:25
    },
    productName:{
        left:10,
        fontSize:20,
        fontWeight:'900',
        top:10,
        color:'#4b4b88'
    },
    productDesc:{
        left:20,
        fontSize:20,
        fontWeight:'900',
        top:10,
        color:'#4b4b88'

    },
    price:{
        left:30,
        fontSize:20,
        fontWeight:'900',
        top:10,
        color:'#4b4b88'

    },
    logo:{
        top:50,
        left:80
    }
  })