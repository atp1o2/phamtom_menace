import React, { Component } from 'react';

class HomeView extends Component {
  render () {
    return (
      <div className="home mt-3">
        <div className="container py-5">
          <h1 className="text-primary">Next Generation</h1>
          <h1 className="text-primary">Surgical Planning</h1>
          <p className="py-3 h4">
            Clarity is developing a cloud-based software application that combines advanced medical imaging technologies with data analytics to provide surgeons with a far better way of planning for their operations.
          </p>
        </div>
      </div>
    )
  }
}

export default HomeView;
