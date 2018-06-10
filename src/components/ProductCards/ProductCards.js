import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import HeaderText from '../ReusableComponents/HeaderText';
import FontStyle from '../ReusableComponents/FontStyle';


class ProductCards extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.OnNavigatorEvent);
    }

    OffersListHandler = () => {
        this.props.navigator.push({
            screen: 'Wafi.OffersList',
            animated: true,
            animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
            navigatorStyle: {
                navBarBackgroundColor: '#0A266D',
                navBarButtonColor: '#ffffff'
            },
           
            navigatorButtons: {
                rightButtons: [{
                    icon: require('../../../src/img/header_Logo.png'),
                    id: 'Back',
                    disableIconTint: true, 
                }],
            }

        });

    }

    





BrandListHandler = () => {
    this.props.navigator.push({
        screen: 'Wafi.BrandsList',
        animated: true,
        animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
        navigatorStyle: {
            navBarBackgroundColor: '#0A266D',
            navBarButtonColor: '#ffffff'
        },
       
        navigatorButtons: {
            rightButtons: [{
                icon: require('../../../src/img/header_Logo.png'),
                id: 'Back',
                disableIconTint: true,
            }],
        }
    });
}

BrandDetailsHandler = () => {
    this.props.navigator.push({
        screen: 'Wafi.BrandDetails',
        animated: true,
        animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal'
        navigatorStyle: {
            navBarBackgroundColor: '#0A266D',
            navBarButtonColor: '#ffffff'
        },
       
        navigatorButtons: {
            rightButtons: [{
                icon: require('../../../src/img/header_Logo.png'),
                id: 'Back',
                disableIconTint: true,
            }],
        }
    });
}



render() {
    return (
        <View style={styles.prdtWrapr}>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity onPress={this.OffersListHandler}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity onPress={this.BrandListHandler}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity >
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.gridItem}>
                <View style={styles.gridWrapr}>
                    <TouchableOpacity onPress={this.BrandDetailsHandler}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.ProductImg} />
                        <Text style={styles.center}>50% OFF</Text>
                        <View style={styles.prdDescr}>
                            <Text style={styles.offerTitle}>Flat 50% OFF</Text>
                            <Text style={styles.offerDesc}>Sample Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>



    )
}
}

const styles = StyleSheet.create({
    prdtWrapr: {
        paddingTop: '2%',
        paddingBottom: '2%',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        flexWrap: 'wrap',



    },
    gridWrapr: {
        flexDirection: 'column',
        width: '100%'
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


export default ProductCards;