import React from "react";
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

import App from './src/App';

const store = configureStore();

const StarWarsApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

AppRegistry.registerComponent('starwarsapp', () => StarWarsApp);
