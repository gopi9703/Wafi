import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,KeyboardAvoidingView, Dimensions} from 'react-native';

class SideDrawer extends Component{
    render(){
        return (
            <View style={{width: Dimensions.get("window").width * 0.8}}>
                <Text>
                    Side SideDrawer
                </Text>
            </View>
        );
    }
} 


export default SideDrawer;