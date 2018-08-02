import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import Navigation from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../ReusableComponents/FontStyle';
import Placeholder from 'rn-placeholder';

export default class ProductList extends Component {

  marketDetailsHandler = (id) => {
    this.props.navigator.push({
      screen: 'Wafi.marketDetails',
      animated: true,
      animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
      navigatorStyle: {
        navBarBackgroundColor: '#0A266D',
        navBarButtonColor: '#ffffff'
      },

      passProps: { hypermarketid: id },
    });
  }
  webCall = () => {

    return fetch('http://admin.wafideals.com/apihypermarkets')
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

  componentDidMount() {
    this.webCall();


  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
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
        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
          <View style={styles.placeholder}>
            <Placeholder.ImageContent animate="fade"
              position="left"
              hasRadius
              lineNumber={2}
              textSize={14}
              lineSpacing={5}
              color="#A2A2A2"
              width="100%"
              lastLineWidth="80%"
              firstLineWidth="100%"
            />
          </View>
        </View>

      )
    }

    return (
      
      <FlatList style={{ padding: 15, backgroundColor: '#D0D2D3' }} initialNumToRender={3}
        data={this.state.dataSource}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => this.marketDetailsHandler(item.id)}>
            <View style={styles.rowBlk}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.logo_path }} style={styles.mallImg} />
                <View style={styles.mallTxtCol}>
                  <FontStyle style={styles.mallTitle}> {item.name} </FontStyle>
                  <View style={{ flexDirection: 'row' }}>
                    <FontStyle style={styles.mallLocality} numberOfLines={1} > {item.tagline} </FontStyle>
                  </View>
                </View>
              </View>
              <View style={styles.iconAlign}>
                <Icon name="ios-arrow-forward" size={30} color="#A6A8AB" />
                
              </View>
              <Text style={styles.iconAlignText}>{(item.flyers_count > 0) ? item.flyers_count : 0} Flyers</Text>
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
    width: Dimensions.get('window').width < 360 ? 60 : 80,
    height: Dimensions.get('window').width < 360 ? 60 : 80,
    borderRightWidth: 1,
    borderColor: '#D0D2D3',
    marginRight: 5,
    padding: 5,
    resizeMode: 'contain'
  },
  mallTxtCol: {
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: '#D0D2D3',
    paddingLeft: 10,
  },
  mallTitle: {
    fontSize: Dimensions.get('window').width < 360 ? 14 : 16,
    color: '#000',
    fontFamily: "MyriadPro-Semibold_2",
  },
  mallLocality: {
    fontSize: Dimensions.get('window').width < 360 ? 12 : 13,
    color: '#58595B',
    flex: 1, flexWrap: 'wrap',
    paddingTop: 5,

  },
  iconAlign: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconAlignText: {
    fontSize: 12,
    position : 'absolute',
    right : 10,
    bottom : 5
  },
  placeholder: {
    marginBottom: 5,
    marginVertical: 5,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
  }
});
