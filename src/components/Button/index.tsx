import React, { useCallback } from "react";
import ButtonView from "./button.view";

type Props = {
  onClick: () => void;
  label: string;
};

export const Button: React.FC<Props> = (props) => {
  const { onClick, label } = props;
  const onClickButton: React.MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      onClick();
    }, [onClick]);

  return <ButtonView onClick={onClickButton} label={label} />;
};
