import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, View} from 'react-native';
import {FieldWrapper, Form} from '../components/Form';
import {BufferView} from './decorators';

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
