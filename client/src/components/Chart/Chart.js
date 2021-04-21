import React, { useEffect, useState } from 'react';
import API from '../../utils/API';


const Chart = () => {

  const [flashCard, setFlashCard] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [date, setDate] = useState('');
  const [userID, setUserID] = useState('');

  useEffect(() => {
    API.getStats()
      .then((data) => {
        console.log(data);
        setFlashCard (data.data[0].stats[0].flashcardVal);
        setChallenge (data.data[0].stats[0].challengeVal);
        setDate (data.data[0].stats[0].date);
        setUserID(data.data[0].userID);
      });
  }, []);

  const value = flashCard;
  const value2 = challenge;
  const chartPercent = `&chd=a%3A${value}%7C100`;
  const chartPercent2 = `&chd=a%3A${value2}%7C100`;
  const chartColor = '&chco=fdb45c,27c9c2';
  const flashcardChart = `https://image-charts.com/chart?${chartPercent}&chs=700x190${chartColor}&cht=bhs`;
  const challengeChart =`https://image-charts.com/chart?${chartPercent2}&chs=700x190${chartColor}&cht=bhs`;

  return (
    <>
      <div className="ui raised very padded text container segment">
        <h4 className="ui orange header" textAlign='center'> Flash Card Stats</h4>
        <img src={flashcardChart} alt="chart" style={{width: 600 }}/>
      </div>
      <div className="ui raised very padded text container segment">
        <h4 className="ui orange header" textAlign='center'> Challenge Stats</h4>
        <img src={challengeChart} alt="chart" style={{width: 600 }}/>
      </div>
    </>
  );
};

export default Chart;