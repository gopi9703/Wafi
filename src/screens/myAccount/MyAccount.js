import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class MyAccount extends Component {

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    static navigatorStyle = {
        navbarHidden: false,
    };


    render() {
        return (
            <View style={styles.bodyBg}>
                <View style={styles.pflheadr}>
                    <Image source={require('../../img/avatar.png')} style={styles.avatarImg} />
                    <Text style={styles.prflName}>First Name Last Name  <Icon name="md-create" size={20} color="#ffffff" style={styles.hamburger} /></Text>
                </View>
                <ScrollView>
                    <View style={styles.prflRow}>
                        <Text style={styles.prflRowTextLhs}>First Name  </Text>
                        <Text style={styles.prflRowText}>Gopi </Text>
                    </View>
                    <View style={styles.prflRow}>
                        <Text style={styles.prflRowTextLhs}>Last Name  </Text>
                        <Text style={styles.prflRowText}>Krishna </Text>
                    </View>
                    <View style={styles.prflRow}>
                        <Text style={styles.prflRowTextLhs}>Gender  </Text>
                        <Text style={styles.prflRowText}>Male </Text>
                    </View>
                    <View style={styles.prflRow}>
                        <Text style={styles.prflRowTextLhs}>Email  </Text>
                        <Text style={styles.prflRowText}>gopi9703@gmail.com</Text>
                    </View>
                    <View style={styles.prflRow}>
                        <Text style={styles.prflRowTextLhs}>Mobile  </Text>
                        <Text style={styles.prflRowText}>974 - 2222 - 3645 </Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.PwdRow}>
                            <Text style={styles.changePwd}>Change Password  </Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#E6E7E8',
        flex: 1,

    },
    pflheadr: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A266D',
        height: Dimensions.get('window').height / 2.5,
        marginBottom: 10
    },
    avatarImg: {
        width: 64,
        height: 64,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 200
    },
    prflName: {
        color: '#ffffff',
        fontSize: 20,
        marginTop: 15,
        fontFamily: "MyriadPro-Regular",
    },
    prflRow: {
        marginVertical: 5,
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    prflRowTextLhs: {
        color: '#666666',
        fontFamily: "MyriadPro-Regular",
        fontSize: 14,
    },
    prflRowText: {
        color: '#000000',
        fontFamily: "MyriadPro-Regular",
        fontSize: 14,
    },
    PwdRow: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ec1172',
        marginTop : 10,
    },
    changePwd: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: "MyriadPro-Regular",
    }
});

export default MyAccount;