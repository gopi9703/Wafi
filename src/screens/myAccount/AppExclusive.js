import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../components/ReusableComponents/FontStyle';


class AppExclusive extends Component {

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    static navigatorStyle = {
        navbarHidden: false,
    };


    render() {
        return (
            <View style={styles.bodyBg}>

                <View style={styles.appExclusvBlk}>
                    <View style={styles.ImgContainer}>
                        <Image source={{ uri: 'https://lh3.googleusercontent.com/-JohNgmiXVZk/VQERAP1p2-I/AAAAAAAAoO0/HsOPvdlQsVA/w530-h265-n/sd.png' }} style={styles.ExclusiveImg} />
                    </View>
                    <View style={styles.marketDesc}>
                        <View style={styles.appExclusvBlkText}>
                            <Text style={styles.OfferText}>Get 40% off on all products at kushals..</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                            <TouchableOpacity>
                                <Icon name="md-share" size={20} color="#BBBDBF" style={styles.share} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                            <FontStyle style={styles.daysLeft}>18</FontStyle>
                            <FontStyle style={styles.daysLeft}>days Left</FontStyle>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,

    },
    appExclusvBlk: {
        padding: 15,

    },

    ExclusiveImg: {
        width: '100%',
        height: Dimensions.get('window').height / 3,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        resizeMode: 'cover',
        borderColor: '#E6E7E8',

    },
    appExclusvBlkText: {
        backgroundColor: '#ffffff',
       

    },
    OfferText: {
        color: '#000000',
        fontSize: 13,
        fontFamily: "MyriadPro-Regular",
    },
    marketDesc: {

        width: '100%',
        borderTopWidth: 1,
        borderColor: '#D0D2D3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor : '#ffffff'
    },
    mallText: {
        color: '#58595B',
        fontSize: 12,
    },
    daysLeft: {
        color: '#58595B',
        fontSize: 14,
    },
    mallOfferText: {
        color: '#58595B',
        fontSize: 14,
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    share: {
        padding: 5,
    }
});

export default AppExclusive;