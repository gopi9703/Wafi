import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
import Forgotpassword from './src/screens/Auth/Forgotpassword';
import StartMainTabs from './src/screens/main/StartMainTabs';
import Offers from './src/screens/main/Offers';
import Mall from './src/screens/main/Mall';
import Brands from './src/screens/main/Brands';
import HyperMarket from './src/screens/main/HyperMarket';

// Register Login Screens

Navigation.registerComponent("Wafi.AuthScreen", () => AuthScreen);
Navigation.registerComponent("Wafi.Register", () => Register);
Navigation.registerComponent("Wafi.Forgotpassword", () => Forgotpassword);
Navigation.registerComponent("Wafi.StartMainTabs", () => StartMainTabs);
Navigation.registerComponent("Wafi.Offers", () => Offers);
Navigation.registerComponent("Wafi.Mall", () => Mall);
Navigation.registerComponent("Wafi.Brands", () => Brands);
Navigation.registerComponent("Wafi.HyperMarket", () => HyperMarket);

Navigation.startSingleScreenApp({
  screen : {
    screen : "Wafi.AuthScreen",
    navigatorStyle:  {
      navBarHidden: true
    },
    
  },
  
});  

