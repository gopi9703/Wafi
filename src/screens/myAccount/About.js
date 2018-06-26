import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Logo from '../../components/Logo';

class About extends Component {
    render() {
        return (
            <View style={styles.bodyBg}>
                <Logo />
                <Text style={styles.AppName}>
                   Wafideals
                </Text>
                <Text style={styles.aboutText}>
                    Wafideals delivers all the useful information of offers all over the city. You can view general offers, and offers related to brands, malls and hypermarkets for better and easier user experience. There are lots of additional interesting features like sharing offers, locating store and more...
                </Text>
              
                <Text style={styles.pinkText}>
                    Produced By
                </Text>
                <Text style={styles.AppClient}>
                    Gulf Art International LLC
                </Text>
                <Text style={styles.AppURL}>
                    https://wafideals.com
                </Text>
                <Text style={styles.AppURL}>
                   copy right 2018 by Gulf Art International LLC
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 15,

    },
    aboutText: {
       
        padding: 10,
        lineHeight: 25,
        color: '#666666',
        fontSize: 16,
        fontFamily: "MyriadPro-Regular",

        textAlign : 'center'
    },
    pinkText : {
        paddingTop: 30,
        paddingBottom : 5,
        color: '#ec1172',
        fontSize : 18,
        fontFamily : 'MyriadPro-Semibold_2'

    },
    AppName:{
        color: '#333333',
        fontSize : 18,
        fontFamily : 'MyriadPro-Semibold_2'

    },
    AppClient:{
        paddingBottom : 5,
        color: '#333333',
        fontSize : 18,
        fontFamily : 'MyriadPro-Semibold_2'

    },
    AppClient:{
        paddingBottom : 5,
        color: '#333333',
        fontSize : 14,
        fontFamily : 'MyriadPro-Regular'

    }
});

export default About;