import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert, FlatList, ActivityIndicator } from 'react-native';
import Slick from 'react-native-slick';


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
      return fetch('http://admin.wafideals.com/apihypermarkets/'+this.props.hypermarketid,{ method: "GET",headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json',
                     }})
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
            animationType: 'slide-up' ,
            
        });

    }

    render() {
        return (
            <View style={styles.bodyBg}>
                <View style={styles.wrapper} >
                    <Slick showsButtons={true} showsPagination renderPagination={renderPagination}
                        buttonTextStyle={{ color: '#9e9e9e', fontSize: 24 }}
                    >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={({ item }) =>
                        <View>
                            <Image style={{ height: '90%', width: '100%', aspectRatio: 10 / 10, resizeMode: 'cover' }} source={{ uri: 'http://admin.wafideals.com/storage/'+ item.flyer_path }} />
                        </View>
                      }
                      numColumns={1}
                      keyExtractor={item => item.id}
                      initialNumToRender={10}
                    />

                    </Slick>
                </View>
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
        width: '100%',
        aspectRatio: 10 / 10,
        resizeMode: 'contain',

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
        borderWidth : 1,
        borderTopColor : '#D0D2D3'
    },
    gridView: {
        color: '#ffffff',
        padding: 5,
    },
    IconImage:{
        width: 30,
        height : 30,
        resizeMode : 'cover'
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
      },
      paginationText: {
        color: 'white',
        fontSize: 20,

      }


});


export default flyerCarouel;
