import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Navigation} from 'react-native-navigation';



class setStateModal extends Component{
    render (){
        return (
            <View style={styles.modalWrapper}>
                <Text style={styles.modalTitle}>Select Your Region</Text>
                <ScrollView>
                    <View style={styles.locateList}>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.citycol}>Oman</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    modalWrapper :{
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').width,
        backgroundColor: 'white',
        borderRadius: 5,
      
    },
    modalTitle : {
        backgroundColor : '#0a266d',
        color: '#ffffff',
        fontSize : 18,
        textAlign : 'center',
        paddingVertical : 10,
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5,
        fontFamily: "MyriadPro-Regular", 
    },
    locateList:{
        paddingVertical : 15,
        paddingHorizontal : 10,
    },
    citycol : {
        fontFamily: "MyriadPro-Regular",
        color: '#58595B',
        fontSize : 15,
        paddingVertical: 10,
        paddingHorizontal : 5,
        borderBottomColor : '#cccccc',
        borderBottomWidth : 1
    }
});

export default setStateModal;