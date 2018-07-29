import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  SectionList,
  Text,
  NativeModules,
  Button,
  FlatList,
  Switch,
  View
} from 'react-native';


export default class alarm extends Component {

  state={
    data:[
      { name:'First' , isOn:true },
      { name:'Second', isOn:true },
      { name:'Third' , isOn:true },
      { name:'Fourth' , isOn:false }
    ],
    selected:true,
  }

  _keyExtractor = (item, index) => item.name;

  _onValueChanged = (item,value) => 
  {    
      var items = this.state.data;
      var index = items.indexOf(item);
      items[index].isOn = value;
      this.setState({data:items});
      this.setState({selected:!this.state.selected});  
  };

  _renderItem = ({item}) => 
  (    
    <View>  
        <Text>{ item.name }</Text>
        <Switch value={item.isOn}  
        onValueChange={(value) =>
        {        
         this._onValueChanged(item,value);
        }}/>
    </View>
  )

  render() {
    return (

       <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          extraData={this.state.selected}  // This is the Key you need to privde extra data parmater
          keyExtractor={this._keyExtractor}
        />

    );
  }
}
AppRegistry.registerComponent('alarm', () => alarm);