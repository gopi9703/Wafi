import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import AuthScreen from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
import Forgotpassword from './src/screens/Auth/Forgotpassword';
import ChangePassword from './src/screens/Auth/ChangePassword';
import Offers from './src/screens/main/Offers';
import OffersList from './src/screens/main/OffersList/OffersList';
import Mall from './src/screens/main/Mall';
import mallDetails from './src/screens/main/mallDetails/mallDetails';
import Brands from './src/screens/main/Brands';
import BrandsList from './src/screens/main/BrandsList/BrandsList';
import BrandDetails from './src/screens/main/BrandsList/BrandDetails';
import HyperMarket from './src/screens/main/HyperMarket';
import marketDetails from './src/screens/main/marketDetails/marketDetails';
import flyerCarousel from './src/screens/main/marketDetails/flyerCarousel';
import flyerGrid from './src/screens/main/marketDetails/flyerGrid';
import SideDrawer from './src/components/SideDrawer/SideDrawer';
import Search from './src/components/Search/Search';
import AppExclusive from './src/screens/myAccount/AppExclusive';
import About from './src/screens/myAccount/About';
import Terms from './src/screens/myAccount/Terms';
import Notifications from './src/screens/myAccount/Notifications';
import MyAccount from './src/screens/myAccount/MyAccount';

import setStateModal from './src/components/Modal/setStateModal';


import EventInfo from './src/screens/main/EventInfo';
import mallInfo from './src/screens/main/mallInfo';


// Register Login Screens

Navigation.registerComponent("Wafi.AuthScreen", () => AuthScreen);
Navigation.registerComponent("Wafi.Register", () => Register);
Navigation.registerComponent("Wafi.Forgotpassword", () => Forgotpassword);

Navigation.registerComponent("Wafi.Offers", () => Offers);
Navigation.registerComponent("Wafi.OffersList", () => OffersList);
Navigation.registerComponent("Wafi.Mall", () => Mall);
Navigation.registerComponent("Wafi.mallDetails", () => mallDetails);
Navigation.registerComponent("Wafi.Brands", () => Brands);
Navigation.registerComponent("Wafi.BrandsList", () => BrandsList);
Navigation.registerComponent("Wafi.BrandDetails", () => BrandDetails);
Navigation.registerComponent("Wafi.HyperMarket", () => HyperMarket);
Navigation.registerComponent("Wafi.marketDetails", () => marketDetails);
Navigation.registerComponent("Wafi.flyerCarousel", () => flyerCarousel);
Navigation.registerComponent("Wafi.flyerGrid", () => flyerGrid);
Navigation.registerComponent("Wafi.SideDrawer", () => SideDrawer);

Navigation.registerComponent("Wafi.AppExclusive", () => AppExclusive);
Navigation.registerComponent("Wafi.About", () => About);
Navigation.registerComponent("Wafi.Terms", () => Terms);
Navigation.registerComponent("Wafi.Notifications", () => Notifications);

Navigation.registerComponent("Wafi.Search", () => Search);
Navigation.registerComponent("Wafi.setStateModal", () => setStateModal);

Navigation.registerComponent("Wafi.MyAccount", () => MyAccount);
Navigation.registerComponent("Wafi.ChangePassword", () => ChangePassword);

Navigation.registerComponent("Wafi.EventInfo", () => EventInfo);
Navigation.registerComponent("Wafi.mallInfo", () => mallInfo);

Navigation.startSingleScreenApp({
  screen: {
    screen: "Wafi.Register",
    navigatorStyle: {
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




// start the app
//startApp();
