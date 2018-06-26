import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,FlatList, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from 'react-native-navigation';
import FontStyle from '../../../components/ReusableComponents/FontStyle';
import HeaderText from '../../../components/ReusableComponents/HeaderText';

class BrandsList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          isLoading: true,
          dataSource: [],
          dataSource1: []
      }
  }

  componentDidMount() {
      return fetch("http://admin.wafideals.com/apibrands/"+this.props.brandid, {method: "GET",headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                     }})
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  isLoading: false,
                  dataSource: (responseJson.brand),
                  dataSource1: (responseJson.offers),
              })
          })
          .catch((error) => {
              console.error(error)
          })
  }

  BrandDetailsHandler = (id) => {
      this.props.navigator.push({
          screen: 'Wafi.BrandDetails',
          animated: true,
          animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
          navigatorStyle: {
              navBarBackgroundColor: '#0A266D',
              navBarButtonColor: '#ffffff'
          },
          passProps:{ offerid:id },
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
            <View style={styles.bodyBg}>
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
                <ScrollView >
                    <View style={{ position: 'relative' }}>
                        <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.banner_logo_path }} style={styles.BrandBanner} />
                    </View>
                    <View style={styles.BrandDescWrap}>
                        <View style={styles.blkViewBrand}>
                            <FontStyle style={styles.headerTitle}>
                                <HeaderText>{this.state.dataSource.name}</HeaderText>
                            </FontStyle>
                        </View>
                        <View style={styles.blkViewBrand}>
                            <FontStyle style={styles.textColor}>
                                <Text>{this.state.dataSource.description}</Text>
                            </FontStyle>
                        </View>
                    </View>

                    <FlatList style={{ flex: 1, paddingBottom: 10,  marginVertical : 10 }}
                        data={this.state.dataSource1}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        numColumns={2}
                        renderItem={({ item }) =>
                          <View style={styles.gridItem}>
                              <View style={styles.gridWrapr}>
                                  <TouchableOpacity onPress={() => this.BrandDetailsHandler(item.id)}>
                                      <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.logo_path }} style={styles.ProductImg} />
                                      <Text style={styles.center}>{item.title}</Text>
                                      <View style={styles.prdDescr}>
                                          <Text style={styles.offerTitle} numberOfLines={1}>{item.short_description}</Text>
                                          <Text style={styles.offerDesc}  numberOfLines={1}>{item.description}</Text>
                                      </View>
                                  </TouchableOpacity>
                              </View>
                          </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />

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
        height: 220,
        resizeMode: 'contain',
        borderRadius: 5,

    },
    BrandDescWrap: {
        backgroundColor: "#ffffff",
        padding: 15,
    },
    blkViewBrand: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    },
    headerTitle: {
        color: '#000'
    },
    textColor: {
        color: '#58595B',
        fontSize : 13,
        lineHeight : 17
    },
    offerDesc: {
        borderColor: '#58595B',
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingVertical: 15,
        marginTop: 15
    },
   
    prdtWrapr: {
        paddingTop: '2%',
        paddingBottom: '2%',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    gridWrapr: {
        flexDirection: 'column',
        width: '100%'
    },
    gridItem: {
        width: '46%', //Device width divided in almost a half
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginLeft: '2.5%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 2,


    },
    prdDescr: {
        flexDirection: 'column',
        padding: 10,
        flexWrap: 'wrap',
        width: '100%',
        borderColor: '#ff0000'
    },
    ProductImg: {
        width: '100%',
        aspectRatio: 10 / 10,
        resizeMode: 'contain',
    },
    offerTitle: {
        color: '#000000',
        fontSize: 18,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 13,
        fontFamily: "MyriadPro-Regular",
        lineHeight : 17,

    },
    prodOffPercet: {
        backgroundColor: '#F6921E',
        color: '#ffffff',
        fontSize: 18,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 150,
    },
    center: {
        textAlign: 'center',
        backgroundColor: '#F6921E',
        paddingVertical: 5,
        color: '#ffffff',
        fontSize: 18,
        borderRadius: 25,
        marginTop: -20,
        marginHorizontal: '10%',
        width: '80%'
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


export default BrandsList;
