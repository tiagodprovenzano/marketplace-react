import React from 'react';
import { TextInput } from '../TextInput';

type Props = {
  type: React.HTMLInputTypeAttribute;
  text: string;
  onChangeText: (text: string) => void
  placeholder?: string;
}

export const FormField: React.FC<Props> = (props) => {
  return <TextInput placeholder={props.placeholder} type={props.type} text={props.text} onChangeText={props.onChangeText} />;
};
