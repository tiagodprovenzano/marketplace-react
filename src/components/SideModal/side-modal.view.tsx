import { SideModalWrapper } from './side-modal.styled';

type Props = {
  show: boolean
  onClickCloseModal: ()=> void

}

export const SideModalView:React.FC<Props> = (props) => (
  <SideModalWrapper hidden={!props.show}>
      <div className={'modal-content-wrapper'}>Modal top</div>
      <div onClick={props.onClickCloseModal} className={'modal-content-outer'} />
  </SideModalWrapper>
);
