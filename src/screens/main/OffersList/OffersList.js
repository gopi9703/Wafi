import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../../components/ReusableComponents/FontStyle';
import HeaderText from '../../../components/ReusableComponents/HeaderText';

class OffersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }
    onNavigatorEvent(event) {
        if (event.id == 'backPress') {
            alert('back');
        }
    }

    componentDidMount() {
        return fetch("http://admin.wafideals.com/apioffers/" + this.props.offerid, { method: 'GET' })
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
        return (
            <View style={styles.bodyBg}>
                <View style={styles.BrandIntro}>
                    <View>
                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.logo_path }} style={styles.BrandLogo} />
                    </View>
                    <View style={styles.infoWrpr}>

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
                <ScrollView>
                    <View style={{ position: 'relative' }}>
                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.banner_logo_path }} style={styles.BrandBanner} />
                        <FontStyle style={[styles.headerTitle, styles.brandOffPercent]}>
                            <HeaderText>{this.state.dataSource.title}</HeaderText>
                        </FontStyle>
                    </View>
                    <View style={styles.BrandDescWrap}>
                        <View style={styles.blkViewBrand}>
                            <FontStyle style={styles.headerTitle}>
                                <HeaderText>{this.state.dataSource.brand_name}</HeaderText>
                            </FontStyle>
                            <View style={styles.mallTiming}>
                                <FontStyle style={styles.textColor} style={{ textAlign: 'right' }}>
                                    <HeaderText>18 Days Left</HeaderText>
                                </FontStyle>
                                <FontStyle style={styles.textColor}>
                                    <Icon name="md-time" size={18} color="#ffffff" style={[styles.timer]} /> <HeaderText> {this.state.dataSource.opening_time} - {this.state.dataSource.closing_time}</HeaderText>
                                </FontStyle>
                            </View>
                        </View>
                        <View style={styles.blkViewBrand}>
                            <FontStyle>
                                <Text style={styles.paraStyle}>{this.state.dataSource.brand_desc}</Text>
                            </FontStyle>
                        </View>
                        <View style={styles.offerDesc}>
                            <FontStyle>
                                <Text style={styles.paraStyle}>{this.state.dataSource.description}</Text>
                            </FontStyle>
                        </View>
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
    iconStyler: {
        color: '#A7802F',
        borderColor: '#BBBDBF',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,

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
        fontSize: 14,
    },
    location: {
        paddingHorizontal: 12
    },
    BrandBanner: {
        width: '100%',
        aspectRatio: 10 / 5,
        marginVertical: 5,

    },
    favorite: {
        paddingHorizontal: 9,
        paddingTop: 8,
        paddingBottom: 4,
    },
    share: {
        paddingHorizontal: 9,
    },
    BrandDescWrap: {
        backgroundColor: "#ffffff",
        padding: 15,
    },
    blkViewBrand: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'flex-start',

    },
    headerTitle: {
        color: '#000000',
        fontWeight: 'bold'
    },
    textColor: {
        color: '#58595B'
    },
    offerDesc: {
        borderColor: '#58595B',
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingVertical: 15,
        marginTop: 15,
        fontSize: 13,
        lineHeight: 17,
    },
    paraStyle: {
        lineHeight: 17,
        fontSize: 13,
        fontFamily: 'MyriadPro-Regular'
    },

    timer: {
        color: '#EF038F',
        top: 15,
        position: 'absolute'

    },
    brandOffPercent: {
        backgroundColor: '#EF038F',
        fontSize: 38,
        color: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 15,
        position: 'absolute',
        right: 0,
        bottom: 5,
    },
    mallTiming: {
        flexDirection: 'column',
        textAlign: 'right'
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
        fontSize: 14,
    },

    iconView: {
        width: 38,
        height: 38,
    }

});


export default OffersList;
