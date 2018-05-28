import React, {
    Component
  }
  
  from 'react';
  import {
    View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator
  }
  
  from 'react-native';
  
  export default class ProductList extends Component {
    render(){
      return(
        <View>
          <Text>1</Text>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    listWrapper: {
      justifyContent: 'center',
       flex:1,
       margin: 5,
       backgroundColor: '#000',
    },
    textStyle:{
      textAlign: 'center',
      fontSize: 21
    }
  });
  