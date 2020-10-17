// stack navigator manga screen
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import manga from "./manga";

const stack = createStackNavigator();

// if you want hide header nav use this (headerMode="none") passing on stack.navigator
const index = (props) => {
    return(
        <stack.Navigator >
            <stack.Screen name="manga" component={manga} 
                options={{
                    headerTitleStyle: { alignSelf: 'center' },
                    title: 'Manga list'
                }}
            />
            {/* <stack.Screen name="detail_anime" component={} /> */}
        </stack.Navigator>
    );
}

export default index;