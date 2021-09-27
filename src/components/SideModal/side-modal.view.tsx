import { SideModalWrapper } from './side-modal.styled';

type Props = {
  show: boolean;
  onClickCloseModal: () => void;
  leave: boolean;
};

export const SideModalView: React.FC<Props> = props => (
  <SideModalWrapper hidden={!props.show}>
    <div
      className={`modal-content-wrapper ${
        props.leave ? '--slideout' : '--slidein'
      }`}
    >
      {props.children}
    </div>
    <div
      onClick={props.onClickCloseModal}
      className={`modal-content-outer ${
        props.leave ? '--fadeout' : '--fadein'
      }`}
    />
  </SideModalWrapper>
);
