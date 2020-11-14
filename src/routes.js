import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Dashboard from './screens/Dashboard';
import Establishment from './screens/Establishment';
import Establishmentlocation from './screens/Establishmentlocation';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createStackNavigator(
      {
        Dashboard,
        Establishment,
        Establishmentlocation,
      },
      {
        defaultNavigationOptions: {
          headerTintColor: '#8b25c4',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },

          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
        },
      },
    ),
  }),
);

export default Routes;
