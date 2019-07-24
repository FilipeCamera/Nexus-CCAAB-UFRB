import {createAppContainer, createStackNavigator} from 'react-navigation';
import Menu from '../Pages/Menu';
import SubMenu from '../Pages/SubMenu';

const Routes = createAppContainer(
    createStackNavigator({
        Menu,
        SubMenu,
    })
);

export default Routes;