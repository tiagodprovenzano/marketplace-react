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
      display: flex;
      width: 35vw;
      flex-direction: column;
      position: absolute;
      z-index: 2;
      bottom: 0;
      top: 0;
      box-shadow: 6px 0px 20px 3px black;
    }

    .--slidein{
      animation-duration: 200ms;
      animation-name: slidein;
    }
    .--slideout{
      animation-duration: 200ms;
      animation-name: slideout;
    }
    .--fadeout{
      animation-duration: 200ms;
      animation-name: fadeout;
    }
    .--fadein{
      animation-duration: 200ms;
      animation-name: fadein;
    }

    @keyframes slidein {
      from{
        transform: translateX(100%);
      }

      to {
        transform: translateX(0%);
      }
    }
    @keyframes slideout {
      from{
        transform: translateX(0%);
      }
      
      to {
        transform: translateX(100%);
      }
    }
    @keyframes fadeout {
      from{
        opacity: 0.5;
      }
      
      to {
        opacity: 0;
      }
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.5;
      }
    }

    .modal-content-outer {
      opacity: 0.5;
      background-color: black;
      flex-grow: 1;
      z-index: 1;
    }

    

    .--hidden {
      display: none;
    }
  `}
`;
