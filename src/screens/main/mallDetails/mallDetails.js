import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import ProductCards from '../../../components/ProductCards/ProductCards';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../../components/ReusableComponents/FontStyle';



class mallDetails extends Component {


    constructor(props) {
        super(props)
       
    }

    EventsListHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.EventInfo',
            animated: true,
            animationType: 'slide-up', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff'
            }

        });

    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.mallWrapr}>
                        <View>
                            <View style={styles.mallDescBlk}>
                                <Image source={{ uri: 'https://amjaad.com/wp-content/uploads/2014/08/nizwa-grand-mall1.jpg' }} style={styles.mallImg} />
                                <Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/cde0ab34891017.56060d3b46479.jpg' }} style={styles.mallLogo} />
                            </View>
                            <View style={styles.mallInfo}>

                                    <TouchableOpacity onPress={this.EventsListHandler}>
                                        <View style={styles.IconBlk}>
                                            <Icon name="ios-calendar" size={24} color="#ffffff" style={styles.iconStyler} />
                                            <FontStyle> <Text style={[styles.iconText]}>Event</Text></FontStyle>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.IconBlk}>
                                            <Icon name="md-share" size={22} color="#ffffff" style={[styles.iconStyler, styles.share]} />
                                            <Text style={styles.iconText}>Share</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.IconBlk}>
                                            <Icon name="ios-heart" size={22} color="#ffffff" style={[styles.iconStyler, styles.favorite]} />
                                            <Text style={styles.iconText}>My Fav</Text>
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
        width: Dimensions.get('window').width < 360 ? 100 : 130, 
        height: Dimensions.get('window').width < 360 ? 70 : 100,
          backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: -60,
        left:0,
        zIndex: 500

    },
    mallInfo: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical : 10,
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    IconBlk: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,

    },
    iconText: {
        fontSize: Dimensions.get('window').width < 360 ? 12 : 14
    },
    location: {
        paddingHorizontal: 10
    },
    favorite: {
        paddingHorizontal: 7,
        paddingTop: 8,
        paddingBottom: 4,
    },
    share: {
        paddingHorizontal: 8,
        paddingVertical:6,
    },
    iconStyler: {
        color: '#A7802F',
        borderColor: '#BBBDBF',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal : 5

    }
});
export default mallDetails;