import React from 'react';
import {Switch as RNSwitch} from 'react-native';
import FieldWrapper from './FieldWrapper';

export default function Switch({label, message, messageType, ...rest}) {
  return (
    <FieldWrapper label={label} message={message} messageType={messageType}>
      <RNSwitch {...rest} />
    </FieldWrapper>
  );
}
