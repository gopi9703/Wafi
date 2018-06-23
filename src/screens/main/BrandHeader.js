import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../components/ReusableComponents/FontStyle';
import HeaderText from '../../components/ReusableComponents/HeaderText';

class BrandHeader extends Component {
    render() {
        return (
            <View style={styles.BrandIntro}>
                <View>
                    <Image source={{ uri: 'https://res.cloudinary.com/simpleview/image/upload/crm/paducah/Dunkin-Donuts-Paducah-Kentucky0-9e503d415056a36_9e503ed3-5056-a36a-0a8f8108bf00f366.jpg' }} style={styles.BrandLogo} />
                </View>
                <View style={styles.infoWrpr}>
                    <TouchableOpacity>
                        <View style={styles.IconBlk}>
                            <Icon name="ios-call" size={24} color="#ffffff" style={styles.iconStyler} />
                            <FontStyle> <Text style={[styles.iconText]}>Contact</Text></FontStyle>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.IconBlk}>
                            <Icon name="md-share" size={22} color="#ffffff" style={[styles.iconStyler, styles.share]} />
                            <Text style={styles.iconText}>Share</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.IconBlk}>
                            <Icon name="ios-heart" size={22} color="#ffffff" style={[styles.iconStyler, styles.favorite]} />
                            <Text style={styles.iconText}>My Fav</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}



const styles = StyleSheet.create({

    BrandIntro: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    BrandLogo: {
        width: 60,
        height: 60,
    },
    iconStyler: {
        color: '#A7802F',
        borderColor: '#BBBDBF',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 9,
        paddingVertical: 5,

    },
    infoWrpr: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    IconBlk: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,

    },
    iconText: {
        fontSize: 14,
    },
    location: {
        paddingHorizontal: 10
    },
    BrandBanner: {
        width: '100%',
        height: 220,
        resizeMode: 'contain',
        borderRadius: 5,

    },
    favorite: {
        paddingHorizontal: 7,
        paddingTop: 8,
        paddingBottom: 4,
    },
    share: {
        paddingHorizontal: 8,
    }

});

export default BrandHeader; 