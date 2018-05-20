import React, { Component }  from 'react';
import {View, Text, StyleSheet } from 'react-native';


 class Logo extends Component{
    render(){
        return(
            <View>
                <Image source={require('../../img/logo.png')} />
            </View>
           
        );
    }
}


export default Logo;