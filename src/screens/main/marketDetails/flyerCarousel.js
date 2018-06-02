import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import Slick from 'react-native-slick';


const renderPagination = (index, total, context) => {
    return (
      <View style={{
        position: 'absolute',
        bottom: 50,
        right: 0,
        borderColor : 'red',
        borderWidth : 1

      }}>
        <Text style={{ color: 'grey' }}>
          <Text style={{
            color: '#000000',
            fontSize: 20
          }}>{index + 1}</Text>/{total}
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
    

    render() {
  return (
    <View>
            <Slick style={styles.wrapper} showsButtons={true} showsPagination={true} renderPagination={renderPagination} 
                
            >
                <View >
                    <Image style={{height:'100%', width : '100%', resizeMode:'cover'}} source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} />
                </View>
                <View >
                    <Image style={{height:'100%', width : '100%',resizeMode:'cover'}} source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} />
                </View>
                <View >
                    <Image style={{height:'100%', width : '100%',resizeMode:'cover'}} source={{ uri: 'https://offersinme.com/images/leaflet/2018/03/31/866/866-0-al-karama-hypermarket-weekend-offers.jpg' }} />
                </View>
            </Slick>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#000000',
        flex: 1,
        padding: 10,
    },
    carouselImg: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'cover'
    },
    wrapper:{
        flex : 1
    }
  
});


export default flyerCarouel;