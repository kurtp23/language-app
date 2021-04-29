import React, { useEffect, useState } from "react";
import getUser from "../../utils/getUser";
import API from "../../utils/userAPI.js";
import { Image } from "semantic-ui-react";

const Chart = (props) => {
  const [flashCard, setFlashCard] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [memoryGame, setMemoryGame] = useState(0);

  useEffect(() => {
    if (props.userState.userId) {
      API.getUser(props.userState.userId).then((data) => {
        console.log("this is stats use effect", data.data);
        let challenge = 0;
        let flash = 0;
        let memory = 0;
        data.data[0].stats.forEach((stat) => {
          if (stat.challengeVal) {
            challenge++;
          }
          if (stat.flashcardVal) {
            flash++;
          }
          if (stat.memoryVal) {
            memory++;
          }
        });
        setChallenge(challenge);
        setFlashCard(flash);
        setMemoryGame(memory);
      });
    }
  });
  console.log("chall/flash are", challenge, flashCard, memoryGame);
  const value = flashCard;
  const value2 = challenge;
  const chartPercents = `&chd=t%3A${value}%2C100%7C${value2}%2C100`;
  const chartColor = "chco=FF8033%7CFFB479%2C01BDFE%7CB5EBFE";
  const statsChart = `https://image-charts.com/chart?${chartColor}${chartPercents}&chl=Flashcards%7C%7CChallenges&chli=Stats&chs=700x300&cht=pd`;

  return (
    <>
      <div className="ui raised very padded text container segment">
        <h4 className="ui orange header" textAlign="center">
          {" "}
        </h4>
        <Image src={statsChart} fluid />
      </div>
    </>
  );
};

export default Chart;
