import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { preLoad } from '../pages/PreLoad';

const Stack = createStackNavigator();

function AppRoutes(){

    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="preLoad" component={preLoad} />
        </Stack.Navigator>
    )

}

export default AppRoutes;