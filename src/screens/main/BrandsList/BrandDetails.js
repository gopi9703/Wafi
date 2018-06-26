import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity,ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class BrandDetails extends Component {
  constructor(props) {
      super(props)
      this.state = {
          isLoading: true,
          dataSource: [],
      }
  }
  componentDidMount() {
      return fetch("http://admin.wafideals.com/apioffers/"+this.props.offerid, {method: "GET",headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                     }})
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
                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.logo_path  }} style={styles.BrandLogo} />
                    </View>
                    <View style={styles.infoWrpr}>

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
        resizeMode: 'contain',
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
        paddingBottom : 5,
    },
    mallDescTxt: {
        color: '#58595B',
        flex: 1,
        flexWrap: 'wrap',
        fontSize : 13,
        lineHeight : 17,
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
        paddingHorizontal: 9,
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
        paddingHorizontal: 10
    },
    BrandBanner: {
        width: '100%',
        height: 220,
        resizeMode: 'contain',
        borderRadius: 5,

    },
    favorite: {
        paddingHorizontal: 7,
        paddingTop: 8,
        paddingBottom: 4,
    },
    share: {
        paddingHorizontal: 9,
        paddingVertical : 6,
    },
});

export default BrandDetails;
