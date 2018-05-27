import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Navigation from 'react-native-navigation';
import Logo from '../../components/Logo';
import startMainTabs from '../main/startMainTabs';



class AuthScreen extends Component {


    constructor(props) {
		super(props);

		this._switchToTabBased = this._switchToTabBased.bind(this);
	}

	_switchToTabBased() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'Wafi.Offers', 
                    label: 'Offers',        
                    title : 'Offers'
                },
                {
                    screen: 'Wafi.Brands', 
                    label: 'Brands',  
                    title : 'Brands'
                },
                {
                    screen: 'Wafi.Mall',
                    label: 'Mall',  
                    title : 'Mall'
                },
                {
                    screen: 'Wafi.HyperMarket', 
                    label: 'HyperMarket',  
                    title : 'HyperMarket'
                }
            ]
        });
    	          
	}

    handlePress = () => {
        this.props.navigator.push({
            screen: 'Wafi.Register',
            navigatorStyle: {
                navBarHidden: true
            },
        });
    };

    ForgotPassword = () => {
        this.props.navigator.push({
            screen: 'Wafi.Forgotpassword',
            navigatorStyle: {
                navBarHidden: true
            },
        });
    };




    render() {
        return (
            <LinearGradient colors={['#621C6C', '#8E0076', '#B8007F']} style={styles.linearGradient}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.container}>
                        <Logo />

                        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
                            placeholder="Email/Mobile" />
                        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
                            placeholder="Password" secureTextEntry={true} />
                        <TouchableOpacity style={styles.buttonBlock}>
                            <Text style={styles.buttonText} onPress={this._switchToTabBased}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.socialLoginWrapper}>

                            <Text style={styles.facebook} >Login with Facebook</Text>
                            <Text style={styles.google}>Login with Google</Text>

                        </View>
                    </View>
                    <View style={styles.singUpTextBlk}>
                        <TouchableOpacity>
                            <Text style={styles.singUpText} onPress={this.handlePress}>New here? Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.singUpText} onPress={this.ForgotPassword}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexGrow: 1,


    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
    },
    logoImg: {
        marginBottom: 30
    },
    inputBox: {
        margin: 5,
        width: '90%',
        color: 'rgba(255,255,255,.8)',
        padding: 10,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#ffffff',
        fontSize: 16,
        fontFamily: "MyriadPro-Regular",
    },
    buttonBlock: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 10,

        width: '90%',

        margin: 5,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        padding: 5,
        fontFamily: "MyriadPro-Regular"

    },
    socalLogin: {
        margin: 5,
        flexDirection: 'column'
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,

    },
    facebook: {
        backgroundColor: '#181F6C',
        width: '45%',
        padding: 15,
        fontSize: 13,
        borderRadius: 5,
        color: '#fff',
        textAlign: 'center',
        fontFamily: "MyriadPro-Regular",
    },
    google: {
        backgroundColor: '#FC0488',
        width: '45%',
        padding: 15,
        fontSize: 13,
        borderRadius: 5,
        color: '#fff',
        textAlign: 'center',
        marginLeft: 5,
        fontFamily: "MyriadPro-Regular"
    },
    singUpTextBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        width: '90%',

    },
    singUpText: {
        color: '#fff',
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: 'bold',
        fontFamily: "MyriadPro-Regular"
    }
});

export default AuthScreen;