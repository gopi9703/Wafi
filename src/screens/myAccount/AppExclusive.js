import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../components/ReusableComponents/FontStyle';
import Share from 'react-native-share';


class AppExclusive extends Component {

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    static navigatorStyle = {
        navbarHidden: false,
    };

    componentDidMount() {
        return fetch("http://admin.wafideals.com/apiappexclusives/", { method: 'GET' })
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


    render() {

        let shareOptions = {
            title: "Wafi Deals",
            message: "App Exclusive Offers..",
            url: 'https://wafideals.com',
            subject: "Download Wafi Deals to find the latest deals & offers : https://wafideals.com" //  for email

        };

        return (
            <View style={styles.bodyBg}>


                <FlatList style={{ flex: 1, paddingBottom: 10 }}
                    data={this.state.dataSource}
                    numColumns={1}
                    renderItem={({ item }) =>
                        <View style={styles.appExclusvBlk}>
                            <View style={styles.ImgContainer}>
                                <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.banner_path }} style={styles.ExclusiveImg} />
                            </View>
                            <View style={styles.marketDesc}>
                                <View style={styles.appExclusvBlkText}>
                                    <Text style={styles.OfferText}>{item.tag_line}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#D0D2D3', paddingHorizontal: 10,  }}>
                                        <TouchableOpacity onPress={() => { Share.open(shareOptions); }}>
                                            <Icon name="md-share" size={20} color="#BBBDBF" style={styles.share} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                                        <FontStyle style={styles.daysLeft}>18</FontStyle>
                                        <FontStyle style={styles.daysLeft}>days Left</FontStyle>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={1}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,

    },
    appExclusvBlk: {
        padding: 15,

    },

    ExclusiveImg: {
        width: '100%',
        aspectRatio: 10 / 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        resizeMode: 'contain',
        borderColor: '#E6E7E8',

    },
    appExclusvBlkText: {
        backgroundColor: '#ffffff',


    },
    OfferText: {
        color: '#000000',
        fontSize: 13,
        fontFamily: "MyriadPro-Regular",
    },
    marketDesc: {

        width: '100%',
        borderTopWidth: 1,
        borderColor: '#D0D2D3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#ffffff'
    },
    mallText: {
        color: '#58595B',
        fontSize: 12,
    },
    daysLeft: {
        color: '#58595B',
        fontSize: 14,
    },
    mallOfferText: {
        color: '#58595B',
        fontSize: 14,
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    share: {
        padding: 5,
    }
});

export default AppExclusive;
