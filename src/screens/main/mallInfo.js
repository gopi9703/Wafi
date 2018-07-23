import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';


class mallInfo extends Component {

  constructor(props) {
      super(props)
      this.state = {
          isLoading: true,
          dataSource: [],
      }
  }

  componentDidMount() {
      return fetch('http://admin.wafideals.com/apihypermarkets/' + this.props.hypermarketid, {
          method: "GET", headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
      })
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
    render(){

      if (this.state.isLoading) {
          return (

              <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                  <ActivityIndicator size="large" />
              </View>

          );
      }

        return (
            <View style={styles.bodyBg}>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Mall Timings
                        </Text>
                        <Text style={styles.mallsmallText}>
                            {this.state.dataSource[0].opening_time} to {this.state.dataSource[0].closing_time}
                        </Text>
                    </View>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Phone
                        </Text>
                        <Text style={styles.mallsmallText}>
                          {this.state.dataSource[0].phone}
                        </Text>
                    </View>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Mobile
                        </Text>
                        <Text style={styles.mallsmallText}>
                        {this.state.dataSource[0].mobile}
                        </Text>
                    </View>
                    <View style={styles.mallDesc}>
                        <Text style={styles.mallTitle}>
                            Email
                        </Text>
                        <Text style={styles.mallsmallText}>
                        {this.state.dataSource[0].email}
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
        padding : 10,
        borderBottomWidth : 1,
        borderColor : '#cccccc'

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

    },
    mallsmallText : {
        fontSize : 13,
    }

});

export default mallInfo;
