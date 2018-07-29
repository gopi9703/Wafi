import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Navigation } from "react-native-navigation";
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import misllaneous from "../../helper"

const ACCESS_TOKEN = 'access_token';

class AuthScreenRegister extends Component {

  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      is_logged_id: '',
      confirm_password: '',
      userFname : true,
      userLname : true,
      userEmailV : true,
      userMobile : true,
      userPwd : true,
      userCpwd : true,
    }
  }
  componentWillMount() {
    this.getToken(ACCESS_TOKEN);
  }

  async storeToken(accessToken) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
    } catch(error) {
      console.log("something went wrong...!");
    }
  }

  async getToken() {
    try {
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      token = JSON.parse(token);
      if(token.id) {
        this.startApp();
      }
    } catch(error) {
      console.log("something went wrong...!");
    }
  }

  async removeToken() {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN);
    } catch(error) {
      console.log("something went wrong...!");
    }
  }

  validate(text, type) {
      nameReg = /^[a-zA-Z]+$/
      passwordReg = /^[A-Z0-9a-z]+$/
      mobileReg = /^(\+{0,1}?[0-9]{1,3}\-{0,1}?\ {0,1}?)?[0-9]{9,11}$/
      emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

      if(type=="userfirstName")
      {
          this.setState({
            userFname : false,
          })
          if(nameReg.test(text))
          {
              this.setState({
                first_name: text,
                userFname : true,
              })
          }
          else
           {
              this.setState({
                userFname : false,
              })
          }
      }

     else if(type=="userlastName")
      {
        this.setState({
          userLname : false,
        })
        if(nameReg.test(text))
        {
            this.setState({
              last_name:text,
              userLname : true,
            })
        }
        else
         {
            this.setState({
              userLname : false
            })
        }
      }
      else if(type=="userpwd")
      {
        this.setState({
          userPwd : false,
        })
        if(passwordReg.test(text))
        {
            this.setState({
              password:text,
              userPwd : true,
            })
        }
        else
         {
            this.setState({
              userPwd : false,
            })
        }
      }
      else if(type=="cuserpwd")
      {
        this.setState({
          userCpwd : false,
        })
        if(passwordReg.test(text))
        {
            this.setState({
              confirm_password:text,
              userCpwd : true
            })
        }else
        {
          this.setState({
            userCpwd : false
          })
        }

        if(this.state.password != text)
         {
            this.setState({
              userCpwd : false
            })
        }else
        {
          this.setState({
            userCpwd : true
          })
        }
      }
      else if(type=="usrMbl")
      {
        this.setState({
          userMobile : false,
        })
        if(mobileReg.test(text))
        {
            this.setState({
              phone:text,
              userMobile : true
            })
        }
        else
         {
            this.setState({
              userMobile : false
            })
        }
      }
      else if(type=="usrMail")
      {
        this.setState({
          userEmailV : false,
        })
        if(emailReg.test(text))
        {
            this.setState({
              email:text,
              userEmailV : true
            })
        }
        else
         {
            this.setState({
              userEmailV : false
            })
        }
      }
  }

  componentDidMount()
  {

  }


  startApp = () =>
  {
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

  handlePress = () =>
  {
    this.props.navigator.push({
      screen: 'Wafi.AuthScreen',
      navigatorStyle: {
        navBarHidden: true
      },
    });
  };

  fnRegister = () =>
  {
    if(!this.state.userFname)
    {
      Alert.alert("Please enter valid first name");
      return false;
    }
    if(!this.state.userLname)
    {
      Alert.alert("Please enter valid last name");
      return false;
    }
    if(!this.state.userPwd)
    {
      Alert.alert("Please enter valid password");
      return false;
    }
    if(!this.state.userCpwd)
    {
      Alert.alert("Password and confirm password not matching");
      return false;
    }
    if(!this.state.userMobile)
    {
      Alert.alert("Please enter valid mobile number");
      return false;
    }
    if(!this.state.userEmailV)
    {
      Alert.alert("Please enter valid email id");
      return false;
    }
    if(this.state.first_name != '' && this.state.last_name != '' && this.state.email != '' && this.state.phone != '' && this.state.password != '' && this.state.userFname && this.state.userLname && this.state.userPwd && this.state.userMobile && this.state.userCpwd && this.state.userEmailV)
    {
      const { first_name } = this.state;
      const { last_name } = this.state;
      const { email } = this.state;
      const { phone } = this.state;
      const { password } = this.state;
      return fetch("http://admin.wafideals.com/apiregister",
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone: phone,
          password: password,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.storeToken(responseJson);
        this.startApp()
      })
      .catch((error) =>
      {
        console.error(error)
        Alert.alert('Oops...! Something went wrong. Please try again')
      })
    }else
    {
      Alert.alert("Please enter all required fields")
    }
  }
  render() {
    return (
      <LinearGradient colors={['#621C6C', '#8E0076', '#B8007F']} style={styles.linearGradient}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.container}>
            <TextInput style={[styles.inputBox, !this.state.userFname?styles.error:null]} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
              placeholder="First Name" onChangeText={(text)=> this.validate(text, 'userfirstName')} />
            <TextInput style={[styles.inputBox, !this.state.userLname?styles.error:null]} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
              placeholder="Last Name"  onChangeText={(text)=> this.validate(text, 'userlastName')}  />
            <TextInput style={[styles.inputBox, !this.state.userPwd?styles.error:null]} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
              placeholder="Password" secureTextEntry={true} onChangeText={(text)=> this.validate(text, 'userpwd')} />
            <TextInput style={[styles.inputBox, !this.state.userCpwd?styles.error:null]} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
              placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text)=> this.validate(text, 'cuserpwd')}  />
            <TextInput style={[styles.inputBox, !this.state.userEmailV?styles.error:null]} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
              placeholder="Enter Your EMmail ID" keyboardType={'email-address'} onChangeText={(text)=> this.validate(text, 'usrMail')} />
            <TextInput style={[styles.inputBox, !this.state.userMobile?styles.error:null]} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="white"
              placeholder="Mobile Number" keyboardType={'numeric'} onChangeText={(text)=> this.validate(text, 'usrMbl')}  />
            <TouchableOpacity style={styles.buttonBlock}>
              <Text style={styles.buttonText} onPress={() => this.fnRegister()}>Register</Text>
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
  inputBox: {
    margin: 5,
    width: '90%',
    color: 'rgba(255,255,255,.8)',
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#ffffff',
    fontSize: 16,
    fontFamily: "MyriadPro-Regular"
  },
  buttonBlock: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    color: 'rgba(0,0,0,1)',
    width: '90%',
    textAlign: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
    fontFamily: "MyriadPro-Regular"

  },
  singUpTextBlk: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    width: '90%',
    alignItems: 'center'
  },
  singUpText: {
    color: '#fff',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: "MyriadPro-Regular"

  },
  singUpTextBold: {
    color: '#fff',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
    fontFamily: "MyriadPro-Regular"
  },
  error : {
    borderWidth : 2,
    borderColor : 'red'
}
});

export default AuthScreenRegister;
