import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';


class EventInfo extends Component {

  constructor(props) {
      super(props)
      this.state = {
          isLoading: true,
          dataSource: [],
      }
  }

  componentDidMount() {
      return fetch("http://admin.wafideals.com/apimalls/" + this.props.mallid, {
          method: "GET", headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
      })
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  isLoading: false,
                  dataSource: (responseJson.Mall),
              })
          })
          .catch((error) => {
              console.error(error)
          })
  }
    render(){
        return (
            <View style={styles.bodyBg}>
                    <Image source={{ uri: 'http://admin.wafideals.com/storage/' + this.state.dataSource.event_banner_image }} style={styles.EventBanner} />
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            {this.state.dataSource.name}
                        </Text>
                        <Text style={styles.mallText}>
                            {this.state.dataSource.event_description}
                        </Text>
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
    EventBanner: {
        width: '100%',
        aspectRatio: 10 / 5,
        resizeMode : 'contain',

        marginVertical : 5,

    },
    mallDesc : {
        backgroundColor : '#ffffff',
        padding : 20,

    },
    mallText :{
        fontSize : 13,
        color : '#000000',
        fontFamily: "MyriadPro-Regular",
        lineHeight : 20,
    },
    mallTitle : {
        fontSize : 24,
        fontFamily : 'MyriadPro-Semibold_2',
        color : '#000000',
        paddingVertical : 10,

    }

});

export default EventInfo;
