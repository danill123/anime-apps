import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

// import views for screen
import anime from "../screens/anime";
import manga from "../screens/manga";

const { Navigator, Screen } = createBottomTabNavigator();

// define bottom bar component
const BottomBar = ({navigation, state}) => {
    return(
        <BottomNavigation selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title="Anime" />
            <BottomNavigationTab title="Manga" />
        </BottomNavigation>
    );
}

const BottomTab = (props) => {
    return(
        <Navigator tabBar={props => <BottomBar {...props}/>}>
            <Screen name="anime_home" component={anime} />
            <Screen name="manga_home" component={manga}/>
        </Navigator>
    );
}

export default BottomTab;
