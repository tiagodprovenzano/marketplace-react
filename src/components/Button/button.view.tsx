import React from 'react';
import { ButtonWrapper } from './button.styled';

type Props = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  label: string;
};

const ButtonView: React.FC<Props> = props => (
  <ButtonWrapper>
    <div onClick={props.onClick}>
      <div>{props.label}</div>
    </div>
  </ButtonWrapper>
);

export default ButtonView;
