import React, { useState } from "react";
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
import putUser from "../../utils/putUser";
const languageOptions = [
  { key: "es", value: "es", text: "Spanish" },
  { key: "se", value: "se", text: "Something Else" },
];

function Settings(props) {
  const [changeName, setChangeName] = useState();
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
                putUser(props.userState.userId, changeName)
                  .then(() => {
                    props.setUserState({ ...props.userState, displayName: changeName });
                    console.log("after put user user state is", props.userState);
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
            <Select placeholder="Select Language" options={languageOptions} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Settings;
