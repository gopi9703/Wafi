import React, { Component }  from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FontStyle = props => (
    <Text {...props} style={[styles.fontStyle, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
    fontStyle : {
        fontFamily: "MyriadPro-Regular", 
    }
});

export default FontStyle;