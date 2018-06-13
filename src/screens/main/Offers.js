import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TextInput,TouchableOpacity,KeyboardAvoidingView, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import ProductCards from '../../components/ProductCards/ProductCards';
import Navigation from 'react-native-navigation';


class Offers extends Component{
  
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        // handle a deep link
        if (event.type == 'DeepLink') {
             const parts = event.link.split('/');
            if (parts[0] == 'AppExclusive') {
                // handle the link somehow, usually run a this.props.navigator command
                    this.props.navigator.resetTo({
                    screen: 'Wafi.AppExclusive', 
                    passProps: {}, 
                    animated: true, 
                });
            }
        }
    }
        

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
            
            <View style={{flex:1}}>
                <Header navigator={this.props.navigator} />
                <ScrollView ref={(c) => { this.parentScrollView = c; } }
>
                <SwipeableParallaxCarousel data={datacarousel} navigationType={'dots'} />
                <ProductCards  navigator={this.props.navigator} />
                </ScrollView>
            </View>
        );
    }
}




export default Offers;