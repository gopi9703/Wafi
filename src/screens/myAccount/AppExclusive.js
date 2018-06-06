import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

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
    
    render(){
        return (
            <View>
                <Text>App Exclusive Offer</Text>
            </View>
        )
    }
}

export default AppExclusive;