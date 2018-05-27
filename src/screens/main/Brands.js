import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import ProductCards from '../../components/ProductCards/ProductCards';


class Brands extends Component{

    render(){
        return(
            <View style={{flex:1}}> 
                <Header />  
                <ScrollView ref={(c) => { this.parentScrollView = c; } }>
                <View style={styles.filtrBlk}>
                    <TouchableOpacity>
                      <Text style={styles.fltrBrn}>Fashion </Text>
                    </TouchableOpacity>   
                    <TouchableOpacity>
                        <Text style={styles.fltrBrn}>Footwear </Text>
                    </TouchableOpacity>     
                    <TouchableOpacity>   
                        <Text style={styles.fltrBrn}>Bags </Text>
                    </TouchableOpacity>  
                    <TouchableOpacity>         
                         <Text style={styles.fltrBrn}>Foods </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity>    
                         <Text style={styles.fltrBrn}>Electronics </Text>
                    </TouchableOpacity> 
                     <TouchableOpacity>    
                         <Text style={styles.fltrBrn}>Watch </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity>   
                     <Text style={styles.fltrBrn}>Jewellery </Text>
                    </TouchableOpacity> 
                </View>
                     <ProductCards  />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    filtrBlk:{
        padding : 10,
        flexDirection : 'row',
        flex : 1,
        flexWrap: 'wrap',
    },
    fltrBrn : {
        borderRadius : 20,
        backgroundColor : '#929497',
        paddingVertical : 8,
        paddingHorizontal : 15,
        fontSize : 15,
        color: '#ffffff',
        textAlign : 'center',
        marginHorizontal : '2%',
        marginVertical : 5,
        alignItems : 'center'
    }
});

export default Brands;