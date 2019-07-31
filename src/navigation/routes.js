import {createAppContainer, createStackNavigator} from 'react-navigation';
import Menu from '../Pages/Menu';
import SubMenu from '../Pages/SubMenu';
import Pontos from '../Pages/Pontos';
import Pesquisa from '../Pages/Pesquisa';
import Ponto from '../components/ponto';
import Carregar from '../components/carregar';

const Routes = createAppContainer(
    createStackNavigator({
        Menu,
        SubMenu,
        Pontos,
        Pesquisa,
        Ponto,
    })
);

export default Routes;