
import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class startMainTabs extends Component {
	constructor(props) {
		super(props);

		this._switchToTabBased = this._switchToTabBased.bind(this);
	}

	_switchToTabBased() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'Wafi.Offers', 
                    label: 'Offers',        
                    title : 'Offers'
                },
                {
                    screen: 'Wafi.Brands', 
                    label: 'Brands',  
                    title : 'Brands'
                },
                {
                    screen: 'Wafi.Mall',
                    label: 'Mall',  
                    title : 'Mall'
                },
                {
                    screen: 'Wafi.HyperMarket', 
                    label: 'HyperMarket',  
                    title : 'HyperMarket'
                }
            ]
        });
    	          
	}

	
}