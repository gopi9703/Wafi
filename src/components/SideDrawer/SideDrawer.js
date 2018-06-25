import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Navigation from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Share from 'react-native-share';

class SideDrawer extends Component {

    static navigatorStyle = {
        tabBarHidden: true,
        topBarElevationShadowEnabled: false,

    }

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    onCancel() {
        console.log("CANCEL")
        this.setState({ visible: false });
    }
    onOpen() {
        console.log("OPEN")
        this.setState({ visible: true });
    }




    _navigate(screen) {
        this.props.navigator.showModal({
            screen: screen,
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                navBarSubtitleFontFamily: "MyriadPro-Regular",
                navBarComponentAlignment: 'center',
            }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });

        this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true
        });
    }

    render() {

        let shareOptions = {         
            title: "Wafi Deals",
            message: "Get all your favourite Shopping Offers in one app, Hundreds of new offers are available every week. Download Wafi Deals to find the latest deals & offers on",
            url: 'https://wafideals.com',
            subject: "Download Wafi Deals to find the latest deals & offers : https://wafideals.com" //  for email
            
        };

        return (
            <View style={{ width: Dimensions.get("window").width * 0.8, backgroundColor: '#ffffff', flex: 1 }}>
                <Image source={require('../../img/sideDrawerImage.png')} style={styles.brandImg} />

                <TouchableOpacity onPress={() => this._navigate('Wafi.AppExclusive')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='shopping-bag' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>App Exclusive</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._navigate('Wafi.MyAccount')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='user-circle' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>My Account</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this._navigate('Wafi.About')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='exclamation-circle' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>About Us</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    Share.open(shareOptions);
                }}>
                    <View style={styles.list__col}>

                        <Icon name="md-share" size={20} color="#ffffff" style={styles.iconStyler} />
                        <Text style={styles.list}>Share this App</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._navigate('Wafi.About')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='star' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Rate this App</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._navigate('Wafi.Notifications')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='bell' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Notifications</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._navigate('Wafi.Terms')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='sticky-note' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Terms</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._navigate('Wafi.AuthScreen')}>
                    <View style={styles.list__col}>
                        <FontAwesome name='sign-in' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Login</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    drawerBlk: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    text: {
        color: 'red',
        fontSize: 16,
    },
    brandImg: {
        resizeMode: 'cover',
        width: '100%',
        height: 150
    },
    list__col: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    list: {
        fontSize: 16,
        color: '#282B32',

        alignItems: 'center',
    },
    iconStyler: {
        color: '#282B32',
        paddingHorizontal: 20,
    }
});




export default SideDrawer;
