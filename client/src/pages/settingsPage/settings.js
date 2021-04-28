import React, { useState } from 'react';
import {
  Grid,
  Header,
  Input,
  Checkbox,
  Select,
  Button,
  Segment,
} from 'semantic-ui-react';
import './settings.css';

import API from '../../utils/userAPI.js';
const languageOptions = [
  { key: 'es', value: 'es', text: 'Spanish' },
  { key: 'fr', value: 'fr', text: 'French' },
  { key: 'se', value: 'se', text: 'Something Else' },
];

function Settings(props) {
  const [changeName, setChangeName] = useState();
  const [changeLanguage, setLanguage] = useState('');
  const handleOnChange = (e, data) => {
    console.log(data.value);
    setLanguage(data.value);
    API.putLanguage(props.userState.userId, data.value)
      .then(() => {
        props.setUserState({ ...props.userState, language: data.value });
      })
      .catch((err) => {
        console.log('errinput lang:', err);
      });
  };
  function handleInputChange(event) {
    setChangeName(event.target.value);
  }
  return (
    <>
      <div className='ui raised very padded text container segment'>
        <Header color='orange' as="h1" >Settings</Header>
        <Grid >
          <Grid.Row>
            <Grid.Column centered={true} >
              <Header inverted={true}>Change Display Name</Header>
              <Segment>
                <Input onChange={handleInputChange} placeholder='Change Name' fluid>
                  <input />
                  <Button
                    onClick={() => {
                      API.putUser(props.userState.userId, changeName)
                        .then(() => {
                          props.setUserState({ ...props.userState, displayName: changeName });
                        })
                        .catch((err) => {
                          console.log('errinput user:', err);
                        });
                    }}
                    icon="check"
                  />
                </Input>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header inverted={true}>Toggle Theme</Header>
              <Checkbox toggle>
              </Checkbox>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header inverted={true}>Select Language</Header>
              <Select
                selection
                onChange={handleOnChange}
                placeholder='Select Language'
                options={languageOptions}
                fluid
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Settings;
