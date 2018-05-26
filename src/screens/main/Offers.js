import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TextInput,TouchableOpacity,KeyboardAvoidingView, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import ProductCards from '../../components/ProductCards/ProductCards';


class Offers extends Component{

    render(){

        const datacarousel = [
            {
                "id": 339964,
              
                "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
            },
            {
                "id": 315635,
                "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
            },
            {
                "id": 339403,

                "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
            },
          ];

        return(
            
            <View>
                <Header />
                <ScrollView ref={(c) => { this.parentScrollView = c; }}
>
                <SwipeableParallaxCarousel data={datacarousel} navigationType={'dots'} />
                <ProductCards  />
                </ScrollView>
            </View>
        );
    }
}




export default Offers;