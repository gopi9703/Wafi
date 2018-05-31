import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from 'react-native-navigation';
import ProductCards from '../../../components/ProductCards/ProductCards';
import BrandHeader from '../../../screens/main/BrandHeader';
import FontStyle from '../../../components/ReusableComponents/FontStyle';
import HeaderText from '../../../components/ReusableComponents/HeaderText';

class BrandsList extends Component {
    render() {
        return (
            <View style={styles.bodyBg}>
                <BrandHeader />
                <ScrollView >
                    <View style={{ position: 'relative' }}>
                        <Image source={{ uri: 'http://www.dunkindonuts.pk/promo.jpg' }} style={styles.BrandBanner} />
                    </View>
                    <View style={styles.BrandDescWrap}>
                        <View style={styles.blkViewBrand}>
                            <FontStyle style={styles.headerTitle}>
                                <HeaderText>Dunkin Donuts</HeaderText>
                            </FontStyle>
                        </View>
                        <View style={styles.blkViewBrand}>

                            <FontStyle style={styles.textColor}>
                                <HeaderText>Sample Description</HeaderText>
                            </FontStyle>
                        </View>
                    </View>
                    <ProductCards navigator={this.props.navigator} />
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
        height: 220,
        resizeMode: 'contain',
        borderRadius: 5,

    },
    BrandDescWrap: {
        backgroundColor: "#ffffff",
        padding: 15,
    },
    blkViewBrand: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    },
    headerTitle: {
        color: '#000'
    },
    textColor: {
        color: '#58595B'
    },
    offerDesc: {
        borderColor: '#58595B',
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingVertical: 15,
        marginTop: 15
    },
    headerTitle: {
        color: '#000'
    },
    textColor: {
        color: '#58595B'
    },
});


export default BrandsList; 