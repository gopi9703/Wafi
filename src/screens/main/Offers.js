import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import Header from '../../components/Header/Header';
import Navigation from 'react-native-navigation';
import CustomPlaceholder from '../../components/CustomPlaceholder';
import Swiper from 'react-native-swiper';

class Offers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    }

    componentDidMount() {
        return fetch("http://admin.wafideals.com/apioffers", { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
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

    onNavigatorEvent(event) {
        // handle a deep link
        if (event.type == 'DeepLink') {
            const parts = event.link.split('/');
            if (parts[0] == 'AppExclusive') {
                // handle the link somehow, usually run a this.props.navigator command
                this.props.navigator.resetTo({
                    screen: 'Wafi.AppExclusive',
                    passProps: {},
                    animated: true,
                });
            }
        }
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
                <Swiper showsButtons={false} showsPagination={true} dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
                    activeDot={<View style={{ backgroundColor: '#cccccc', width: 8, height: 8, borderRadius: 7, marginLeft: 5, marginRight: 5 }} />}
                    paginationStyle={{
                        bottom: 40
                    }}>
                    <View style={styles.slide1}>
                        <Image source={{ uri: 'http://www.printablecouponsblog.com/wp-content/uploads/2017/11/dunkin-donuts-coupons-offers-2018.png' }} style={styles.makretImg} />
                    </View>
                    <View style={styles.slide2}>
                        <Image source={{ uri: 'http://1.bp.blogspot.com/_CVwA-Q51odI/TNowCP0InoI/AAAAAAAAA2w/1E8O-vKPXgw/s1600/09_11_2010_115_006.jpg' }} style={styles.makretImg} />
                    </View>
                    <View style={styles.slide3}>
                        <Image source={{ uri: 'http://www.rewaj.pk/wp-content/uploads/2011/08/Dunkin-Donuts-iftar-feast-2011.jpg' }} style={styles.makretImg} />
                    </View>
                </Swiper>
                <ScrollView ref={(c) => { this.parentScrollView = c; }}
                >
                    <View style={styles.prdtWrapr}>
                        <FlatList style={{ flex: 1, paddingBottom: 10 }}
                            data={this.state.dataSource}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={styles.gridItem}>
                                    <View style={styles.gridWrapr}>
                                        <View style={styles.newBadge}>
                                            <Text style={{ color: '#ffffff', fontSize: 12 }}>NEW</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => this.OffersListHandler(item.id)}>
                                            <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.logo_path }} style={styles.ProductImg} />
                                            <Text style={styles.center}>{item.discount_value}</Text>
                                            <View style={styles.prdDescr}>
                                                <Text style={styles.offerTitle} numberOfLines={1}>{item.title}</Text>
                                                <Text style={styles.offerDesc} numberOfLines={1}>{item.description}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
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
        fontSize: 14,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 13,
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
        height : Dimensions.get('window').height / 3,
        resizeMode: 'cover',

    },
});
export default Offers;
