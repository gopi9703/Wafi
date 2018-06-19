import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import Navigation from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../ReusableComponents/FontStyle';

export default class ProductList extends Component {
  mallDetailsHandler = () => {
    this.props.navigator.push({
      screen: 'Wafi.mallDetails',
      animated: true,
      animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
      navigatorStyle: {
        navBarBackgroundColor: '#0A266D',
        navBarButtonColor: '#ffffff'
    }
    });
  }
  webCall = () => {

    return fetch('http://admin.wafideals.com/apimalls')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentDidMount() {
    this.webCall();


  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true

    }
  }

  FlatListItemSeparator = () => {
    return (< View style={
      {
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B"
      }
    }
    />
    );
  }




  render() {
    if (this.state.isLoading) {
      return (

        <View style={
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }
        } >

          <ActivityIndicator size="large" />

        </View>

      );
    }

    return (

      <FlatList style={{ padding: 15, backgroundColor: '#D0D2D3', height : Dimensions.get('window').height / 1.1 }} initialNumToRender={3}
        data={this.state.dataSource}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={this.mallDetailsHandler}>
            <View style={styles.rowBlk}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: 'http://admin.wafideals.com/storage/'+item.logo_path }} style={styles.mallImg} />
                <View style={styles.mallTxtCol}>
                  <FontStyle style={styles.mallTitle}> {item.name} </FontStyle>
                  <FontStyle style={styles.mallLocality}> {item.location} </FontStyle>
                </View>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={30} color="#A6A8AB" />
              </View>

            </View>
          </TouchableOpacity>
        }
        numColumns={1}
        keyExtractor={item => item.id}
        initialNumToRender={10}
      />

    )
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E6E7E8',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 21
  },
  rowBlk: {
    marginVertical: 5,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  mallImg: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#D0D2D3',
    marginRight: 10,
    padding: 5,
  },
  mallTxtCol: {
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent : 'center'
  },
  mallTitle: {
    fontSize: 14,
    color: '#000',
  },
  mallLocality: {
    fontSize: 12,
    color: '#58595B'
  }
});
