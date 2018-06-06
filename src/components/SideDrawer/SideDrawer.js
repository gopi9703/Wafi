import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Navigation from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class SideDrawer extends Component {

    constructor(props) {
        super(props)
        this._goToMovies = this._goToMovies.bind(this);
    }


    _goToMovies() {
        this.props.navigator.popToRoot({
            screen: 'Wafi.AppExclusive'
        });
    }

    /*appExclusive = () => {
        this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true
          });
      
        this.props.navigator.handleDeepLink({ link: "Wafi.AppExclusive" });
      }  */



    render() {
        return (
            <View style={{ width: Dimensions.get("window").width * 0.8, backgroundColor: '#ffffff', flex: 1 }}>
                <Image source={require('../../img/sideDrawerImage.png')} style={styles.brandImg} />

                <TouchableOpacity onPress={this._goToMovies.bind(this)}>
                    <View style={styles.list__col}>
                        <FontAwesome name='shopping-bag' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>App Exclusive</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list__col}>
                        <FontAwesome name='exclamation-circle' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>About Us</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list__col}>

                        <Icon name="md-share" size={20} color="#ffffff" style={styles.iconStyler} />
                        <Text style={styles.list}>Share this App</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list__col}>
                        <FontAwesome name='star' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Rate this App</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list__col}>
                        <FontAwesome name='bell' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Notifications</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.list__col}>
                        <FontAwesome name='sticky-note' size={20} style={styles.iconStyler} />
                        <Text style={styles.list}>Terms</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
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