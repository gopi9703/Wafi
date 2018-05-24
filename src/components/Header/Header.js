import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 class Header extends Component{
    render(){
        return(
            <View>
               <View style={styles.HeaderBlk}>
                 <View style={styles.HeaderLhs}>
                    <View>
                            <TouchableOpacity>
                            <Icon name="ios-menu" size={34} color="#ffffff" style={styles.hamburger} /> 
                            </TouchableOpacity>  
                    </View> 
                    <View>
                            <Image source={require('../../img/header_Logo.png')}  style={styles.logoImg} />
                            
                    </View>
                  </View>  
                  <TouchableOpacity>
                      <Icon name="ios-search" size={34} color="#ffffff" style={styles.hamburger} />
                  </TouchableOpacity>   
               </View>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
   bodyBg:{
       backgroundColor : '#E6E7E8',
       flex : 1,
   },
   HeaderBlk:{
       backgroundColor : '#0A266D',
       paddingTop : 15,
       paddingBottom : 10,
       paddingLeft : 20,
       paddingRight : 20,
       flexDirection : 'row',
       justifyContent : 'space-between',
       alignItems : 'center',
   },
   HeaderLhs : {
    flexDirection : 'row',
   },
   logoImg:{
       marginLeft: 10
   },
   hamburger : {
       padding : 5,
   }
});

export default Header;