import Navigation from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'Wafi.Offers', 
                    label: 'Offers',        
                    title : 'Offers'
                },
                {
                    screen: 'Wafi.Brands', 
                    label: 'Brands',  
                    title : 'Brands'
                },
                {
                    screen: 'Wafi.Mall',
                    label: 'Mall',  
                    title : 'Mall'
                },
                {
                    screen: 'Wafi.HyperMarket', 
                    label: 'HyperMarket',  
                    title : 'HyperMarket'
                }
            ]
        });
}

export default startTabs;