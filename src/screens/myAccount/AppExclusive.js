import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../components/Header/Header';


class AppExclusive extends Component {

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent(event) {
        // handle a deep link
        console.log(event.type);
        if (event.type == 'DeepLink') {
            var parts = event.link.split('/');
            console.log(parts[0]);
            if (parts[0] == 'Wafi.AppExclusive') {

                // handle the link somehow, usually run a this.props.navigator command
                this.props.navigator.resetTo({

                    screen: "Wafi.AppExclusive",
                    animated: true
                });

            }
        }
    }

    render() {
        return (
            <View style={styles.bodyBg}>
                <Header navigator={this.props.navigator} />
                <View style={styles.appExclusvBlk}>
                    <View style={styles.ImgContainer}>
                        <Image source={{ uri: 'https://lh3.googleusercontent.com/-JohNgmiXVZk/VQERAP1p2-I/AAAAAAAAoO0/HsOPvdlQsVA/w530-h265-n/sd.png' }} style={styles.ExclusiveImg} />
                    </View>
                    <View style={styles.appExclusvBlkText}>
                        <Text style={styles.OfferText}>Get 40% off on all products at kushals..</Text>
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
        height: 250,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        resizeMode: 'cover',
    },
    appExclusvBlkText : {
        backgroundColor : '#ffffff',
        padding:15,
    },
    OfferText:{
        color:'#000000',
        fontSize : 15,
        fontFamily: "MyriadPro-Regular", 
    }
});

export default AppExclusive;