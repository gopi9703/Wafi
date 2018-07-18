import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import { AsyncStorage } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Navigation } from "react-native-navigation";
import Logo from '../../components/Logo';
import Offers from '../main/Offers';
import Brands from '../main/Brands';


class AuthScreen extends Component {


    constructor(props) {
		super(props);
    this.state = {
      UserFirstName: '',
      UserLastName: '',
      UserEmail: '',
      UserPhone: '',
      UserPassword: '',
      UserConfirmationPassword: '',

    }
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

    async retrieveItem(key) {
      try {
        const retrievedItem =  await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        {key == 'first_name' &&
          this.setState({'UserFirstName': item})
        }
        {key == 'last_name' &&
          this.setState({'UserLastName': item})
        }
        {key == 'email' &&
          this.setState({'UserEmail': item})
        }
        {key == 'phone' &&
          this.setState({'UserPhone': item})
        }
        {key == 'is_logged_id' &&
          this.setState({'is_logged_id': item})
        }
        return item;
      } catch (error) {
        console.log(error.message);
      }
    }

    async storeItem(key, item) {
  try {
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}

      // and then
      startApp = () => {
        Navigation.startTabBasedApp({
          tabs: [
            {
              screen: 'Wafi.Offers',
              label: 'Offers',
              title: 'Offers',
              icon: require('../../icons/offer.png'),
              navigatorStyle: {
                navBarHidden: true
              }
            },
            {
              screen: 'Wafi.Brands',
              label: 'Brands',
              title: 'Brands',
              icon: require('../../icons/Brand.png'),
              navigatorStyle: {
                navBarHidden: true
              }
            },
            {
              screen: 'Wafi.Mall',
              label: 'Mall',
              title: 'Mall',
              icon: require('../../icons/mall.png'),
              navigatorStyle: {
                navBarHidden: true
              }
            },
            {
              screen: 'Wafi.HyperMarket',
              label: 'Market',
              title: 'Market',
              icon: require('../../icons/market.png'),
              navigatorStyle: {
                navBarHidden: true
              }
            }
          ],
          appStyle: {
            orientation: 'portrait',
            tabBarButtonColor: '#4d535e',
            tabBarSelectedButtonColor: '#ec1172',
            tabBarBackgroundColor: '#ffffff',
            initialTabIndex: 0,
            tabBarTranslucent: true,
            forceTitlesDisplay: true,
            tabFontSize: 13,
            selectedTabFontSize: 13,
            navBarTitleFontFamily: "MyriadPro-Regular",
            navBarNoBorder: true,
          },
          animationType: 'fade',
          drawer: {
            left: {
              screen: 'Wafi.SideDrawer',
            },
          }

        });
    }

    fnLogin = () => {
      const { UserEmail }  = this.state ;
      const { UserPassword }  = this.state ;
      return fetch("http://admin.wafideals.com/apilogin", { method: 'POST' ,
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          email: UserEmail,
          password: UserPassword
        })
      })
          .then((response) => response.json())
          .then((responseJson) => {
            {(responseJson.id) &&
              this.storeItem('is_logged_id', 1);
              this.storeItem('customer_id', responseJson.id);
              this.storeItem('first_name', responseJson.first_name);
              this.storeItem('last_name',responseJson.last_name);
              this.storeItem('phone',responseJson.phone);
              this.storeItem('email' , responseJson.email);
              this.startApp()
            }
          })
          .catch((error) => {
              console.error(error)
          })
  }


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
                            <Text style={styles.buttonText} onPress= {()=>this.fnLogin()}>Login</Text>
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
