    
import React from 'react';

export default (props) => {
  const { location } = props;
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">You done messed up</h1>
        <img src={require('./messedUp.jpg')} alt={"You done messed up A-aron"} />
        <h1 className="display-4">A-Aron!</h1>
        <p className="lead">Page {location.pathname} not found</p>
      </div>
    </div>
  );
}