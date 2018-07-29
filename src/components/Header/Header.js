import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert, KeyboardAvoidingView, TabBarIOS, Picker, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from 'react-native-navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import setStateModal from '../Modal/setStateModal';

import Offers from '../../screens/main/Offers';

const CITY_TOKEN = 'city_token';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        dataSource: [],
        cityname:'',
        city_id: '',
        refreshing: false,
    }
  }
  componentWillMount() {
    this.getCityToken();
  }

  async getCityToken() {
    try {
      let token = await AsyncStorage.getItem(CITY_TOKEN);
      this.setState({cityname:token.toString()})
    } catch(error) {
      console.log("something went wrong...!");
    }
  }

  componentDidMount() {
    return fetch("http://admin.wafideals.com/apicities", { method: 'GET' })
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            isLoading: false,
            cityname: '',
            dataSource: responseJson,
        })

        this.getCityToken();
    })
    .catch((error) => {
        console.error(error)
    })
  }

  showLeftMenu(navigator) {
    navigator.toggleDrawer({
        side: 'left'
    })
  }

  async storeCityToken(accessToken) {
    try {
      Alert.alert(accessToken)
      await AsyncStorage.setItem(CITY_TOKEN, accessToken);
    } catch(error) {
      console.log("something went wrong...!");
    }
  }

    searchHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.Search',
            animated: true,
            animationType: 'slide-vertical',
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

    render() {
      var cities = this.state.dataSource.map(
          function iterator( city ) {
              return(
                <Picker.Item label={city.name} value={city.name} />
              );
          },
          this
      );

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
                            <TouchableOpacity>
                                <View style={styles.HeaderModalInner} >
                                    <Picker
                                        style={{ width: 120, color: '#ffffff' }}
                                        selectedValue= {this.state.cityname}
                                        onValueChange={(itemValue, itemIndex) => { this.setState({cityname: itemValue}); new Offers(this.props).fetchOffers(itemValue); } }
                                        itemStyle={{ backgroundColor: 'lightgrey', marginLeft: 0, paddingLeft: 15 }}
                                        itemTextStyle={{ fontSize: 18, color: 'white' }}
                                    >
                                    {cities}
                                    </Picker>
                                    <Icon name="ios-pin" size={20} color="#BBBDBF" style={styles.map__pin} />
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
        paddingHorizontal: 2
    },
    HeaderModalInner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    map__pin: {
        marginLeft: 5,
        position: 'absolute',
        top: 15,
        right: 20,
        color: '#ffffff'

    }
});

export default Header;
