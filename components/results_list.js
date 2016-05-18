import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'
import _ from 'lodash'


class ResultsList extends React.Component {

  render () {
    return (
      <div className="main-component">
        {this.renderUsers()}
      </div>
    );
  }

  selectedUserClass(user){
    if(this.props.selectedUser)
      return (this.props.selectedUser.id == user.id) ? 'selected' : '';
    else
      return '';
  }
  onUserSelect(login){
    this.props.getUserDetail(login);
  }
  renderUsers(){
    if(this.props.users && this.props.users.length > 0){
      let onUserSelectThrottled = _.throttle(this.onUserSelect,2000,{trailing: false}).bind(this);
      return this.props.users.map(user =>{
        return <div className={"media "+this.selectedUserClass(user)}
          key={user.id}>
          <a className="media-left" href="#">
            <img className="media-object thumbnail-avatar" src={user.avatar_url} />
          </a>
          <div className="media-body">
            <h4 className="media-heading">{user.login}</h4>
            <span className="detail-icon" 
          onClick={e => {onUserSelectThrottled(user.login);}}>&raquo;</span><br/>
          </div>
        </div>
      });
    } else {
      return (
        <h5>Your search returned no results.</h5>
      );
    }
  }
}

const BASE_URL_DETAIL = "http://api.github.com/users";

function getUserDetail(login){
  const user = axios.get(`${BASE_URL_DETAIL}/${login}`);
  const followers = axios.get(`${BASE_URL_DETAIL}/${login}/followers`);
  const repos = axios.get(`${BASE_URL_DETAIL}/${login}/repos`);
  //console.log(request);
  return {
    type: 'GET_USER_DETAIL',
    payload: Promise.all([user, followers, repos])
  };
}

function mapStateToProps({users, selectedUser}) {
  return {users, selectedUser};
}

function mapActionsToProps(dispatch){
  return bindActionCreators({getUserDetail}, dispatch);
}

export default connect(mapStateToProps,mapActionsToProps)(ResultsList);