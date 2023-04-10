import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;
