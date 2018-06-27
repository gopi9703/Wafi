import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, ActivityIndicator, Dimensions, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class BrandDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    callNumber = (url) =>{
        Linking.canOpenURL(url).then(supported => {
        if (!supported) {
         console.log('Can\'t handle url: ' + url);
        } else {
         return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
     }

    componentDidMount() {
        return fetch("http://admin.wafideals.com/apioffers/" + this.props.offerid, {
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
    render() {
        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>

            );
        }
        return (
            <View style={styles.bodyBg}>
                <ScrollView>
                    <View style={styles.BrandIntro}>
                        <View>
                            <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.logo_path }} style={styles.BrandLogo} />
                        </View>
                        <View style={styles.infoWrpr}>
                            <TouchableOpacity onPress={()=> this.callNumber(`tel:+19742223645`)}>
                                <View style={styles.IconBlk}>
                                <Image source={require('../../../icons/info.png')} style={styles.iconView} />
                                     <Text style={[styles.iconText]}>Contact</Text>
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
                    <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.banner_logo_path }} style={styles.BrandBanner} />
                    <View style={styles.brandInfo}>
                        <Text style={styles.brandHdr}>{this.state.dataSource.short_description}</Text>
                        <Text style={styles.mallDescTxt}>{this.state.dataSource.description}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
        padding: 5,
    },
    BrandBanner: {
        width: '100%',
        aspectRatio: 10 / 5,
        marginVertical: 5,
      
    },
    brandInfo: {
        backgroundColor: '#ffffff',
        padding: 15,

    },
    brandHdr: {
        fontSize: 14,
        color: '#000000',
        fontFamily: "MyriadPro-Semibold_2",
        lineHeight: 20,
        paddingBottom: 5,
    },
    mallDescTxt: {
        color: '#58595B',
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 13,
        lineHeight: 17,
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
        marginLeft: 5,

    },
    iconText: {
        fontSize: 14,
    },
    iconView : {
        width : 38,
        height : 38,
    }
});

export default BrandDetails;
