import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import AppRouter from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
    <Provider store={store}>
    <AppRouter />
    </Provider>,

 document.getElementById('root'));
registerServiceWorker();
