import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList209812Navigator from '../features/ArticleList209812/navigator';
import ArticleList209811Navigator from '../features/ArticleList209811/navigator';
import ArticleList209810Navigator from '../features/ArticleList209810/navigator';
import Settings209795Navigator from '../features/Settings209795/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList209812: { screen: ArticleList209812Navigator },
ArticleList209811: { screen: ArticleList209811Navigator },
ArticleList209810: { screen: ArticleList209810Navigator },
Settings209795: { screen: Settings209795Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
