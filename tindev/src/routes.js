import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login/index';
import Home from './pages/Home/index';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Home, 
    })
)