import React from 'react';

export default class RootView extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <div>
        <h3>Welcome To The Exercise</h3>
        {this.props.children}
      </div>
    );
  }
}
