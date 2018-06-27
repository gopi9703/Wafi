import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';


class EventInfo extends Component {
    
    render(){
        return (
            <View style={styles.bodyBg}>
                    <Image source={{ uri: 'http://www.dunkindonuts.pk/promo.jpg' }} style={styles.EventBanner} />
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            DunKin Donuts Mall
                        </Text>
                        <Text style={styles.mallText}>
                            DunKin Donuts Mall DunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts MallDunKin Donuts Mall
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
        padding : 20,
        
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
      
    }

});

export default EventInfo;