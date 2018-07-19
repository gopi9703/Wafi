import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions,AsyncStorage, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Navigation} from 'react-native-navigation';



class setStateModal extends Component{
  constructor(props) {
      super(props)
      this.state = {
          isLoading: true,
          dataSource: [],
          'city_id' : '',
      }
      this.retrieveItem('city_id')
  }

  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      {key == 'city_id' &&
        this.setState({'city_id': item})
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async storeItem(key, item) {
  try {
    var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {

  }
  }
  componentDidMount() {
      return fetch("http://admin.wafideals.com/apicities", { method: 'GET' })
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

    hideModal = (city_id, navigator) => {
        this.state.city_id = city_id;
        this.storeItem('city_id', city_id);
        navigator.dismissLightBox();
    }

    render (){
      var cities = this.state.dataSource.map(
                  function iterator( city ) {
                      return(
                        <TouchableOpacity onPress={() => this.hideModal(city.id ,this.props.navigator)}>
                            <Text style={styles.citycol}>{city.name}</Text>
                        </TouchableOpacity>
                      );
                  },
                  this
              );
        return (
            <View style={styles.modalWrapper}>
                <Text style={styles.modalTitle}>Select Your Region</Text>
                <ScrollView>
                    <View style={styles.locateList}>
                        {cities}
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    modalWrapper :{
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').width,
        backgroundColor: 'white',
        borderRadius: 5,

    },
    modalTitle : {
        backgroundColor : '#0a266d',
        color: '#ffffff',
        fontSize : 18,
        textAlign : 'center',
        paddingVertical : 10,
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5,
        fontFamily: "MyriadPro-Regular",
    },
    locateList:{
        paddingVertical : 15,
        paddingHorizontal : 10,
    },
    citycol : {
        fontFamily: "MyriadPro-Regular",
        color: '#58595B',
        fontSize : 15,
        paddingVertical: 10,
        paddingHorizontal : 5,
        borderBottomColor : '#cccccc',
        borderBottomWidth : 1
    }
});

export default setStateModal;
