import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, View} from 'react-native';
import {FieldWrapper, Form, TextInput, Switch} from '../components/Form';
import {BufferView} from './decorators';

storiesOf('Form/Switch', module)
  .addDecorator(BufferView)
  .add('default', () => <Switch label="Agree to Terms" />)
  .add('with error', () => (
    <Switch
      label="Agree to Terms"
      message="You must agree to the terms"
      messageType="error"
    />
  ));

const defaultTextInputProps = {
  label: 'Demo',
  onChangeText: action('onChangeText'),
};
storiesOf('Form/TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput {...defaultTextInputProps} placeholder="Some placeholder" />
  ))
  .add('with value', () => (
    <TextInput {...defaultTextInputProps} value="Some value" />
  ))
  .add('with error message', () => (
    <TextInput
      {...defaultTextInputProps}
      message="This is an error"
      messageType="error"
    />
  ))
  .add('email', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Email"
      value="andrew@gmail.com"
      keyboardType="email-address"
    />
  ))
  .add('password', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Password"
      value="password"
      secureTextEntry
    />
  ));

storiesOf('Form/FieldWrapper', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <FieldWrapper label="Email">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('error message', () => (
    <FieldWrapper
      label="Email"
      message="Please enter a valid email!"
      messageType="error">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('success message', () => (
    <FieldWrapper label="Email" message="Looks legit!" messageType="success">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('mulitple fields', () => (
    <>
      <FieldWrapper label="Email">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>

      <FieldWrapper
        label="Email"
        message="Please enter a valid email!"
        messageType="error">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>

      <FieldWrapper label="Email" message="Looks legit!" messageType="success">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
    </>
  ));

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}></View>
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello.">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}></View>
    </Form>
  ))
  .add('with header and sub header', () => (
    <Form
      header="Hello."
      subheader="Welcome back! Kindly enter your log in details.">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}></View>
    </Form>
  ));
