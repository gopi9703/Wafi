import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';


class mallInfo extends Component {
    
    render(){
        return (
            <View style={styles.bodyBg}>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Mall Timings
                        </Text>
                        <Text style={styles.mallsmallText}>
                            Monday to saturday 10 AM to 10 PM
                        </Text>
                    </View>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Food Timings
                        </Text>
                        <Text style={styles.mallsmallText}>
                        Monday to saturday 10 AM to 10 PM
                        </Text>
                    </View>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Lulu Hypermaket
                        </Text>
                        <Text style={styles.mallsmallText}>
                        Monday to saturday 10 AM to 10 PM
                        </Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
        padding: 10,
    },
    EventBanner: {
        width: '100%',
        aspectRatio: 10 / 5,
        resizeMode : 'contain',
       
        marginVertical : 5,

    },
    mallDesc : {
        backgroundColor : '#ffffff',
        padding : 10,
        borderBottomWidth : 1,
        borderColor : '#cccccc'
        
    },
    mallText :{
        fontSize : 13,
        color : '#000000',
        fontFamily: "MyriadPro-Regular", 
        lineHeight : 20,
    },
    mallTitle : {
        fontSize : 24,
        fontFamily : 'MyriadPro-Semibold_2',
        color : '#000000',
        paddingVertical : 10,
      
    },
    mallsmallText : {
        fontSize : 13,
    }

});

export default mallInfo;