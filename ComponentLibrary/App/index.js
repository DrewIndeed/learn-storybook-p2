// export {default} from '../storybook';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from './components/Button';
import {Form, Switch, TextInput} from './components/Form';

export default () => (
  <SafeAreaView style={{flex: 1}}>
    <Form header="Hello." subheader="Please create a new account">
      <TextInput label="Email" keyboardType="email-address" />
      <TextInput label="Password" secureTextEntry />
      <TextInput label="Confirm Password" secureTextEntry />

      <Switch label="Agree to terms" />
      <Button>Sign Up</Button>
      <Button outline>Sign In</Button>
    </Form>
  </SafeAreaView>
);
