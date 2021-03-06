import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// import SearchBar from '../../components/search_bar';
// import ResultsList from '../../components/results_list';
// import UserDetail from '../../components/user_detail';
import reducers from '../../reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class RootView extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      
        <Provider store={createStoreWithMiddleware(reducers)}>
          <div>
            <nav>
              <Link to="/" activeClassName="active">Filter/Home</Link>
              <Link to="/fishes" activeClassName="active">Fishes</Link>
            </nav>
            <div className="container-fluid">
              <div className="row">
                {this.props.children}
              </div>
            </div>
          </div>
        </Provider>
    );
  }
}

              // <div className="col-lg-4">
              //   <SearchBar />
              //   <ResultsList />
              // </div>
              // <UserDetail />