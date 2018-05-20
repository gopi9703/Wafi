import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth/Auth';
import Register from './src/screens/Auth/Register';
import Forgotpassword from './src/screens/Auth/Forgotpassword';
// Register Login Screens

Navigation.registerComponent("Wafi.AuthScreen", () => AuthScreen);
Navigation.registerComponent("Wafi.Register", () => Register);
Navigation.registerComponent("Wafi.Forgotpassword", () => Forgotpassword);

Navigation.startSingleScreenApp({
  screen : {
    screen : "Wafi.AuthScreen",
    navigatorStyle:  {
      navBarHidden: true
    },
    
  },
  
});  

