import React from "react";
import {
  Card,
  Container,
  Icon,
  Image,
  Grid,
  Segment,
  Header,
  Input,
  Checkbox,
  Form,
  Select,
  Button,
} from "semantic-ui-react";
import "./settings.css";
const languageOptions = [
  { key: "es", value: "es", text: "Spanish" },
  { key: "se", value: "se", text: "Something Else" },
];

const Settings = () => (
  <>
    <Header color="teal ">Settings</Header>
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={10}>
          <Header inverted={true}>Change Display Name</Header>
          <Input></Input>
          <Button>Save Name</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={10}>
          <Header inverted={true}>Toggle Theme</Header>
          <Checkbox toggle></Checkbox>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header inverted={true}>Select Language</Header>
          <Select placeholder="Select Language" options={languageOptions} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Settings;
