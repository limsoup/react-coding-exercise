import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { Router, browserHistory} from 'react-router';

//import promise from 'redux-promise'
//import App from './components/app';
// import reducers from './reducers';
// import routes from './routes';
import SearchBar from '../../components/search_bar';
import ResultsList from '../../components/results_list';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class FilterView extends React.Component{
	render(){
		return (

	        <div className="container-fluid">
	          <div className="row">
	            <div className="col-lg-4 col-lg-offset-4">
	              <SearchBar />
	              <ResultsList />
	            </div>
	          </div>
	        </div>
		);
	}
}