import React, { useEffect, useState } from "react";
import API from "../../utils/userAPI.js";
import { Image } from "semantic-ui-react";

const Chart = (props) => {
  const [flashCard, setFlashCard] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [memoryGame, setMemoryGame] = useState(0);
  const [challengePercent, setChallengePercent] = useState(0)
  const [totalFlashCards, setTotalFlashCards] = useState(0)
  const [totalMemoryGames, setTotalMemoryGames] = useState(0)
  
  useEffect(() => {
    if (props.userState.userId) {
      API.getUser(props.userState.userId).then((data) => {
        let challenge = 0;
        let flash = 0;
        let memory = 0;

        let challengeData = []
        let flaschardCount = 0
        let memoryGameCount = 0

        data.data[0].stats.forEach((stat) => {
          if (stat.challengeVal) {
            challenge++;
            challengeData.push(stat.challengeVal)
          }
          if (stat.flashcardVal) {
            flash++;
            flaschardCount = flaschardCount + stat.flashcardVal
          }
          if (stat.memoryVal) {
            memory++;
            memoryGameCount = memoryGameCount + stat.memoryVal
          }
        });
        setChallenge(challenge);
        setFlashCard(flash);
        setMemoryGame(memory);

        if (challengeData.length > 0) {
          let sumVal = 0
          challengeData.forEach((val) => {
            sumVal = sumVal + val
          })
          setChallengePercent(sumVal/challengeData.length)
        }

        setTotalFlashCards(flaschardCount)
        setTotalMemoryGames(memoryGameCount)
      });
    }
  });
  const value = flashCard;
  const value2 = challenge;
  const value3 = memoryGame;
  const chartPercents =`&chd=t%3A${value}%2C100%7C${value2}%2C100%7C${value3}%2C40`;
  
  const chartColor = 'chco=FF8033%7CFFB479%2C52cbff%7Ca6e4ff%2Cfc4128%7Cff997d';
  const statsChart =`https://image-charts.com/chart?${chartColor}${chartPercents}&chl=Flashcard%7C%7CChallenge%7C%7CGame%7C%7C&chli=Stats&chs=700x300&cht=pd`;
  return (
    <>
      <div className="ui raised very padded text container segment">
        <h4 className="ui orange header" textAlign="center">
          {" "}
        </h4>
        <Image src={statsChart} fluid />
        <ul>
          <li>Average Challenge Score: {challengePercent.toFixed(1)}%</li>
          <li>Flashcards Viewed: {totalFlashCards}</li>
          <li>Times Played Memory Game: {totalMemoryGames}</li>
        </ul>

      </div>
    </>
  );
};

export default Chart;
