import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Header1 from '../components/Header/Header';


class Home extends Component{
     render(){
        return(
            <View style={styles.bodyBg}>
               <Header1 /> 

              <Text>Home page</Text>           
            </View>
           
        );
        }
    }

    const styles = StyleSheet.create({
        bodyBg:{
            backgroundColor : '#E6E7E8',
            flex : 1,
        }
    });

    export default Home;