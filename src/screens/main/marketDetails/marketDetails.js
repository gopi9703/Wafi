import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert, FlatList, ScrollView, Dimensions } from 'react-native';
import Header from '../../../components/Header/Header';
import FontStyle from '../../../components/ReusableComponents/FontStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';

class marketDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
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

    componentDidMount() {
        return fetch('http://admin.wafideals.com/apihypermarkets/' + this.props.hypermarketid, {
            method: "GET", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
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

    flyerHandler = (id) => {
        this.props.navigator.push({
            screen: 'Wafi.flyerCarousel',
            animated: true,
            animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
            tabBarHidden: true,
            navigatorStyle: {
                navBarBackgroundColor: '#000000',
                navBarButtonColor: '#ffffff'
            },

            passProps: { hypermarketid: id },
        });
    }


    render() {


        let shareOptions = {         
            title: "Wafi Deals",
            message: "Get all your favourite Shopping Offers in one app, Hundreds of new offers are available every week. Download Wafi Deals to find the latest deals & offers on",
            url: 'https://wafideals.com',
            subject: "Download Wafi Deals to find the latest deals & offers : https://wafideals.com" //  for email
            
        };

        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>

            );
        }

        return (

            <View style={styles.bodyBg}>
                <View style={styles.BrandIntro}>
                    <View>
                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.logo_path }} style={styles.BrandLogo} />
                    </View>
                    <View style={styles.infoWrpr}>
                        <TouchableOpacity onPress={() => this.callNumber(`tel:+19742223645`)}>
                            <View style={styles.IconBlk}>
                                <Image source={require('../../../icons/info.png')} style={styles.iconView} />
                                <Text style={[styles.iconText]}>Info</Text>
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
                                <Text style={styles.iconText}>Share</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.IconBlk}>
                                <Image source={require('../../../icons/fav.png')} style={styles.iconView} />
                                <Text style={styles.iconText}>My Fav</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.marketFlyr}>
                    <FlatList style={{ flex: 1, width: '100%' }}
                        data={this.state.dataSource}
                        renderItem={({ item }) =>
                            <View style={styles.gridItem}>
                                <View style={styles.newBadge}>
                                    <Text style={{ color: '#ffffff', fontSize: 12 }}>NEW</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.flyerHandler(item.hypermarket_id)}>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.flyer_path }} style={styles.makretImg} />
                                    </View>
                                    <View>
                                        <Text style={styles.mallText} numberOfLines={1}> {item.tagline}</Text>
                                    </View>
                                    <View style={styles.marketDesc}>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <FontStyle style={styles.daysLeft}>{item.no_of_pages}</FontStyle>
                                            <FontStyle style={styles.daysLeft}>Pages</FontStyle>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                                            <TouchableOpacity>
                                                <Icon name="md-share" size={20} color="#BBBDBF" style={styles.share} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                                            <FontStyle style={styles.daysLeft}>18</FontStyle>
                                            <FontStyle style={styles.daysLeft}>days Left</FontStyle>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        numColumns={2}
                        keyExtractor={item => item.id}
                        initialNumToRender={10}
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    marketFlyr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    gridItem: {
        width: '48%', //Device width divided in almost a half
        height: 'auto',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 15,
        padding: 5,
        marginHorizontal: '1%',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 2,


    },
    makretImg: {
        width: '100%',
        aspectRatio: 10 / 10,
        resizeMode: 'contain',

    },
    marketDesc: {
        marginTop: 5,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#D0D2D3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5
    },
    mallText: {
        color: '#58595B',
        fontSize: 12,
        paddingTop: 5,
    },
    daysLeft: {
        color: '#58595B',
        fontSize: Dimensions.get('window').width < 360 ? 12 : 14,
    },
    mallOfferText: {
        color: '#58595B',
        fontSize: 14,
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    share: {
        padding: 5,
        fontSize: Dimensions.get('window').width < 360 ? 16 : 20,
    },
    BrandIntro: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    BrandLogo: {
        width: 60,
        height: 60,
        
    },

    infoWrpr: {
        flexDirection: 'row',
        justifyContent: 'center'
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
    iconView: {
        width: 38,
        height: 38,
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
    }
});

export default marketDetails;
