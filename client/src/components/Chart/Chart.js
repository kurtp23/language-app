import React, { useEffect, useState } from 'react';
//import API from '../../utils/API';
import getUser from "../../utils/getUser";
import API from "../../utils/userAPI.js";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";

const auth = firebase.auth();

const Chart = () => {

  const [flashCard, setFlashCard] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [date, setDate] = useState('');
  const [userID, setUserID] = useState('');

  const [user] = useAuthState(auth);

  useEffect(() => {
    
    API.postUser(user).then(() => {
      API.getUser(user.uid).then((data) => {
        console.log(data);
        setChallenge (data.data[0].stats[0].challengeVal);
        setFlashCard (data.data[0].stats[0].flashcardVal);
      });
    }); 
  }, [user]);

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