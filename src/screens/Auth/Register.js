import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class AuthScreenRegister extends Component{
    handlePress = () => {
        this.props.navigator.push({
          screen: 'Wafi.AuthScreen',
          navigatorStyle:  {
            navBarHidden: true
          },
        });
      };

    render(){
        return(
            <LinearGradient colors={['#621C6C', '#8E0076', '#B8007F']} style={styles.linearGradient}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
            <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Your Name" />
 <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Enter Your EMmail ID" keyboardType={'email-address'} />
 <TextInput style={styles.inputBox}  underlineColorAndroid = 'rgba(0,0,0,0)'   placeholderTextColor="white"
 placeholder="Mobile Number" keyboardType={'numeric'} />
 <TouchableOpacity style={styles.buttonBlock}>
                 <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            <View style={styles.singUpTextBlk}>
            <TouchableOpacity>
                    <Text style={styles.singUpText}>Already Member?  <Text style={styles.singUpTextBold} onPress={this.handlePress}>Sign In</Text></Text>
                   
                </TouchableOpacity>
 
            </View>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container : {

        alignItems : 'center',
        justifyContent : 'center',
        width:'100%',
       flexGrow : 1,

        
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
      },
      inputBox : {
        margin : 5,
        width:'90%',
        color: 'rgba(255,255,255,.8)',
        padding : 10,
        borderRadius : 3,
        borderWidth: 2, 
        borderColor: '#ffffff',
        fontSize : 16   
      },
      buttonBlock:{
          backgroundColor : '#ffffff',
          borderRadius: 5,
          padding:10,
          color:'rgba(0,0,0,1)',
          width: '90%',
          textAlign : 'center',
          margin: 5,
      },
      buttonText:{
         color:'#000000',
         fontSize : 16,
         textAlign: 'center',
         padding: 5,
         
      },
      singUpTextBlk:{
          flexDirection:'row',
          justifyContent:'center',
          flex: 1,
          width:'90%',
          alignItems:'center'
      },
      singUpText:{
          color:'#fff',
          fontSize:15,
          paddingHorizontal: 10,
          paddingVertical : 5,
          
      },
      singUpTextBold:{
        color:'#fff',
        fontSize:15,
        paddingHorizontal: 10,
        paddingVertical : 5,
        fontWeight : 'bold',
      }
});

export default AuthScreenRegister;