import React, { Component }  from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderText = props => (
    <Text {...props} style={[styles.titleHeading, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
    titleHeading : {
        fontSize : 16,
        fontWeight : 'bold'
    }
});

export default HeaderText;