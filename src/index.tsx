import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'react-photo-view/dist/index.css';
import { Provider } from "mobx-react";
import Store from './store/index'
ReactDOM.render(<Provider Store={Store}><App /></Provider>, document.getElementById('root'));


