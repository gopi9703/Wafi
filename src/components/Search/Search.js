import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductList from '../../components/ProductList/ProductList';

class Search extends Component {

    static navigatorStyle = {
        tabBarHidden: true,
        topBarElevationShadowEnabled: false,
        
    }
    componentWillMount() {
        this.props.navigator.toggleTabs({
            to: 'hidden',
            animate: true,
        })
        this.props.navigator.setTitle({title: 'Search'})
        setTimeout(() => {
            this.nameInput.focus();
        }, 50);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} enabled>
                <View style={styles.searchBg}>
                    <View style={styles.searchBlock}>
                        <Icon name="ios-search" size={26} color="#58595B" style={styles.hamburger} />
                        <TextInput clearButtonMode="always" ref={ref => { this.nameInput = ref }} style={styles.inputBox} underlineColorAndroid='rgba(255,255,255,0)' placeholderTextColor="#58595B"
                            placeholder="Search for Products" />
                    </View>
                </View>
                <ScrollView>
                    <ProductList />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    searchBg: {
        backgroundColor: '#0A266D',
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchBlock: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 0,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center'

    },
    inputBox: {
        fontSize: 16,
        fontFamily: "MyriadPro-Regular",
        width: '80%',
        color: '#58595B'

    }
});

export default Search;