import React from "react";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "Destiny Fleming ",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: "ROI: 30%",
  },
  {
    header: "Erik Portillo",
    description: "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    header: "Charles Latrobe-Bateman ",
    description: "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    header: "Steve Eliuth",
    description: "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    header: "Kurt Phillips",
    description: "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
];

const CardExampleGroupCentered = () => <Card.Group centered items={items} />;

export default CardExampleGroupCentered;
