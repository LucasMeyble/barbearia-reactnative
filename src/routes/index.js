import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoute from './AppRoutes';

function Routes() {
    return(
        <NavigationContainer>
            <AppRoute />
        </NavigationContainer>
    )
}

export default Routes;