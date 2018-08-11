import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, Picker, AsyncStorage } from 'react-native';
import Navigation from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-searchbar';
import FontStyle from '../ReusableComponents/FontStyle';
import Placeholder from 'rn-placeholder';

const CITY_TOKEN = 'city_token';
const SEARCH_TOKEN = 'search_token';

export default class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      cityname: '',
      search_query: '',
    }
  }

  componentWillMount() {
    this.fetchCities();
    this.getCityToken();
  }


    _onRefresh = () => {
      this.setState({ refreshing: true });
      this.fetchHypermarkets().then(() => {
        this.setState({ refreshing: false });
      });
    }
    async getCityToken() {
      try {
        let token = await AsyncStorage.getItem(CITY_TOKEN);
        this.setState({ cityname: token.toString() });
        this.fetchHypermarkets();
        return token;
      } catch (error) {
        console.log("something went wrong...!");
      }
    }

    async storeCityToken(accessToken) {
      try {
        this.setState({ cityname: accessToken });
        await AsyncStorage.setItem(CITY_TOKEN, accessToken);
        this.fetchHypermarkets();
      } catch (error) {
        console.log("something went wrong...!");
      }
    }

    async getSeachQueryToken() {
      try {
        let token = await AsyncStorage.getItem(SEARCH_TOKEN);
        this.setState({search_query: token.toString()});
        this.fetchHypermarkets();
        return token;
      } catch(error) {
        console.log("something went wrong...!");
      }
    }

    async storeSearchQueryToken(accessToken) {
      try {
        this.setState({search_query: accessToken});
        await AsyncStorage.setItem(SEARCH_TOKEN, accessToken);
        this.fetchHypermarkets();
      } catch(error) {
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


  marketDetailsHandler = (id) => {
    this.props.navigator.push({
      screen: 'Wafi.marketDetails',
      animated: true,
      animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
      navigatorStyle: {
        navBarBackgroundColor: '#0A266D',
        navBarButtonColor: '#ffffff'
      },

      passProps: { hypermarketid: id },
    });
  }
  fetchHypermarkets = () => {
    return fetch('http://admin.wafideals.com/apihypermarkets?city_name='+ this.state.cityname+'&search_query='+this.state.search_query)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,

        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }


  FlatListItemSeparator = () => {
    return (< View style={
      {
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B"
      }
    }
    />
    );
  }

  _handleChangeText = (input) => {
    this.storeSearchQueryToken(input);
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
        </View>

      )
    }

    var cities = this.state.citiesData.map(
      function iterator(city) {
        return (
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
                  selectedValue={this.state.cityname}
                  onValueChange={(itemValue, itemIndex) => { this.setState({ cityname: itemValue }); this.storeCityToken(itemValue); }}
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
          handleChangeText={this._handleChangeText}
        />
      </View>
      <FlatList style={{ padding: 15, backgroundColor: '#D0D2D3' }} initialNumToRender={3}
        data={this.state.dataSource}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => this.marketDetailsHandler(item.id)}>
            <View style={styles.rowBlk}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.logo_path }} style={styles.mallImg} />
                <View style={styles.mallTxtCol}>
                  <FontStyle style={styles.mallTitle}> {item.name} </FontStyle>
                  <View style={{ flexDirection: 'row' }}>
                    <FontStyle style={styles.mallLocality} numberOfLines={1} > {item.tagline} </FontStyle>
                  </View>
                </View>
              </View>
              <View style={styles.iconAlign}>
                <Icon name="ios-arrow-forward" size={30} color="#A6A8AB" />

              </View>
              <Text style={styles.iconAlignText}>{(item.flyers_count > 0) ? item.flyers_count : 0} Flyers</Text>
            </View>
          </TouchableOpacity>
        }
        numColumns={1}
        keyExtractor={item => item.id}

        initialNumToRender={10}

      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E6E7E8',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 21
  },
  rowBlk: {
    marginVertical: 5,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  mallImg: {
    width: Dimensions.get('window').width < 360 ? 60 : 80,
    height: Dimensions.get('window').width < 360 ? 60 : 80,
    borderRightWidth: 1,
    borderColor: '#D0D2D3',
    marginRight: 5,
    padding: 5,
    resizeMode: 'contain'
  },
  mallTxtCol: {
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: '#D0D2D3',
    paddingLeft: 10,
  },
  mallTitle: {
    fontSize: Dimensions.get('window').width < 360 ? 14 : 16,
    color: '#000',
    fontFamily: "MyriadPro-Semibold_2",
  },
  mallLocality: {
    fontSize: Dimensions.get('window').width < 360 ? 12 : 13,
    color: '#58595B',
    flex: 1, flexWrap: 'wrap',
    paddingTop: 5,

  },
  iconAlign: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconAlignText: {
    fontSize: 12,
    position : 'absolute',
    right : 10,
    bottom : 5
  },
  placeholder: {
    marginBottom: 5,
    marginVertical: 5,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
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
