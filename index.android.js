import React from "react";
import { Text } from "react-native";
import { Navigation } from 'react-native-navigation';

class Simple extends React.Component {
    render() {
        return (<Text>Hello, I'm Simple.</Text>);
    }
}

Navigation.registerComponent('simple', () => Simple);
Navigation.startSingleScreenApp({
    screen: {
        screen: 'simple'
    }
});
