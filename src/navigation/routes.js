import {createAppContainer, createStackNavigator} from 'react-navigation';
import Menu from '../Pages/Menu'

const Routes = createAppContainer(
    createStackNavigator({
        Menu,
    })
);

export default Routes;