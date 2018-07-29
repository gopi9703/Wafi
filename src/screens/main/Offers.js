import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList,RefreshControl, TextInput,AsyncStorage, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import Header from '../../components/Header/Header';
import Navigation from 'react-native-navigation';
import CustomPlaceholder from '../../components/CustomPlaceholder';
import Swiper from 'react-native-swiper';

const CITY_TOKEN = 'city_token';

class Offers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
            dataSource1: [],
            city_id:'',
            cityname: '',
            refreshing: false,
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    componentWillMount() {
      this.getCityToken();
    }
    componentDidMount() {
      this.fetchAds();
    }
    _onRefresh = () => {
      this.setState({refreshing: true});
      this.fetchOffers('').then(() => {
        this.setState({refreshing: false});
      });
    }
    async getCityToken() {
      try {
        let token = await AsyncStorage.getItem(CITY_TOKEN);
        this.setState({cityname: token.toString()});
        this.fetchOffers(token);
      } catch(error) {
        console.log("something went wrong...!");
      }
    }

    async storeCityToken(accessToken) {
      try {
        await AsyncStorage.setItem(CITY_TOKEN, accessToken);
      } catch(error) {
        console.log("something went wrong...!");
      }
    }

    fetchOffers = (city_name) =>
    {
      if(city_name == '') {
        city_name = this.state.cityname;
      } else {
        this.storeCityToken(city_name)
        this.setState({
          cityname: city_name,
        })
      }
      return fetch("http://admin.wafideals.com/apioffers?city_name="+ city_name, { method: 'GET' })
        .then((response) => response.json())
        .then((responseJson) => {
          let res  = JSON.stringify(responseJson)
          if(res != null && res !== '' && res != '[]') {
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
        })
    }


    fetchAds = () =>
    {
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

    onNavigatorEvent(event) {
        if (event.type == 'DeepLink') {
            const parts = event.link.split('/');
            if (parts[0] == 'AppExclusive') {
                this.props.navigator.resetTo({
                    screen: 'Wafi.AppExclusive',
                    passProps: {},
                    animated: true,
                });
            }
        }
    }

    renderItem = ({item}) => {
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

render() {
    if (this.state.isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <CustomPlaceholder animate="fade">
                </CustomPlaceholder>
            </View>
        )
    }

    return (

        <View style={{ flex: 1 }}>
            <Header navigator={this.props.navigator} />
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
                       <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.ad_banner_path }} style={styles.makretImg} style={{height: '100%'}} />
                   </View>
                 )})
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
    swiperBlk : {
        height : Dimensions.get('window').height / 3,
        marginBottom : 10,
    },
    swiperlist : {
        flex : 1
    }
});
export default Offers;
