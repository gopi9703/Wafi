import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyle from '../../../components/ReusableComponents/FontStyle';
import HeaderText from '../../../components/ReusableComponents/HeaderText';

class OffersList extends Component{
    render(){
        return (
            <View style={styles.bodyBg}>
                <View style={styles.BrandIntro}>
                    <View>
                        <Image source={{uri:'https://res.cloudinary.com/simpleview/image/upload/crm/paducah/Dunkin-Donuts-Paducah-Kentucky0-9e503d415056a36_9e503ed3-5056-a36a-0a8f8108bf00f366.jpg'}} style={styles.BrandLogo} />                       
                    </View>
                   
                        <View style={styles.infoWrpr}>
                            <TouchableOpacity>
                                <View style={styles.IconBlk}>
                                  <Icon name="ios-call" size={30} color="#ffffff" style={styles.iconStyler} /> 
                                  <FontStyle> <Text style={[styles.iconText]}>Contact</Text></FontStyle>
                                 </View>
                            </TouchableOpacity> 
                            <TouchableOpacity>
                                <View style={styles.IconBlk}>
                                    <Icon name="ios-pin" size={30} color="#ffffff" style={[styles.iconStyler, styles.location]} /> 
                                    <Text style={[styles.iconText]}>Location</Text>
                                </View>
                            </TouchableOpacity> 
                            <TouchableOpacity>
                            <View style={styles.IconBlk}>
                                <Icon name="md-share" size={28} color="#ffffff" style={[styles.iconStyler, styles.share]} /> 
                                <Text style={styles.iconText}>Share</Text>
                            </View>
                            </TouchableOpacity> 
                            <TouchableOpacity>
                                <View style={styles.IconBlk}>
                                    <Icon name="ios-heart" size={26} color="#ffffff" style={[styles.iconStyler, styles.favorite]} /> 
                                    <Text style={styles.iconText}>My Fav</Text>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    
                </View>

                <View style={{position : 'relative'}}>
                     <Image source={{uri:'http://www.dunkindonuts.pk/promo.jpg'}} style={styles.BrandBanner} />  
                     <FontStyle style={[styles.headerTitle, styles.brandOffPercent]}>
                        <HeaderText>20% OFF</HeaderText>
                    </FontStyle>
                </View>
               
                <View style={styles.BrandDescWrap}>
                    <View style={styles.blkViewBrand}>
                        <Text>
                            <FontStyle style={styles.headerTitle}>
                                <HeaderText>Dunkin Donuts</HeaderText>
                            </FontStyle>
                        </Text>
                        <FontStyle style={styles.textColor}>
                                <HeaderText>18 Days Left</HeaderText>
                            </FontStyle>
                    </View>
                    <View style={styles.blkViewBrand}>
                        <Text>
                            <FontStyle style={styles.headerTitle}>
                                <HeaderText>Sample Description</HeaderText>
                            </FontStyle>
                        </Text>
                        <FontStyle style={styles.textColor}>
                        <Icon name="md-time" size={18} color="#ffffff" style={[styles.timer]} /> <HeaderText> 09.00 - 11.00 pm</HeaderText>
                            </FontStyle>
                    </View>
                    <View style={styles.offerDesc}>
                        <FontStyle>
                            <HeaderText style={styles.paraStyle}>Shake up the Summer with our Delicious Shakes! Limited Time Only. </HeaderText>
                        </FontStyle>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg:{
        backgroundColor : '#E6E7E8',
        flex : 1,
        padding : 5,
    },
    BrandIntro:{
        backgroundColor : '#ffffff',
        borderRadius : 5,
        paddingVertical : 10,
        paddingHorizontal : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'

    },
    BrandLogo:{
        width:60,
        height : 60,
    },
    iconStyler:{
        color:'#A7802F',
        borderColor:'#BBBDBF',
        borderWidth : 1,
        borderRadius: 50,
        paddingHorizontal :10,
        paddingVertical : 5,
        
    },
    infoWrpr:{
        flexDirection:'row',
        justifyContent:'center'
    },
    IconBlk:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems : 'center',
        marginLeft : 10,
       
    },
    iconText:{
        fontSize: 14,
    },
    location:{
       paddingHorizontal:12
    },
    BrandBanner:{
        width: '100%',
        height: 220,
        resizeMode: 'contain',
        borderRadius : 5,

    },
    favorite:{
        paddingHorizontal : 9,
        paddingTop : 8,
        paddingBottom : 4,
    },
    share :{
        paddingHorizontal :9,
    },
    BrandDescWrap :{
        backgroundColor : "#ffffff",
        padding: 15,
    },
    blkViewBrand:{
        justifyContent:'space-between',
        flexDirection : 'row',
        marginBottom : 5,
        alignItems : 'center'
    },
    headerTitle : {
        color : '#000'
    },
    textColor : {
        color : '#58595B'
    },
    offerDesc:{
        borderColor: '#58595B',
        borderTopWidth : 1,
        borderBottomWidth : 0,
        borderRightWidth : 0,
        borderLeftWidth	: 0,
        paddingVertical : 15,
        marginTop : 15
    },
    paraStyle:{
        lineHeight : 22,
    },
    timer:{
        color : '#EF038F',
        top : 15,
        position : 'absolute'
        
    },
    brandOffPercent : {
        backgroundColor : '#EF038F',
        fontSize : 30,
        color: '#fff',
        paddingVertical : 10,
        paddingHorizontal : 25,
        position : 'absolute',
        right : 0,
        top : 15,
    }
});


export default OffersList;