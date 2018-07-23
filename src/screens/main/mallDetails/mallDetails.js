import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Linking, Dimensions, ActivityIndicator } from 'react-native';
import ProductCards from '../../../components/ProductCards/ProductCards';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../../components/ReusableComponents/FontStyle';
import Share from 'react-native-share';


class mallDetails extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
            dataSource1: [],
        }
    }

    onCancel() {
        console.log("CANCEL")
        this.setState({ visible: false });
    }
    onOpen() {
        console.log("OPEN")
        this.setState({ visible: true });
    }

    callNumber = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    componentDidMount() {
        return fetch("http://admin.wafideals.com/apimalls/" + this.props.mallid, {
            method: "GET", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: (responseJson.Mall),
                    dataSource1: (responseJson.Offers),
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
            animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff',
            },
            passProps: { offerid: id },
        });

    }
    EventsListHandler = (id) => {
        this.props.navigator.push({
            screen: 'Wafi.EventInfo',
            animated: true,
            animationType: 'slide-up', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff'
            },
            passProps: { mallid: id },
        });

    }

    mallInfoHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.mallInfo',
            animated: true,
            animationType: 'slide-up', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff'
            }

        });

    }

    render() {

        let shareOptions = {
            title: "Wafi Deals",
            message: "Get all your favourite Shopping Offers in one app, Hundreds of new offers are available every week. Download Wafi Deals to find the latest deals & offers on",
            url: 'https://wafideals.com',
            subject: "Download Wafi Deals to find the latest deals & offers : https://wafideals.com" //  for email

        };

        var offers = this.state.dataSource1.map(
                    function iterator( offer ) {
                        return(
                          <View style={styles.gridItem}>
                              <View style={styles.gridWrapr}>
                                  <TouchableOpacity onPress={() => this.OffersListHandler(offer.id)}>
                                      <Image source={{ uri: 'http://admin.wafideals.com/storage/' + offer.logo_path }} style={styles.ProductImg} />
                                      <Text style={styles.center}>{offer.discount_value}</Text>
                                      <View style={styles.prdDescr}>
                                          <Text style={styles.offerTitle}>{offer.title}</Text>
                                          <Text style={styles.offerDesc}>{offer.tagline}</Text>
                                      </View>
                                  </TouchableOpacity>
                              </View>
                          </View>
                        );
                    },
                    this
                );

        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>

            );
        }
        return (

            <View>
                <ScrollView>
                    <View style={styles.mallWrapr}>
                        <View>
                            <View style={styles.mallDescBlk}>
                                <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.banner_logo_path }} style={styles.mallImg} />
                                <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.logo_path }} style={styles.mallLogo} />
                            </View>
                            <View style={styles.mallInfo}>
                                <TouchableOpacity onPress={() => this.callNumber(`tel:+19742223645`)}>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/call.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>Contact</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.EventsListHandler(this.props.mallid)}>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/event.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>Event</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('google.navigation:q=100+101')}>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/location.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>Location</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {Share.open(shareOptions);}}>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/share.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>Share</Text>
                                    </View>
                                </TouchableOpacity>
                               

                            </View>
                        </View>
                    </View>
                    <View style={styles.prdtWrapr}>
                      {offers}
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mallWrapr: {
        padding: 10,
        flex: 1,
        position: 'relative',
    },
    mallImg: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: '#E6E7E8',
    },

    mallLogo: {
        width: Dimensions.get('window').width < 360 ? 100 : 120,
        height: Dimensions.get('window').width < 360 ? 70 : 100,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: Dimensions.get('window').width < 360 ? 0 : -67,
        left: 0,
        zIndex: 500,
    },
    mallInfo: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    IconBlk: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,

    },
    iconText: {
        fontSize: 11,
        fontFamily: "MyriadPro-Regular",
    },

    event: {
        paddingHorizontal: 9,
        paddingTop: 6,
        paddingBottom: 5
    },
    info: {
        borderColor: 'transparent',
        borderWidth: 1,
        color: '#A7802F',
        paddingHorizontal: 5,
    },
    iconView: {
        width: Dimensions.get('window').width < 360 ? 28 : 34,
        height: Dimensions.get('window').width < 360 ? 28 : 34,
    },
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
        resizeMode: 'contain',
    },
    offerTitle: {
        color: '#000000',
        fontSize: 18,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 15,
        fontFamily: "MyriadPro-Regular",

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
    }
});
export default mallDetails;
