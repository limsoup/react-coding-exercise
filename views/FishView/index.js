import React from 'react';

export default class FishView extends React.Component {
  /**
   * Goes to root route
   */
  goHome () {
    this.context.router.push('/');
  }

  render () {
    return (
      <div>
        <h4>No Fishes Here</h4>
        <button
          name='navigate-home'
          onClick={::this.goHome}>
            Go Home
        </button>
      </div>
    );
  }
}
