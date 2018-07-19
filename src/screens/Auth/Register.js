import React, { Component }  from 'react';
import { AsyncStorage } from "react-native";
import { Navigation } from "react-native-navigation";
import {View, Text, StyleSheet, Image,TextInput,Alert, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




class AuthScreenRegister extends Component{

  constructor(props) {
      super(props)
      //AsyncStorage.clear()
      this.state = {
        UserFirstName: '',
        UserLastName: '',
        UserEmail: '',
        UserPhone: '',
        UserPassword: '',
        UserConfirmationPassword: '',

      }
  }

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
  componentDidMount() {
    this.retrieveItem('first_name');
    this.retrieveItem('last_name');
    this.retrieveItem('email');
    this.retrieveItem('phone');
    this.retrieveItem('is_logged_id');

    {this.state.is_logged_id == 1 &&
      this.startApp()
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
    handlePress = () => {
        this.props.navigator.push({
          screen: 'Wafi.AuthScreen',
          navigatorStyle:  {
            navBarHidden: true
          },
        });
      };

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

      fnRegister = () => {
        const { UserFirstName }  = this.state ;
        const { UserLastName }  = this.state ;
        const { UserEmail }  = this.state ;
        const { UserPhone }  = this.state ;
        const { UserPassword }  = this.state ;
        return fetch("http://admin.wafideals.com/apiregister", { method: 'POST' ,
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            first_name: UserFirstName,
            last_name: UserLastName,
            email: UserEmail,
            phone: UserPhone,
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
                Alert.alert(error)
            })
    }
    render(){
      {this.state.is_logged_id == 1 &&
        this.startApp()
      }
        return(
            <LinearGradient colors={['#621C6C', '#8E0076', '#B8007F']} style={styles.linearGradient}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
            <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="First Name" onChangeText={UserFirstName => this.setState({UserFirstName})} />
 <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Last Name" onChangeText={UserLastName => this.setState({UserLastName})} />
  <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Password"  secureTextEntry={true} onChangeText={UserPassword => this.setState({UserPassword})} />
 <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Confirm Password"  secureTextEntry={true} onChangeText={UserConfirmationPassword => this.setState({UserConfirmationPassword})} />
 <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Enter Your EMmail ID" keyboardType={'email-address'} onChangeText={UserEmail => this.setState({UserEmail})} />
 <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Mobile Number" keyboardType={'numeric'} onChangeText={UserPhone => this.setState({UserPhone})} />
 <TouchableOpacity style={styles.buttonBlock}>
                 <Text style={styles.buttonText} onPress= {()=>this.fnRegister()}>Register</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            <View style={styles.singUpTextBlk}>
            <TouchableOpacity>
                    <Text style={styles.singUpText}>Already Member?  <Text style={styles.singUpTextBold} onPress={this.handlePress}>Sign In</Text></Text>

                </TouchableOpacity>

            </View>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container : {

        alignItems : 'center',
        justifyContent : 'center',
        width:'100%',
       flexGrow : 1,


    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
      },
      inputBox : {
        margin : 5,
        width:'90%',
        color: 'rgba(255,255,255,.8)',
        padding : 10,
        borderRadius : 3,
        borderWidth: 2,
        borderColor: '#ffffff',
        fontSize : 16,
        fontFamily: "MyriadPro-Regular"
      },
      buttonBlock:{
          backgroundColor : '#ffffff',
          borderRadius: 5,
          padding:10,
          color:'rgba(0,0,0,1)',
          width: '90%',
          textAlign : 'center',
          margin: 5,
      },
      buttonText:{
         color:'#000000',
         fontSize : 16,
         textAlign: 'center',
         padding: 5,
         fontFamily: "MyriadPro-Regular"

      },
      singUpTextBlk:{
          flexDirection:'row',
          justifyContent:'center',
          flex: 1,
          width:'90%',
          alignItems:'center'
      },
      singUpText:{
          color:'#fff',
          fontSize:15,
          paddingHorizontal: 10,
          paddingVertical : 5,
          fontFamily: "MyriadPro-Regular"

      },
      singUpTextBold:{
        color:'#fff',
        fontSize:15,
        paddingHorizontal: 10,
        paddingVertical : 5,
        fontWeight : 'bold',
        fontFamily: "MyriadPro-Regular"
      }
});

export default AuthScreenRegister;
