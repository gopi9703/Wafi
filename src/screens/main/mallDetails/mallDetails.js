import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import ProductCards from '../../../components/ProductCards/ProductCards';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../../components/ReusableComponents/FontStyle';



class mallDetails extends Component {
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

                                    <TouchableOpacity>
                                        <View style={styles.IconBlk}>
                                            <Icon name="ios-call" size={24} color="#ffffff" style={styles.iconStyler} />
                                            <FontStyle> <Text style={[styles.iconText]}>Contact</Text></FontStyle>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.IconBlk}>
                                            <Icon name="ios-pin" size={24} color="#ffffff" style={[styles.iconStyler, styles.location]} />
                                            <Text style={[styles.iconText]}>Location</Text>
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
         marginTop: -30, backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: -70,
        left:0,
        zIndex: 500

    },
    mallInfo: {
        backgroundColor: '#ffffff',
        padding: 15,
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
    },
    iconStyler: {
        color: '#A7802F',
        borderColor: '#BBBDBF',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,

    }
});
export default mallDetails;