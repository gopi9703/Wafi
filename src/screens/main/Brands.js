import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import Header from '../../components/Header/Header';
import Navigation from 'react-native-navigation';
import ProductCards from '../../components/ProductCards/ProductCards';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPlaceholder from '../../components/CustomPlaceholder';

class Brands extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    BrandListHandler = (id) => {
        this.props.navigator.push({
            screen: 'Wafi.BrandsList',
            animated: true,
            animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff'
            },
            passProps:{ brandid:id },
            navigatorButtons: {
                leftButtons: [
                  {
                    id: 'back',
                    disableIconTint: true,
                    icon: require('../../img/back.png'), // This line loads our component as a nav bar button item
                    passProps: {
                        offerid: id
                    },
                  },
                ],
              },
        });
    }

    componentDidMount() {
        return fetch("http://admin.wafideals.com/apibrands", { method: 'GET' })
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignItems: 'flex-start'}}>
                    <CustomPlaceholder animate="fade">

                    </CustomPlaceholder>
                </View>
            )
        }
        return (

            <View style={{ flex: 1 }}>
                <Header navigator={this.props.navigator} />
                <ScrollView ref={(c) => { this.parentScrollView = c; }}>

                    <View style={styles.prdtWrapr}>

                        <FlatList style={{ flex: 1, paddingBottom:10}}
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={styles.gridItem}>
                                    <View style={styles.gridWrapr}>
                                        <TouchableOpacity onPress={() => this.BrandListHandler(item.id)}>
                                            <Image source={{ uri: 'http://admin.wafideals.com/storage/' + item.logo_path }} style={styles.ProductImg} />
                                            <Text style={styles.center}>{item.max_discount}</Text>
                                            <View style={styles.prdDescr}>
                                                <Text style={styles.offerTitle}>{item.name}</Text>
                                                <Text style={styles.offerDesc}  numberOfLines={1}>{item.description}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </ScrollView>
                <ActionButton buttonColor="#ec1172" spacing={10} icon={<Icon name='ios-funnel' size={26} style={styles.filterIcon} />} renderIcon={active => active ? (<Icon name="md-close" size={32} style={styles.filterIcon} />) : (<Icon name="ios-funnel" size={26} style={styles.filterIcon} />)}>
                    <ActionButton.Item buttonColor='#333333' titleBgColor='333333' textStyle={{ backgroundColor: '#3333333', color: '#333333' }} title="Category 1" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-pricetags" size={30} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#333333' textStyle={{ backgroundColor: '#3333333', color: '#333333' }} title="Category 2" onPress={() => { }}>
                        <Icon name="md-pricetags" size={30} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#333333' textStyle={{ backgroundColor: '#3333333', color: '#333333' }} title="Category 1" onPress={() => { }}>
                        <Icon name="md-pricetags" size={30} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    prdtWrapr: {
        paddingTop: '2%',
       
        flexDirection: 'row',
        width: '100%',
        flex : 1
    },
    gridWrapr: {
        flexDirection: 'column',
        width: '100%',
        flex: 1,
        

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
        aspectRatio: 10 / 10,
        resizeMode: 'stretch',
        alignSelf: 'center',

    },
    offerTitle: {
        color: '#000000',
        fontSize: 14,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 13,
        fontFamily: "MyriadPro-Regular",

    },
    prodOffPercet: {
        backgroundColor: '#F6921E',
        color: '#ffffff',
        fontSize: 14,
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
        fontSize: 14,
        borderRadius: 25,
        marginTop: -20,
        marginHorizontal: '10%',
        width: '80%'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    filterIcon: {
        color: '#ffffff',


    },
    labelColor: {
        backgroundColor: '#ffffff',
        color: '#000000'
    }
});

export default Brands;
