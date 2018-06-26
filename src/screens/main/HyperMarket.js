import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import Header from '../../components/Header/Header';
import MarketProductList from '../../components/ProductList/MarketProductList';


class HyperMaket extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <Header navigator={this.props.navigator} />   
        <MarketProductList  navigator={this.props.navigator} />
      </View>
   )
  }
}

export default HyperMaket;


