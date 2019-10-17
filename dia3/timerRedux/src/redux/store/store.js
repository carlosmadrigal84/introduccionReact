import { createStore } from 'redux';
import reducers from '../reducers/reducers';

const initialState = {
    time: 60,
};

const store = createStore(reducers, initialState);

export default store;