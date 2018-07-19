
const helpers = {
    tabBasedapp: function(){
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
      
    },
   
}

export default helpers;

