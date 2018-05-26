import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableOpacity, Dimensions} from 'react-native';


class ProductCards extends Component{
    render(){
        return (
            <View style={styles.prdtWrapr}>  
               <View style={styles.gridItem}>
                   <Text>ProductCards</Text>
               </View>
               <View style={styles.gridItem}>
                   <Text>ProductCards</Text>
               </View>
               <View style={styles.gridItem}>
                   <Text>ProductCards</Text>
               </View>
               <View style={styles.gridItem}>
                   <Text>ProductCards</Text>
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
        alignItems: 'center',

        padding : 15,
        marginBottom : 10,
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
        elevation: 2
        
      },
});


export default ProductCards;