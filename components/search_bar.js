import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'
import _ from 'lodash'

class SearchBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }
  constructor(props){
    super(props);
    this.state = {query:''};
  }
  onSearch(e){
    //console.log('search');
    this.props.searchUsers(this.state.query);
  }
  render () {
    let onSearchThrottled = _.throttle(this.onSearch,2000,{trailing: false}).bind(this);
    return (
      <form onSubmit={e => { e.preventDefault(); onSearchThrottled();}} className="main-component">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search GitHub Users" value={this.state.query } onChange={e => {this.setState({query:e.target.value})}} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Go</button>
          </span>
        </div>
      </form>
    );
  }
}

const BASE_URL = "http://api.github.com/search/users";

function searchUsers(query){
  const request = axios.get(`${BASE_URL}?q=${query}`);
  //console.log(request);
  console.log('hit');
  return {
    type: 'SEARCH_USERS',
    payload: request
  };
}



function mapActionsToProps(dispatch){
  return bindActionCreators({searchUsers}, dispatch);
}

export default connect(null,mapActionsToProps)(SearchBar);


