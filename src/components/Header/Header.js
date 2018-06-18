import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from 'react-native-navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import setStateModal from '../Modal/setStateModal';

class Header extends Component {

    constructor(props) {
        super(props)
    }

    showLeftMenu(navigator) {
        navigator.toggleDrawer({
            side: 'left'
        })
    }

    searchHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.Search',
            animated: true,
            animationType: 'slide-vertical', // 'fade' (for both) / 'slide-horizontal'
            tabBarHidden: true,
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                navBarSubtitleFontFamily: "MyriadPro-Regular",
                navBarComponentAlignment: 'center',
            }
        });
    }


    showHeaderModal = (navigator) => {
        navigator.showLightBox({
            screen: 'Wafi.setStateModal',
            passProps: {},
            style: {
                backgroundBlur: 'dark',
                backgroundColor: 'rgba(0,0,0,.5)',
                tapBackgroundToDismiss: true
            },
            adjustSoftInput: "resize",
        });
    }




    render() {
        return (
            <View>
                <View style={styles.HeaderBlk}>
                    <View style={styles.HeaderLhs}>
                        <View>
                            <TouchableOpacity onPress={() => this.showLeftMenu(this.props.navigator)}>
                                <Icon name="ios-menu" size={34} color="#ffffff" style={styles.hamburger} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.HeaderModal}>
                            <Image source={require('../../img/header_Logo.png')} style={styles.logoImg} />
                            <TouchableOpacity onPress={() => this.showHeaderModal(this.props.navigator)}>
                                <View style={styles.HeaderModalInner}>
                                    <Text style={styles.stateChangeText}> Muscat </Text>
                                    <Text>
                                        <Icon name="ios-pin" size={20} color="#ffffff" style={styles.map__pin} />
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.searchHandler(this.props.navigator)}>
                        <Icon name="ios-search" size={34} color="#ffffff" style={styles.hamburger} />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
    },
    HeaderBlk: {
        backgroundColor: '#0A266D',
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HeaderLhs: {
        flexDirection: 'row',
    },
    logoImg: {
        marginLeft: 5
    },
    hamburger: {
        padding: 5,
    },
    HeaderModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stateChangeText: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 16,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal : 2
    },
    HeaderModalInner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    map__pin: {
        marginLeft: 5,
        position: 'absolute',
        top: 5,
        borderColor: 'red',
        borderWidth: 1
    }
});

export default Header;