import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,ScrollView,ActivityIndicator, FlatList, Dimensions} from 'react-native';
import Header from '../../components/Header/Header';
import Navigation from 'react-native-navigation';
import ProductCards from '../../components/ProductCards/ProductCards';


class Brands extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount(){
    return fetch("http://admin.wafideals.com/apibrands", {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) =>{
                this.setState({
                  isLoading: false,
                  dataSource: responseJson,
                })
            })
            .catch((error) => {
              console.error(error)
            })
  }
    render(){
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20, alignItems : 'center', justifyContent : 'center'}}>
            <ActivityIndicator/>
          </View>
        )
      }
        return(

            <View style={{flex:1}}>
                <Header navigator={this.props.navigator} />
                <ScrollView ref={(c) => { this.parentScrollView = c; } }>
                <View style={styles.filtrBlk}>
                <FlatList
                  data={ this.state.dataSource }
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  numColumns = {2}
                  renderItem={({item}) =>
                    <TouchableOpacity>
                      <Text style={styles.fltrBrn}>{item.name}</Text>
                    </TouchableOpacity>

                  }
                  keyExtractor={(item, index) => index.toString()}
                />
                </View>
                <View style={styles.prdtWrapr}>

                <FlatList style={{ flex : 1, paddingBottom : 10}}
                  data={ this.state.dataSource }
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  numColumns = {2}
                  renderItem={({item}) =>
                    <View style={styles.gridItem}>
                        <View style={styles.gridWrapr}>
                            <TouchableOpacity onPress={this.OffersListHandler}>
                                <Image source={{ uri: 'http://admin.wafideals.com/storage/'+item.logo_path }} style={styles.ProductImg} />
                                <Text style={styles.center}>{item.max_discount}</Text>
                                <View style={styles.prdDescr}>
                                    <Text style={styles.offerTitle}>{item.name}</Text>
                                    <Text style={styles.offerDesc} ellipsizeMode='tail' numberOfLines={1}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                  }
                  keyExtractor={(item, index) => index.toString()}
                />
                </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    filtrBlk:{
        padding : 10,
        flexDirection : 'row',
        flex : 1,
        flexWrap: 'wrap',
    },
    fltrBrn : {
        borderRadius : 20,
        backgroundColor : '#929497',
        paddingVertical : 8,
        paddingHorizontal : 15,
        fontSize : 15,
        color: '#ffffff',
        textAlign : 'center',
        marginHorizontal : '2%',
        marginVertical : 5,
        alignItems : 'center'
    },
    prdtWrapr: {
        paddingTop: '2%',

        flexDirection: 'row',
        width: '100%',
        
      },
    gridWrapr: {
        flexDirection: 'column',
        width: '100%',
        flex : 1,
       
    },
    gridItem: {
        width: '46%', //Device width divided in almost a half
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginLeft: '2.5%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#cccccc',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 2,


    },
    prdDescr: {
        flexDirection: 'column',
        padding: 10,
        flexWrap: 'wrap',
        width: '100%',
        borderColor: '#ff0000'
    },
    ProductImg: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    offerTitle: {
        color: '#000000',
        fontSize: 18,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 15,
        fontFamily: "MyriadPro-Regular",

    },
    prodOffPercet: {
        backgroundColor: '#F6921E',
        color: '#ffffff',
        fontSize: 18,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 150,
    },
    center: {
        textAlign: 'center',
        backgroundColor: '#F6921E',
        paddingVertical: 5,
        color: '#ffffff',
        fontSize: 18,
        borderRadius: 25,
        marginTop: -20,
        marginHorizontal: '10%',
        width: '80%'
    }
});

export default Brands;
