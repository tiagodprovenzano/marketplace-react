import styled, { css } from 'styled-components';

export const SideModalWrapper = styled.div`
  ${(props) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: ${props.hidden? 'none':'flex'};
    flex-direction: row-reverse;
    .modal-content-wrapper {
      opacity: 1;
      width: 35vw;
      display: flex;
      flex-direction: column;
    }

    .modal-content-outer {
      opacity: 0.5;
      background-color: black;
      flex-grow: 1;
    }

    .--hidden {
      display: none;
    }
  `}
`;
