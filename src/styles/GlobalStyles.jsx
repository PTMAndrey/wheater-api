import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: auto;
  height: 100%;

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  display: flex;
  ${(props) =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `};
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;