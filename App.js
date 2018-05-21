import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
import Forgotpassword from './src/screens/Auth/Forgotpassword';
import Header from './src/components/Header/index';
// Register Login Screens

Navigation.registerComponent("Wafi.AuthScreen", () => AuthScreen);
Navigation.registerComponent("Wafi.Register", () => Register);
Navigation.registerComponent("Wafi.Forgotpassword", () => Forgotpassword);
Navigation.registerComponent("Wafi.Header", () => Header);

Navigation.startSingleScreenApp({
  screen : {
    screen : "Wafi.Header",
    navigatorStyle:  {
      navBarHidden: true
    },
    
  },
  
});  

