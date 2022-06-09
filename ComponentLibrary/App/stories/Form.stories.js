import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {Form} from '../components/Form';
import {BufferView} from './decorators';

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
