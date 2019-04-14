import { createStore, combineReducers } from 'redux';
import ProjectListReducer from './project-list-reducer';

const store = () => createStore(combineReducers({
   ProjectList: ProjectListReducer,
}));

export default store;