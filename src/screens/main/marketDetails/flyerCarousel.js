import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native';

class flyerCarouel extends Component {
    static navigatorStyle = {
        tabBarHidden: true,
    }
    componentWillMount() {
        this.props.navigator.toggleTabs({
            to: 'hidden',
            animate: true,
        })
    }


    render(){
        return (
            <View style={styles.bodyBg}>
                <Text style={{color : '#ffffff'}}>Flyer Caorusel</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#000000',
        flex: 1,
        padding: 10,
    },
});

export default flyerCarouel;