import React from "react";

type Props = {
  type: React.HTMLInputTypeAttribute;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const TextInputView: React.FC<Props> = (props) => (
  <input type={props.type} onChange={props.onChange} value={props.text} />
);

export default TextInputView;
