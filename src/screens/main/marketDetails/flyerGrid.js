import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';

class flyerGrid extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoading: true

        }


    }

    static navigatorStyle = {
        tabBarHidden: true,
    }

    GetItem(flower_name) {

        Alert.alert(flower_name);

    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    webCall = () => {

        return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
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

    componentWillMount() {
        this.props.navigator.toggleTabs({
            to: 'hidden',
            animate: true,
        })
    }

    render() {

        if (this.state.isLoading) {
            return (

                <View style={styles.bodyBg} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <ActivityIndicator size="large" />

                </View>

            );

        }


        return (
            <View style={styles.bodyBg}>

                <FlatList

                    data={this.state.dataSource}
                    numColumns={3}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row', margin : 2 }}>
                            <Image source={{ uri: item.flower_image_url }} style={styles.mallImg} />
                        </View>

                    }

                    keyExtractor={(item, index) => index.toString()}

                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
    mallImg: {
        width: '100%',
        height: 100,
        borderRightWidth: 1,
        borderColor: '#D0D2D3',
        marginRight: 5,
        padding: 5,
        resizeMode : 'cover'
    },

});

export default flyerGrid;