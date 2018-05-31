import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../components/Header/Header';
import BrandHeader from '../../main/BrandHeader';
import FontStyle from '../../../components/ReusableComponents/FontStyle';



class marketDetails extends Component {

    flyerHandler = () => {
        this.props.navigator.push({
          screen: 'Wafi.flyerCarousel',
          animated: true,
          animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
          tabBarHidden: true,
          navigatorStyle: {
            navBarBackgroundColor: '#000000',
            navBarButtonColor: '#ffffff'
        },
        });
      }      


    render() {
        return (
            
            <View style={styles.bodyBg}>
                <BrandHeader />
                <View style={styles.marketFlyr}>
                    <View style={styles.gridItem}>
                      <TouchableOpacity  onPress={this.flyerHandler}>
                        <Image source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} style={styles.makretImg} />
                        <View style={styles.marketDesc}>
                            <View>
                                <FontStyle style={styles.mallText}>BIG Sale</FontStyle>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth : 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                                <FontStyle style={styles.daysLeft}>18</FontStyle>
                                <FontStyle style={styles.daysLeft}>days Left</FontStyle>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridItem}>
                        <Image source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} style={styles.makretImg} />
                        <View style={styles.marketDesc}>
                            <View>
                                <FontStyle style={styles.mallText}>BIG Sale</FontStyle>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth : 1, borderColor: '#D0D2D3', paddingLeft: 10 }}>
                                <FontStyle style={styles.daysLeft}>18</FontStyle>
                                <FontStyle style={styles.daysLeft}>days Left</FontStyle>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
        padding: 10,
    },
    marketFlyr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    gridItem: {
        width: '48%', //Device width divided in almost a half
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 15,
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
        padding: 10,
    },
    makretImg: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    marketDesc: {
        marginTop: 10,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#D0D2D3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    mallText: {
        color: '#58595B',
        fontSize: 16,
    },
    daysLeft: {
        color: '#58595B',
        fontSize: 14,
    }
});

export default marketDetails;