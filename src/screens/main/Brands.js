import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPlaceholder from '../../components/CustomPlaceholder';
import SearchBar from 'react-native-searchbar';

class Brands extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category_id: 0,
            isLoading: true,
            dataSource: [],
            dataCategories: [],
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
            passProps: { brandid: id },

        });
    }
    fetchCategories = () => {
        return fetch("http://admin.wafideals.com/apicategories", { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataCategories: responseJson,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }


    showLeftMenu(navigator) {
        navigator.toggleDrawer({
            side: 'left'
        })
    }

    fnBrandsRefresh = (id) => {
        this.state.category_id = id;

        this.fetchBrands();
    }

    fetchBrands = () => {
        return fetch("http://admin.wafideals.com/apibrands?category_id=" + this.state.category_id, { method: 'GET' })
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
    componentDidMount() {
        this.fetchCategories();
        this.fetchBrands();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <CustomPlaceholder animate="fade">

                    </CustomPlaceholder>
                </View>
            )
        }

        var categories = this.state.dataCategories.map(
            function iterator(category) {
                return (
                    <ActionButton.Item size={35} buttonColor='#333333' titleBgColor='333333' textStyle={{ backgroundColor: '#3333333', color: '#333333' }} title={category.name} onPress={() => this.fnBrandsRefresh(category.id)} >
                        <Icon name="md-pricetags" size={12} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                );
            },
            this
        );

        return (

            <View style={{ flex: 1 }}>
                <View style={styles.HeaderBlk}>
                    <View style={styles.HeaderLhs}>
                        <View>
                            <TouchableOpacity onPress={() => this.showLeftMenu(this.props.navigator)}>
                                <Icon name="ios-menu" size={34} color="#ffffff" style={styles.hamburger} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity onPress={() => this.searchBar.show()}>
                        <Icon name="ios-search" size={34} color="#ffffff" style={styles.hamburger} />
                    </TouchableOpacity>
                    <SearchBar placeholder="Please Search Here..."
                        ref={(ref) => this.searchBar = ref}
                        handleResults={this._handleResults}
                    />
                </View>
                <ScrollView ref={(c) => { this.parentScrollView = c; }}>

                    <View style={styles.prdtWrapr}>
                        <FlatList style={{ flex: 1, paddingBottom: 10 }}
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
                                                <Text style={styles.offerDesc} numberOfLines={1}>{item.tag_line}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                            initialNumToRender={10}
                        />
                    </View>
                </ScrollView>
                <ActionButton offsetY={5} size={50} buttonColor="#ec1172" spacing={2} icon={<Icon name='ios-funnel' size={18} style={styles.filterIcon} />} renderIcon={active => active ? (<Icon name="md-close" size={32} style={styles.filterIcon} />) : (<Icon name="ios-funnel" size={26} style={styles.filterIcon} />)}>
                    {categories}
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
        flex: 1
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
        fontSize: 13,
        width: '100%',
        fontFamily: "MyriadPro-Semibold_2",
    },
    offerDesc: {
        color: '#58595B',
        fontSize: 12,
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
        fontSize: 16,
        height: 16,
        color: 'white',
    },
    filterIcon: {
        color: '#ffffff',


    },
    labelColor: {
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    HeaderBlk: {
        backgroundColor: '#0A266D',
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HeaderLhs: {
        flexDirection: 'row',
    },
    logoImg: {
        marginLeft: 5
    },
    hamburger: {
        padding: 5,
    },
    HeaderModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stateChangeText: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 16,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 2
    },
    HeaderModalInner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    map__pin: {
        marginLeft: 5,
        position: 'absolute',
        top: 15,
        right: 20,
        color: '#ffffff'

    }
});

export default Brands;
