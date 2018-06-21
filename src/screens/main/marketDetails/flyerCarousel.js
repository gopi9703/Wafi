import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
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
        //this._goToMovies = this._goToMovies.bind(this);
    }


    _navigate(screen) {
        this.props.navigator.push({
            screen: screen,
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                navBarSubtitleFontFamily: "MyriadPro-Regular",
                navBarComponentAlignment: 'center',
            }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });

    }

    render() {
        return (
            <View style={styles.bodyBg}>
                <View style={styles.wrapper} >
                    <Slick showsButtons={true} showsPagination renderPagination={renderPagination}
                        buttonTextStyle={{ color: '#9e9e9e', fontSize: 24 }}
                    >
                        <View >
                            <Image style={{ height: '90%', width: '100%', resizeMode: 'cover' }} source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} />
                        </View>
                        <View >
                            <Image style={{ height: '90%', width: '100%', resizeMode: 'cover' }} source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} />
                        </View>
                        <View >
                            <Image style={{ height: '90%', width: '100%', resizeMode: 'cover' }} source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} />
                        </View>

                    </Slick>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this._navigate('Wafi.flyerGrid')}>
                         <Image source={require('../../../icons/grid.png')} style={styles.IconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../../icons/share.png')} style={styles.IconImage} />
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