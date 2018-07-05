import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, FlatList, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';


const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}




class flyerCarouel extends Component {

    static navigatorStyle = {
        tabBarHidden: true,
    }
    componentWillMount() {
        this.props.navigator.toggleTabs({
            to: 'hidden',
            animate: true,
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
        }
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


    gridHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.flyerGrid',
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                navBarSubtitleFontFamily: "MyriadPro-Regular",
                navBarComponentAlignment: 'center',
            }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up',

        });

    }

    render() {
        return (
            <View style={styles.bodyBg}>

                <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} >
                    <View style={styles.slide1}>
                        <Image source={{ uri: 'https://www.gannett-cdn.com/-mm-/5f602624d48bec13aefdda1e6c9da0ccde8827ef/c=0-0-6132-8176&r=537&c=0-0-534-712/local/-/media/2015/02/11/USATODAY/USATODAY/635592476647817739-XXX-Dunkin-Donuts-Croissant-Donut.jpg' }} style={styles.makretImg} />
                    </View>
                    <View style={styles.slide2}>
                        <Image source={{ uri: 'https://i.pinimg.com/236x/26/99/6e/26996e9172e7ab17d8c886b908dfd1b0--ruins-mel.jpg' }} style={styles.makretImg} />
                    </View>
                    <View style={styles.slide3}>
                        <Image source={{ uri: 'https://media.musely.com/u/cc8d9bae-301a-4063-a47b-1d3846def21e.jpg' }} style={styles.makretImg} />
                    </View>
                </Swiper>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.gridHandler()}>
                        <Image source={require('../../../icons/grid.png')} style={styles.IconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../icons/share_01.png')} style={styles.IconImage} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#231F20',
        flex: 2,

        flexDirection: 'column'
    },
    carouselImg: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'cover'
    },
    makretImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
        borderColor: 'transparent',
        borderWidth: 1

    },
    wrapper: {
        flex: 1
    },
    buttonText: {
        color: 'red',
        fontSize: 22,
    },
    footer: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        left: 0,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderTopColor: '#D0D2D3'
    },
    gridView: {
        color: '#ffffff',
        padding: 5,
    },
    IconImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    paginationStyle: {
        position: 'absolute',
        bottom: -85,
        right: 10,
        zIndex: 500
    },
    paginationText: {
        color: 'white',
        fontSize: 20,

    }


});


export default flyerCarouel;
