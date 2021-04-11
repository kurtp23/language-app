import React from "react";
import { Card, Container, Icon, Image, Grid, Segment, GridColumn } from "semantic-ui-react";

const CardExampleCard = () => (
  <>
    <Grid centered={true} columns="5">
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src="https://i.postimg.cc/jSB7HGh6/biopic.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Destiny Fleming </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src="https://i.postimg.cc/jSB7HGh6/biopic.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Erik Portillo </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src="https://i.postimg.cc/jSB7HGh6/biopic.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Charles Latrobe-Bateman </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src="https://i.postimg.cc/jSB7HGh6/biopic.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Steve Eliuth </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card centered={true}>
              <Image src="https://i.postimg.cc/jSB7HGh6/biopic.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Kurt Phillips </Card.Header>
                <Card.Meta>
                  <span className="date">Not good at semantic-ui</span>
                </Card.Meta>
                <Card.Description>
                  FullStack Web-Developer that enjoys creating unique UX/UI interactions
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default CardExampleCard;

// import React from "react";
// import { Card } from "semantic-ui-react";

// const kurtSrc = "./images/biopic.jpg";
// const items = [
//   {
//     header: "Destiny Fleming ",
//     description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
//     meta: "ROI: 30%",
//   },
//   {
//     header: "Erik Portillo",
//     description: "Bring to the table win-win survival strategies to ensure proactive domination.",
//     meta: "ROI: 34%",
//   },
//   {
//     header: "Charles Latrobe-Bateman ",
//     description: "Bring to the table win-win survival strategies to ensure proactive domination.",
//     meta: "ROI: 34%",
//   },
// ];
// const items2 = [
//   {
//     header: "Steve Eliuth",
//     description: "Bring to the table win-win survival strategies to ensure proactive domination.",
//     meta: "ROI: 34%",
//   },
//   {
//     image: kurtSrc,
//     header: "Kurt Phillips",
//     description: "Bring to the table win-win survival strategies to ensure proactive domination.",
//     meta: "is not good at semantic",
//   },
// ];

// const CardExampleGroupCentered = () => {
//   return (
//     <>
//       <Card.Group centered items={items} />
//       <Card.Group centered items={items2} />
//     </>
//   );
// };
// export default CardExampleGroupCentered;
