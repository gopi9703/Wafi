import React, { Component }  from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';

export default class ProductList extends Component{
    constructor(props){
        super(props)
		this.state = {
			isLoading: true
		}
    }

    
    componentDidMount(){
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState = {
                isLoading: false,
                dataSource : responseJson.book_array
            }

        })
        .catch((error) => {
            this.setState({ error, loading: false });
        })
    }
	
	FlatListItemSeparator = () => {
      return(
        <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B"}} />
      );
    }

    render(){
        if (this.state.isLoading) {
            return (

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                  <ActivityIndicator size="large" />

               </View>

             );

           }
        return (
          
                <FlatList

					data={ this.state.dataSource }

					ItemSeparatorComponent = {this.FlatListItemSeparator}

					renderItem={({item}) =>

						<View>
							<Image source = {{ uri: item.image }} />
							<Text>{item.book_title}</Text>
							<Text>{item.author}</Text>
						</View>


					}
					numColumns={2}
					keyExtractor={(item, index) => index.toString()}

				/>
          
        )
      }
    }       
  
    const styles = StyleSheet.create({
        listWrapper:{
            flex :1,
        }
    });
  