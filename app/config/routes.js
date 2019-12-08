import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "../screens/Home";
import Device from "../screens/Device";
import Location from "../screens/Location";

const AppStackNavigator = createStackNavigator(
    {
        Home: Home,
        Device: Device,
        Location: Location
    },
    {   
        defaultNavigationOptions: {
        header: null,
      }
    });
export default createAppContainer(AppStackNavigator);