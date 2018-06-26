import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';


 class Logo extends Component{
    render(){
        return(
            <View>
                <Image source={require('../img/logo.png')} style={styles.logoImg} />
            </View>
           
        );
    }
}


const styles = StyleSheet.create({
    logoImg : {
        marginBottom : 30
      }
});

export default Logo;