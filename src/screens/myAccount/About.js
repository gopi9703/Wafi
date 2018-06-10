import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../components/Header/Header';

class About extends Component {
    render() {
        return (
            <View style={styles.bodyBg}>
                <Header navigator={this.props.navigator} />
                <Text style={styles.aboutText}>
                    Wafideals delivers all the useful information of offers all over the city. You can view general offers, and offers related to brands, malls and hypermarkets for better and easier user experience. There are lots of additional interesting features like sharing offers, locating store and more...
                </Text>
            </View> 
        )
    }
}


const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,

    },
    aboutText: {
        backgroundColor: '#ffffff',
        padding: 10,
        lineHeight: 25,
        color: '#282B32',
        fontSize: 16,
        fontFamily: "MyriadPro-Regular",
        margin : 15
    }
});

export default About;