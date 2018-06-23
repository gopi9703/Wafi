import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BrandHeader from '../../main/BrandHeader';

class BrandDetails extends Component {
    
    render() {
        return (
            <View style={styles.bodyBg}>
                <ScrollView>
                    <BrandHeader />
                    <Image source={{ uri: 'http://www.dunkindonuts.pk/promo.jpg' }} style={styles.BrandBanner} />
                    <View style={styles.brandInfo}>
                        <Text style={styles.brandHdr}>DunKin Donuts</Text>
                        <Text style={styles.mallDescTxt}>Description</Text>
                    </View>
                </ScrollView>
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
        aspectRatio: 10 / 5,
        resizeMode: 'contain',
        marginVertical: 5,

    },
    brandInfo: {
        backgroundColor: '#ffffff',
        padding: 15,

    },
    brandHdr: {
        fontSize: 14,
        color: '#000000',
        fontFamily: "MyriadPro-Semibold_2",
        lineHeight: 20,
    },
    mallDescTxt: {
        color: '#58595B',
        flex: 1, 
        flexWrap: 'wrap',
        fontSize : 12,
    }
});

export default BrandDetails;