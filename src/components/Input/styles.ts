import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: white;
  border-radius: 10px;
  padding: 0.75vw;
  width: 100%;
  display: flex;
  align-items: center;

  border: 1px solid lightgray;
  color: #666360;
  transition: all 0.3s;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: black;
      transform: translateY(-4px);
      -webkit-box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.75);
      box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.75);
    `}
  ${props =>
    props.isFilled &&
    css`
      color: black;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: black;
    font-size: 1vw;
    &::placeholder {
      color: #666360;
    }
    &:focus {
      outline: none;
    }
  }
  svg {
    margin-right: 16px;
  }
  @media (max-width: 800px) {
    padding: 0.8rem;
    input {
      font-size: 1rem;
    }
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
