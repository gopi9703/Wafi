import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import AuthScreen from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
import Forgotpassword from './src/screens/Auth/Forgotpassword';
import Offers from './src/screens/main/Offers';
import OffersList from './src/screens/main/OffersList/OffersList';
import Mall from './src/screens/main/Mall';
import Brands from './src/screens/main/Brands';
import BrandsList from './src/screens/main/BrandsList/BrandsList';
import HyperMarket from './src/screens/main/HyperMarket';
import SideDrawer from './src/components/SideDrawer/SideDrawer';

// Register Login Screens

Navigation.registerComponent("Wafi.AuthScreen", () => AuthScreen);
Navigation.registerComponent("Wafi.Register", () => Register);
Navigation.registerComponent("Wafi.Forgotpassword", () => Forgotpassword);

Navigation.registerComponent("Wafi.Offers", () => Offers);
Navigation.registerComponent("Wafi.OffersList", () => OffersList);
Navigation.registerComponent("Wafi.Mall", () => Mall);
Navigation.registerComponent("Wafi.Brands", () => Brands);
Navigation.registerComponent("Wafi.BrandsList", () => BrandsList);
Navigation.registerComponent("Wafi.HyperMarket", () => HyperMarket);

Navigation.registerComponent("Wafi.SideDrawer", () => SideDrawer);

Navigation.startSingleScreenApp({
  screen : {
    screen : "Wafi.AuthScreen",
    navigatorStyle:  {
      navBarHidden: true
    }, 
  }
});  

async function prepareIcons() {
  const icons = await Promise.all([
    Icon.getImageSource('ios-home', 30),
    Icon.getImageSource('ios-cart', 30),
    Icon.getImageSource('ios-pricetags', 30),
    Icon.getImageSource('ios-heart', 30),
  ]);
  const [home, cart, pricetag, notifications, profile] = icons;
  return { home, cart, pricetag, notifications, profile };
}

// and then
async function startApp() {
  const icons = await prepareIcons();
    Navigation.startTabBasedApp({
      tabs: [
                {
                    screen: 'Wafi.Offers', 
                    label: 'Offers',        
                    title: 'Offers', 
                    icon: icons.home, 
                    
                    navigatorStyle:  {
                      navBarHidden: true
                    }
                },
                {
                    screen: 'Wafi.Brands', 
                    label: 'Brands', 
                    title: 'Brands',              
                    icon: icons.pricetag,
                    navigatorStyle:  {
                      navBarHidden: true
                    } 
                },
                {
                    screen: 'Wafi.Mall',
                    label: 'Mall',  
                    title: 'Mall',
                    icon: require('./src/img/header_Logo.png'), 
                    selectedIcon: require('./src/img/header_Logo.png'), 
                    navigatorStyle:  {
                      navBarHidden: true
                    }
                },
                {
                    screen: 'Wafi.HyperMarket', 
                    label: 'Market',
                    title: 'Market',                   
                    icon: icons.cart,
                    navigatorStyle:  {
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
          tabFontSize : 13,
          selectedTabFontSize : 13,
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

  // start the app
  startApp();

