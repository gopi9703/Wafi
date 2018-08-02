import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, FlatList, ActivityIndicator, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import PhotoView from 'react-native-photo-view';

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
        return fetch('http://admin.wafideals.com/apihypermarkets/' + this.props.flyterdetailid + '?flyterdetails=true', {
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


    gridHandler = (id) => {
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
            passProps: { flyterdetailid: id },

        });

    }

    render() {

        var flyerdetails = this.state.dataSource.map(
            function iterator(flyer) {
                return (
                    <View  >
                        <PhotoView
                            resizeMode={Platform.OS === "android" ? "cover" : "contain"}
                            source={{ uri: 'http://admin.wafideals.com/storage/' + flyer.flyer_path }} style={styles.makretImg}
                            minimumZoomScale={1}
                            maximumZoomScale={3}
                            androidScaleType="fitCenter"
                            scale={1}
                            onLoad={() => console.log("Image loaded!")}
                            loadingIndicatorSource={require('../../../img/rolling.gif')}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            fadeDuration={100}
                            androidZoomTransitionDuration={100}
                            onLoadEnd={() => this.setState({ loaded: true })}
                            style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height / 1.17, borderColor:'red', borderWidth:1}}
                        />
                    </View>
                );
            },
            this
        );
        return (
            <View style={styles.bodyBg}>
               
                    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} >
                        {flyerdetails}
                    </Swiper>
                    <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.gridHandler(this.props.flyterdetailid)}>
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
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column'
    },
    makretImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.09,
        resizeMode: 'cover',


    },
    
    buttonText: {
        color: 'red',
        fontSize: 22,
    },
    footer: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,

        flexDirection: 'row',
        width: Dimensions.get('window').width,

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
