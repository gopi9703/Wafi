import React, { Component }  from 'react';
import {View, Text, StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Navigation } from "react-native-navigation";

const ACCESS_TOKEN = 'access_token';

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      is_logged_id: '',
      passwordValidate : true,
      nameValidate : true,
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
      if(token !== null) {
        if(token.id) {
          this.startApp();
        } else {
          this.startRegistration();
        }
      }else {
        this.startRegistration();
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

  startRegistration() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: "Wafi.Register",
        navigatorStyle: {
          navBarHidden: true
        },
      }
    });
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'Wafi.Offers',
          label: 'Offers',
          title: 'Offers',
          icon: require('../../src/icons/offer.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        },
        {
          screen: 'Wafi.Brands',
          label: 'Brands',
          title: 'Brands',
          icon: require('../../src/icons/Brand.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        },
        {
          screen: 'Wafi.Mall',
          label: 'Mall',
          title: 'Mall',
          icon: require('../../src/icons/mall.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        },
        {
          screen: 'Wafi.HyperMarket',
          label: 'Market',
          title: 'Market',
          icon: require('../../src/icons/market.png'),
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
   render(){
      return(
          <View style={styles.bodyBg}>
             <Text> </Text>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    bodyBg:{
        backgroundColor : '#E6E7E8',
        flex : 1,
    }
});

export default Home;
