import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BrandHeader from '../../main/BrandHeader';

class BrandDetails extends Component {
    render() {
        return (
            <View style={styles.bodyBg}>
                <BrandHeader />

                <Image source={{ uri: 'http://www.dunkindonuts.pk/promo.jpg' }} style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: undefined,
                    height: undefined,
                    resizeMode : 'cover'
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
        padding: 5,
    },
    BrandBanner: {
        width: '100%',
        height: 220,
        resizeMode: 'contain',


    },
});

export default BrandDetails;