import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import Stack from './components/Stack';
import rootReducer from './reducers';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {setStack} from './actions';
import {Provider} from 'react-redux';
import StackForm from './components/StackForm';
import './index.css'



const store = createStore(rootReducer);
store.dispatch(setStack({id:0,title:'please visit home to choose stacks',cards:[]}));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {App}></Route>
                <Route exact path = '/stack' component = {Stack}></Route>
                <Route exact path = '/stack_form' component = {StackForm}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);



