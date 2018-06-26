import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Placeholder from 'rn-placeholder';

const customPlaceholder = props => {
    const style = { backgroundColor: props.bgColor };
    return (
        <View style={styles.PlaceholderContainer}>
            <View style={styles.headerBlk}>
                <Text style={{width: '100%', backgroundColor: '#D1D1D1',}}></Text>
            </View>
            <View style={styles.gridWrapr}>
                <View style={styles.gridItem}>
                    <Text style={styles.ImgPlaceholder}></Text>
                    <Text style={styles.boxes}></Text>
                    <Text style={styles.boxes2}></Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.ImgPlaceholder}></Text>
                    <Text style={styles.boxes}></Text>
                    <Text style={styles.boxes2}></Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.ImgPlaceholder}></Text>
                    <Text style={styles.boxes}></Text>
                    <Text style={styles.boxes2}></Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.ImgPlaceholder}></Text>
                    <Text style={styles.boxes}></Text>
                    <Text style={styles.boxes2}></Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.ImgPlaceholder}></Text>
                    <Text style={styles.boxes}></Text>
                    <Text style={styles.boxes2}></Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.ImgPlaceholder}></Text>
                    <Text style={styles.boxes}></Text>
                    <Text style={styles.boxes2}></Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    PlaceholderContainer: {
        backgroundColor: '#E6E7E8',
        width: '100%',
        padding : 0,
        margin : 0,
        alignItems : 'flex-start'

    },
    gridWrapr: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '47.5%', //Device width divided in almost a half
        height: Dimensions.get('window').height / 3,
        alignItems: 'flex-start',
        marginBottom: 15,
        marginLeft: '2.5%',
        borderRadius: 2,
    },
    ImgPlaceholder: {
        width: '100%',
        aspectRatio: 10 / 8,
        backgroundColor: '#f4f4f4'
    },
    boxes: {
        width: '90%',
        padding: 5,
        marginVertical: 5,
        backgroundColor: '#f4f4f4',
        marginLeft : 5,
    },
    boxes2: {
        width: '70%',
        padding: 5,
        marginVertical: 5,
        backgroundColor: '#f4f4f4',
        marginLeft : 5,
    },
    headerBlk : {
        width: Dimensions.get('window').width,
        marginBottom : 10,
        backgroundColor: '#f4f4f4',
        height: 70,
        marginTop : 0
        
    
    }
});

export default Placeholder.connect(customPlaceholder);