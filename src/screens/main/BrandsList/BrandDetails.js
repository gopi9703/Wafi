import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BrandHeader from '../../main/BrandHeader';

class BrandDetails extends Component {
    render() {
        return (
            <View style={styles.bodyBg}>
                <BrandHeader />
                <Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/07af3819755273.562dfb875c2b9.jpg' }} style={styles.BrandBanner}  />
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
        height: Dimensions.get('window').height/1.5,
        resizeMode : 'contain',
        borderColor : 'red',
        borderWidth : 1,
        marginVertical : 5,

    },
});

export default BrandDetails;