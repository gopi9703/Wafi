import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, RefreshControl, TextInput, AsyncStorage, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, ActivityIndicator, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-searchbar';
import MarketProductList from '../../components/ProductList/MarketProductList';


class HyperMaket extends Component {

  constructor(props) {
    super(props)
    this.state = {
      citiesData: [],
      city_id: '',
      cityname: '',
      refreshing: false,
    }

  }

  showLeftMenu(navigator) {
    navigator.toggleDrawer({
      side: 'left'
    })
  }
  render() {


    return (
      <View style={styles.bodyBg}>
        <MarketProductList navigator={this.props.navigator} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bodyBg: {
    backgroundColor: '#E6E7E8',
    flex: 1,
}
});

export default HyperMaket;
