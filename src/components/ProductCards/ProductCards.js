import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableOpacity, Dimensions} from 'react-native';
import HeaderText from '../ReusableComponents/HeaderText';
import FontStyle from '../ReusableComponents/FontStyle';


class ProductCards extends Component{
    render(){
        return (
            <View style={styles.prdtWrapr}>  
               <View style={styles.gridItem}>
                      <Image source={require('../../img/product_01.jpg')} style={styles.ProductImg} />
                       <View style={styles.prodOfferWrp}>
                            <Text style={styles.center}>50% OFF</Text>
                        </View>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>                     
                         </View>
               </View>
               <View style={styles.gridItem}>
                      <Image source={require('../../img/product_01.jpg')} style={styles.ProductImg} />
                       <View style={styles.prodOfferWrp}>
                            <Text style={styles.center}>50% OFF</Text>
                        </View>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>                     
                         </View>
               </View>
               <View style={styles.gridItem}>
                      <Image source={require('../../img/product_01.jpg')} style={styles.ProductImg} />
                       <View style={styles.prodOfferWrp}>
                            <Text style={styles.center}>50% OFF</Text>
                        </View>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>                     
                         </View>
               </View>
               <View style={styles.gridItem}>
                      <Image source={require('../../img/product_01.jpg')} style={styles.ProductImg} />
                       <View style={styles.prodOfferWrp}>
                            <Text style={styles.center}>50% OFF</Text>
                        </View>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>                     
                         </View>
               </View>
               <View style={styles.gridItem}>
                      <Image source={require('../../img/product_01.jpg')} style={styles.ProductImg} />
                       <View style={styles.prodOfferWrp}>
                            <Text style={styles.center}>50% OFF</Text>
                        </View>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>                     
                         </View>
               </View>
               
            </View>

                
            
        )
    }
}

const styles = StyleSheet.create({
    prdtWrapr : {
        paddingTop: '2%',
        paddingBottom: '2%',
        flex : 1,
        flexDirection : 'row',
        width: '100%',
        alignItems : 'center',
        flexWrap: 'wrap',
        


    },
    gridItem: {
        width: '46%', //Device width divided in almost a half
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom : 15,
        marginLeft: '2.5%',
        backgroundColor : '#ffffff',
        borderRadius : 5,
        shadowColor: '#cccccc',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 2,
        
        
      },
      prdDescr:{
        flexDirection:'column',
        padding:10,
        flexWrap: 'wrap',
        width : '100%',
        borderColor : '#ff0000'
    },
      ProductImg :{
        width: '100%',
        height:180,
        resizeMode: 'cover'
      },
      offerTitle :{
          color : '#000000',
          fontSize : 20,
          width : '100%',
      },
      offerDesc : {
          color : '#58595B',
          fontSize: 16,

      },
      prodOfferWrp:{
          flexDirection : 'column',
          justifyContent : 'center',
          width : '100%',


      },
      prodOffPercet:{
          backgroundColor : '#F6921E',
          color: '#ffffff',
          fontSize : 18,
          borderRadius : 25,
          paddingTop : 5,
          paddingBottom : 5,
          fontWeight: 'bold',
          textAlign : 'center',
          width : '70%',  
      },
      center : {
          textAlign : 'center',
          backgroundColor : '#F6921E',
          paddingVertical : 5,
          color:'#ffffff',
          fontSize : 18,
          borderRadius : 25,
          marginTop : -20,
          marginHorizontal : '10%'
      }
});


export default ProductCards;