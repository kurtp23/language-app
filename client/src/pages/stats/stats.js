import React from 'react';
import Chart from '../../components/Chart/Chart';
import './stats.css';

function Stats(props) {
  return (
    <>
      <div className='ui raised very padded text container segment'>
        <h2 className='ui orange header' textAlign='center'>
          {' '}
          {props.userState.displayName}'s Daily Stats
        </h2>
      </div>
      <Chart userState={props.userState} />
    </>
  );
}

export default Stats;