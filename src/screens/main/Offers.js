import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, RefreshControl, TextInput, AsyncStorage, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, ActivityIndicator, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from 'react-native-navigation';
import CustomPlaceholder from '../../components/CustomPlaceholder';
import Swiper from 'react-native-swiper';
import SearchBar from 'react-native-searchbar';

const CITY_TOKEN = 'city_token';

const SEARCH_TOKEN = 'search_token';

class Offers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
            dataSource1: [],
            citiesData: [],
            city_id: '',
            cityname: '',
            refreshing: false,
            results: [],
            search_query: '',
        }
        this._handleResults = this._handleResults.bind(this);
    }
    componentWillMount() {
      this.fetchCities();
      this.getCityToken();
    }
    componentDidMount() {
        this.fetchAds();
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
        this.setState({cityname: token.toString()});
        this.fetchOffers();
        return token;
      } catch(error) {
        console.log("something went wrong...!");
      }
    }

    async storeCityToken(accessToken) {
      try {
        this.setState({cityname: accessToken});
        await AsyncStorage.setItem(CITY_TOKEN, accessToken);
        this.fetchOffers();
      } catch(error) {
        console.log("something went wrong...!");
      }
    }

    async getSeachQueryToken() {
      try {
        let token = await AsyncStorage.getItem(SEARCH_TOKEN);
        this.setState({search_query: token.toString()});
        this.fetchOffers();
        return token;
      } catch(error) {
        console.log("something went wrong...!");
      }
    }

    async storeSearchQueryToken(accessToken) {
      try {
        this.setState({search_query: accessToken});
        await AsyncStorage.setItem(SEARCH_TOKEN, accessToken);
        this.fetchOffers();
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

    fetchOffers = () => {
        return fetch("http://admin.wafideals.com/apioffers?city_name=" + this.state.cityname +"&search_query="+this.state.search_query, { method: 'GET' })
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


    fetchAds = () => {
        return fetch("http://admin.wafideals.com/apiads?city_id=" + this.state.city_id, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource1: responseJson,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    OffersListHandler = (id) => {
        this.props.navigator.push({
            screen: 'Wafi.OffersList',
            animated: true,
            animationType: 'slide-horizontal',
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff',
            },
            passProps: { offerid: id },
        });

    }

    _handleResults(results) {
        this.setState({ results });
      }

    showLeftMenu(navigator) {
        navigator.toggleDrawer({
            side: 'left'
        })
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    {item.new_label > 0 &&
                        <View style={styles.newBadge}>
                            <Text style={{ color: '#ffffff', fontSize: 12 }}>NEW</Text>
                        </View>
                    }
                    <TouchableOpacity onPress={() => this.OffersListHandler(item.id)}>
                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.logo_path }} style={styles.ProductImg} />
                        <Text style={styles.center}>{item.discount_value}</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.offerDesc} numberOfLines={1}>{item.tagline}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _handleChangeText = (input) => {
      this.storeSearchQueryToken(input);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <CustomPlaceholder animate="fade">

                    </CustomPlaceholder>
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

            <View style={{ flex: 1 }}>

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
                    handleChangeText={this._handleChangeText}
                    data={this.state.dataSource1}
                />
                </View>


                <ScrollView ref={(c) => { this.parentScrollView = c; }}
                >
                    <View style={styles.swiperBlk}>
                        <Swiper showsButtons={false} showsPagination={true} dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
                            activeDot={<View style={{ backgroundColor: '#cccccc', width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
                            paginationStyle={{
                                bottom: 20
                            }}>
                            {this.state.dataSource1.map((item, key) => {
                                return (
                                    <View style={styles.swiperlist}>
                                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.ad_banner_path }} style={styles.makretImg} style={{ height: '100%' }} />
                                    </View>
                                )
                            })
                            }
                        </Swiper>

                    </View>
                    <View style={styles.prdtWrapr}>
                        <FlatList style={{ flex: 1, paddingBottom: 10 }}
                            extraData={this.state}
                            data={this.state.dataSource}
                            renderItem={this.renderItem}
                            numColumns={2}
                            keyExtractor={(item, index) => item.id}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />
                            }
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    prdtWrapr: {
        paddingBottom: '2%',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    gridWrapr: {
        flexDirection: 'column',
        width: '100%'
    },
    gridItem: {
        width: '46%', //Device width divided in almost a half
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginLeft: '2.5%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 2,


    },
    prdDescr: {
        flexDirection: 'column',
        padding: 10,
        flexWrap: 'wrap',
        width: '100%',
        borderColor: '#ff0000'
    },
    ProductImg: {
        width: '100%',
        aspectRatio: 10 / 10,
        resizeMode: 'stretch',

    },
    offerTitle: {
        color: '#000000',
        fontSize: 13,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 12,
        fontFamily: "MyriadPro-Regular",

    },
    prodOffPercet: {
        backgroundColor: '#F6921E',
        color: '#ffffff',
        fontSize: 18,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 150,
    },
    center: {
        textAlign: 'center',
        backgroundColor: '#F6921E',
        paddingVertical: 5,
        color: '#ffffff',
        fontSize: 14,
        borderRadius: 25,
        marginTop: -20,
        marginHorizontal: '10%',
        width: '80%'
    },
    newBadge: {
        position: 'absolute',
        backgroundColor: '#ec1172',
        transform: [{ rotate: '-45deg' }],
        top: 15,
        left: -40,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        zIndex: 500
    },
    makretImg: {
        width: Dimensions.get('window').width,
        resizeMode: 'contain',

    },
    swiperBlk: {
        height: Dimensions.get('window').height / 3,
        marginBottom: 10,
    },
    swiperlist: {
        flex: 1
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
export default Offers;
