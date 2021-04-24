import React, { useState } from "react";
import {
  Grid,
  Header,
  Input,
  Checkbox,
  Select,
  Button,
} from "semantic-ui-react";
import "./settings.css";

import API from "../../utils/userAPI.js";
const languageOptions = [
  { key: "es", value: "es", text: "Spanish" },
  { key: "fr", value: "fr", text: "French" },
  { key: "se", value: "se", text: "Something Else" },
];

function Settings(props) {
  const [changeName, setChangeName] = useState();
  const [changeLanguage, setLanguage] = useState("");
  const handleOnChange = (e, data) => {
    console.log(data.value);
    setLanguage(data.value);
    API.putLanguage(props.userState.userId, data.value)
      .then(() => {
        props.setUserState({ ...props.userState, language: data.value });
      })
      .catch((err) => {
        console.log("errinput lang:", err);
      });
  };
  function handleInputChange(event) {
    setChangeName(event.target.value);
  }
  return (
    <>
      <Header color="teal ">Settings</Header>
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column centered={true} width={10}>
            <Header inverted={true}>Change Display Name</Header>
            <Input onChange={handleInputChange}></Input>
            <Button
              onClick={() => {
                API.putUser(props.userState.userId, changeName)
                  .then(() => {
                    props.setUserState({ ...props.userState, displayName: changeName });
                  })
                  .catch((err) => {
                    console.log("errinput user:", err);
                  });
              }}
            >
              Save Name
            </Button>
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
            <Select
              selection
              onChange={handleOnChange}
              placeholder="Select Language"
              options={languageOptions}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Settings;
