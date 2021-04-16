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
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          Change Display Name
          <Input></Input>
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          Toggle theme
          <Checkbox toggle></Checkbox>
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          Select Language
          <Select placeholder="Select your country" options={languageOptions} />
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Settings;
