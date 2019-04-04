import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routers from './routers';
import { Provider } from 'react-redux';
import { StoreState } from './store';
import { TotalAction } from './actions';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/home';

/** 部分时间控件的中文化 */
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import * as serviceWorker from './serviceWorker';

import './styles/common.css';


let store = createStore<StoreState, TotalAction, any, any>(rootReducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() =>
  	console.log("store: ", store.getState())
)

ReactDOM.render(
    (<LocaleProvider locale={zhCN}>
        <Provider store={store}>
            <Routers />
        </Provider>
    </LocaleProvider>), document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
