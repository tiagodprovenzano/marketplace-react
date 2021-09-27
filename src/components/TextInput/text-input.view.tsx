import React from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const TextInputView: React.FC<Props> = props => (
  <input
    placeholder={props.placeholder}
    type={props.type}
    onChange={props.onChange}
    value={props.text}
  />
);

export default TextInputView;
