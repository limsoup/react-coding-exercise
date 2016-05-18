import React from 'react';
import {Link} from 'react-router'

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
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
    );
  }
}

              // <div className="col-lg-4">
              //   <SearchBar />
              //   <ResultsList />
              // </div>
              // <UserDetail />