import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, RefreshControl, TextInput, AsyncStorage, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, ActivityIndicator, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-searchbar';
import ProductList from '../../components/ProductList/ProductList';


class Mall extends Component {

  constructor(props) {
    super(props)
    this.state = {
      citiesData: [],
      city_id: '',
      cityname: '',
      refreshing: false,
    }

  }

  componentWillMount() {
    this.fetchCities();
    this.getCityToken();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchOffers().then(() => {
      this.setState({ refreshing: false });
    });
  }
  async getCityToken() {
    try {
      let token = await AsyncStorage.getItem(CITY_TOKEN);
      this.setState({ cityname: token.toString() });
      this.fetchOffers();
      return token;
    } catch (error) {
      console.log("something went wrong...!");
    }
  }

  async storeCityToken(accessToken) {
    try {
      this.setState({ cityname: accessToken });
      await AsyncStorage.setItem(CITY_TOKEN, accessToken);
      this.fetchOffers();
    } catch (error) {
      console.log("something went wrong...!");
    }
  }

  fetchCities() {
    return fetch("http://admin.wafideals.com/apicities", { method: 'GET' })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          citiesData: responseJson,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  fetchOffers = () => {
    return fetch("http://admin.wafideals.com/apioffers?city_name=" + this.state.cityname, { method: 'GET' })
      .then((response) => response.json())
      .then((responseJson) => {
        let res = JSON.stringify(responseJson)
        if (res != null && res !== '' && res != '[]') {
          this.setState({
            dataSource: responseJson,
          })
        } else {
          this.setState({
            dataSource: [],
          })
        }
      })
      .catch((error) => {
        console.error(error)
      });

  }
  showLeftMenu(navigator) {
    navigator.toggleDrawer({
      side: 'left'
    })
  }
  render() {

    var cities = this.state.citiesData.map(
      function iterator(city) {
        return (
          <Picker.Item label={city.name} value={city.name} />
        );
      },
      this
    );
    return (
      <View style={styles.bodyBg}>
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
                    selectedValue={this.state.cityname}
                    onValueChange={(itemValue, itemIndex) => { this.setState({ cityname: itemValue }); this.storeCityToken(itemValue); this.fetchOffers(); }}
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
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Icon name="ios-search" size={34} color="#ffffff" style={styles.hamburger} />
          </TouchableOpacity>
          <SearchBar placeholder="Please Search Here..."
            ref={(ref) => this.searchBar = ref}
            handleResults={this._handleResults}
          />
        </View>
        <ProductList navigator={this.props.navigator} />
      </View>
    )
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

export default Mall;


