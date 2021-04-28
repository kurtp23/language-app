import React from "react";
import "./teampage.css";
import { Card, Image, Grid, Segment, Header, Button } from "semantic-ui-react";

function TeamPage() {
  return (
    <>
      <br />
      <Header size="huge" textAlign="center" inverted={true}>
        <Header.Content>Meet The Team</Header.Content>
      </Header>
      <Grid centered={true} columns="5" stackable>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Image src="../../images/Team/destiny.jpg" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Destiny Fleming </Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button href="https://github.com/Destinyfleming">Github</Button>
                  <Button href="https://www.linkedin.com/in/destiny-fleming-ab30541b3/">
                    LinkedIn
                  </Button>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Image src="../../images/Team/erik.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Erik Portillo </Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button href="https://github.com/rasputinforever">Github</Button>
                  <Button href="https://www.linkedin.com/in/erik-portillo-1216a926">
                    LinkedIn
                  </Button>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Image src="../../images/Team/charles.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Charles Latrobe-Bateman </Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button href="https://github.com/Clatrobe00">Github</Button>
                  <Button href="https://www.linkedin.com/in/charles-latrobe-bateman-6b748a1b6/">
                    LinkedIn
                  </Button>
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
                  <Button href="https://github.com/Eliuth4k9">Github</Button>
                  <Button href="https://www.linkedin.com/in/steve-hernandez-4a9206157/">
                    LinkedIn
                  </Button>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Image src="../../images/Team/kurtpic.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Kurt Phillips </Card.Header>
                  <Card.Meta>
                    <span className="date">😤Can't stop the grind😤</span>
                  </Card.Meta>
                  <Card.Description>
                    FullStack Web-Developer that enjoys creating unique UX/UI interactions
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button href="https://github.com/kurtp23">Github</Button>
                  <Button href="https://www.linkedin.com/in/kurt-phillips-a3b374130/">
                    LinkedIn
                  </Button>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default TeamPage;
