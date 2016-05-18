import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Router} from 'react-router'
import {bindActionCreators} from 'redux'
//import FontAwesome from 'react-fontawesome';
//import {FaIcon, FaStack } from 'react-fa-icon';
import {getUserDetail} from '../actions/user_detail'


class UserDetail extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentDidMount(){
    console.log(this.props.params);
    if(this.props.params.userid){
      this.props.getUserDetail(this.props.params.userid);
    }
  }
  render () {

    if(this.props.selectedUser){
      const u = this.props.selectedUser;
      return (
        <div className="col-lg-10 col-lg-offset-2 main-component">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top detail-avatar" src={u.avatar_url} />
                  <div className="card-block">
                    { (name) => { if(name){ return <h3 className="card-title">{name}</h3>; }}(u.name) }
                    { (login) => { if(login){ return <h4 className="card-title">{login}</h4>; }}(u.login) }

                    { u.name && u.login ? <hr/> : null }
                    { (email) => { if(email){ return <div className="card-line"><i className='icono-mail' /><a href={'mailto:'+email}>{email}</a></div>; }}(u.email) }
                    { (blog) => { if(blog){ return <div className="card-line"><i className='icono-rss' />{blog}</div>; }}(u.blog) }
                     { u.email && u.blog ? <hr/> : null }
                    { (company) => { if(company){ return <div className="card-line"><i className='icono-market' />{company}</div>; }}(u.company) }
                    { (location) => { if(location){ return <div className="card-line"><i className='icono-pin' />{location}</div>; }}(u.location) }                    
                    <div className="card-date-line"><span>Joined: { (new Date(u.created_at)).toLocaleDateString('en-us',{'year':'numeric', 'month':'long', 'day':'numeric'})}</span></div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                {u.bio ? (<div className="row">
                  <h2>About Me</h2>
                  <div>{u.bio}</div>
                  <hr/>
                </div>) : null}
                <div className="row">
                  <div className="col-lg-6">
                    <h2>Followers</h2>
                    <div>{this.renderFollowers()}</div>
                  </div>
                  <div className="col-lg-6">
                    <h2>Repositories</h2>
                    <div>{this.renderRepositories()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-component">
          <h3>No user selected</h3>
        </div>
      );
    }
  }
  renderRepositories(){
    console.log('rendering repos');
    function hashCode(str) { // java String#hashCode
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
           hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    } 

    function intToRGB(i){
        var c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

        return "00000".substring(0, 6 - c.length) + c;
    }
    return this.props.selectedUser.repositories.map(u => {
      return <div className="row repo" key={u.id}>
        <a href={u.html_url} ><h3>{u.name}</h3></a>
        {u.language ? (<span>{u.language.split(',').map(x => {
                  return (
                    <span key={x} className="label labelDefault" style={{"backgroundColor":'#'+intToRGB(hashCode(x))}}>{x}</span>
                  );
                })}</span>) : null}
        <br/>
        <span>Created: {(new Date(u.created_at)).toLocaleDateString('en-us',{'year':'numeric', 'month':'long', 'day':'numeric'})}</span>
        <br/>
        <span>Updated: {(new Date(u.updated_at)).toLocaleDateString('en-us',{'year':'numeric', 'month':'long', 'day':'numeric'})}</span><br/>
        {u.watchers_count > 0 ? <span className="label label-primary">{u.watchers} Watchers</span> : null}
        <br/>
        <p>{u.description}</p>

      </div>
    });
    //{u.has_downloads ? <span className="label label-success">{u.downloads} Downloads</span> : null}
  }

  renderFollowers(){
    return this.props.selectedUser.followers.map(user =>{
        return <div className="media"
          key={'follower_'+user.id}>
          <a className="media-left" href="#">
            <img className="media-object thumbnail-avatar" src={user.avatar_url} />
          </a>
          <div className="media-body">
            <h4 className="media-heading">{user.login}</h4>
          </div>
        </div>
      });
  }
}

function mapStateToProps({selectedUser}) {
  return {selectedUser};
}


function mapActionsToProps(dispatch){
  return bindActionCreators({getUserDetail}, dispatch);
}

export default connect(mapStateToProps,mapActionsToProps)(UserDetail);


