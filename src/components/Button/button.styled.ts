import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  ${() => css`
    border-width: 1px;
    border-style: solid;
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-grow: 0;
    border-radius: 10px;
    color: #000;
    
    :hover {
      cursor: pointer;
      box-shadow: 0px 3px 6px 0px #464545;
    }
  `}
`;
