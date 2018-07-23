import React, { Component }  from 'react';
import { AsyncStorage, Alert, View } from "react-native";
import { Navigation } from "react-native-navigation";


class Miscellaneous extends Component{
  constructor(props)
  {
      super(props)
      this.state =
      {
          category_id: 0,
          city_id: 0,
          isLoading: true,
      }
  }
  async registerPage()
  {
    Navigation.startSingleScreenApp({
      screen: {
        screen: "Wafi.Miscellaneous",
        navigatorStyle: {
          navBarHidden: true
        },
      }
    });
  }

  async prepareIcons()
  {
    const icons = await Promise.all([
      Icon.getImageSource('ios-home', 30),
      Icon.getImageSource('ios-cart', 30),
      Icon.getImageSource('ios-pricetags', 30),
      Icon.getImageSource('ios-heart', 30),
    ]);
    const [home, cart, pricetag, notifications, profile] = icons;
    return { home, cart, pricetag, notifications, profile };
  }

  async startApp()
  {
    const icons = await prepareIcons();
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'Wafi.Offers',
          label: 'Offers',
          title: 'Offers',
          icon: require('./icons/offer.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        },
        {
          screen: 'Wafi.Brands',
          label: 'Brands',
          title: 'Brands',
          icon: require('./icons/Brand.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        },
        {
          screen: 'Wafi.Mall',
          label: 'Mall',
          title: 'Mall',
          icon: require('./icons/mall.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        },
        {
          screen: 'Wafi.HyperMarket',
          label: 'Market',
          title: 'Market',
          icon: require('./icons/market.png'),
          navigatorStyle: {
            navBarHidden: true
          }
        }
      ],
      appStyle: {
        orientation: 'portrait',
        tabBarButtonColor: '#4d535e',
        tabBarSelectedButtonColor: '#ec1172',
        tabBarBackgroundColor: '#ffffff',
        initialTabIndex: 0,
        tabBarTranslucent: true,
        forceTitlesDisplay: true,
        tabFontSize: 13,
        selectedTabFontSize: 13,
        navBarTitleFontFamily: "MyriadPro-Regular",
        navBarNoBorder: true,
      },
      animationType: 'fade',
      drawer: {
        left: {
          screen: 'Wafi.SideDrawer',
        },
      }

    });
  }

  componentDidMount()
  {
    const is_user_logged_in = this.retrieveItem('is_logged_in')
    this.startApp()
  }

  async retrieveItem(key)
  {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      this.setState({key: item})
      return item;
    }catch (error)
    {
      console.log(error.message);
    }
  }

  async storeItem(key, item)
  {
    try {
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

  render()
  {
    const is_logged_id1 = this.retrieveItem('is_logged_id')
    return (<View />);
  }

}

export default Miscellaneous;
