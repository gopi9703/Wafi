import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';


class Mall extends Component {
  render(){
    return (
      <View>
       <Header />   
       <ProductList />
      </View>
   )
  }
}

export default Mall;


