import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
import Forgotpassword from './src/screens/Auth/Forgotpassword';
import Home from './src/screens/Home';


// Register Login Screens

Navigation.registerComponent("Wafi.AuthScreen", () => AuthScreen);
Navigation.registerComponent("Wafi.Register", () => Register);
Navigation.registerComponent("Wafi.Forgotpassword", () => Forgotpassword);
Navigation.registerComponent("Wafi.Header", () => Header);
Navigation.registerComponent("Wafi.Home", () => Home);

Navigation.startSingleScreenApp({
  screen : {
    screen : "Wafi.Home",
    navigatorStyle:  {
      navBarHidden: true
    },
    
  },
  
});  

