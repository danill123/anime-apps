// stack navigator anime screen
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import anime from "./anime";

const stack = createStackNavigator();

// if you want hide header nav use this (headerMode="none") passing on stack.navigator
const index = (props) => {
    return(
        <stack.Navigator >
            <stack.Screen name="anime" component={anime} 
                options={{
                    headerTitleStyle: { alignSelf: 'center' },
                    title: 'Anime list'
                }}
            />
            {/* <stack.Screen name="detail_anime" component={} /> */}
        </stack.Navigator>
    );
}

export default index;