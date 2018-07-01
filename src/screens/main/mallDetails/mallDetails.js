import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import ProductCards from '../../../components/ProductCards/ProductCards';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../../components/ReusableComponents/FontStyle';



class mallDetails extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
        }
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
                    dataSource: (responseJson),
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    EventsListHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.EventInfo',
            animated: true,
            animationType: 'slide-up', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff'
            },
             navigatorButtons: {
                leftButtons: [
                  {
                    id: 'back',
                    disableIconTint: true,
                    icon: require('../../../img/back.png'), // This line loads our component as a nav bar button item
                    passProps: {
                        offerid: id
                    },
                  },
                ],
              },

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
                                <TouchableOpacity>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/call.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>Contact</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.EventsListHandler}>
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
                                <TouchableOpacity>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/share.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>Share</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.IconBlk}>
                                        <Image source={require('../../../icons/fav.png')} style={styles.iconView} />
                                        <Text style={[styles.iconText]}>My Fav</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <ProductCards navigator={this.props.navigator} />
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
    }
});
export default mallDetails;
