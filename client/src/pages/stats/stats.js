import React from "react";
import Chart from "../../components/Chart/Chart"

function Stats({username}) {
  return (
    <>
       <div class="ui raised very padded text container segment">
        <h2 class="ui header">{username}'s Daily Stats</h2>
        <p>The charts below show your daily game stats!</p>
       </div> 
      <Chart/>
      
    </>
  );
}

export default Stats;