import { createAppContainer, createStackNavigator } from 'react-navigation';
import Menu from '../Pages/Menu';
import MenuR from '../Pages/MenuR';
import SubMenu from '../Pages/SubMenu';
import Pontos from '../Pages/Pontos';
import Pesquisa from '../Pages/Pesquisa';
import Ponto from '../components/ponto';
import GraficoA from '../Pages/Gráficos/GráficoA';
import GraficoP from '../Pages/Gráficos/GráficoP';

const Routes = createAppContainer(
    createStackNavigator({
        Menu,
        MenuR,
        SubMenu,
        Pontos,
        Pesquisa,
        Ponto,
        GraficoA,
        GraficoP,
    })
);

export default Routes;