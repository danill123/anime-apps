import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Avatar } from '@ui-kitten/components';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from 'redux';
enableScreens();

// import custom component
import BottomTab from './navigation/Bottomtab';

// import redux component for state
import reducer from "./redux/reducer";

// define store
const store = createStore(reducer, applyMiddleware(thunk));

const Drawer = createDrawerNavigator();

const Content = () => {
  return(
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Avatar style={{margin: 5, width: 100, height: 100}} size='giant' source={require('./assets/danill.jpg')}/>
      <Text>Danill Yudhistira Setiawan</Text>
      <Text>Contact me</Text>
      <Layout>
        <Text>Instagram : danilldev</Text>
        <Text>Telephon  : 082111780767</Text>
        <Text>Email     : danillyudhistira@gmail.com</Text>
      </Layout>
      <Text>Saran dan Kritik di tunggu</Text>
    </Layout>
  );
}

const App = () => (
  // bottom tab navigation component
  <Drawer.Navigator >
    <Drawer.Screen name="Home Page" component={BottomTab} />
    <Drawer.Screen name="Developer contact" component={Content} />
  </Drawer.Navigator>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  </ApplicationProvider>
);
