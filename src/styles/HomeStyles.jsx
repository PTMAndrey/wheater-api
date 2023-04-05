import styled from "styled-components";



export const NavBarStyled = styled.div`
  background-color: ${(props) => props.theme.navBar};
  width:100%;
  height:100%;
  margin-top:-10px;
`

export const FooterBG = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.button};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.theme.secondaryBackground};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${(props) => props.theme.button};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.button};
  border:2px solid ${(props) => props.theme.buttonHover};
  color: white;
  padding: 0.5em 1em;
  border-radius:15px;
  width:auto;
  &:hover{
    border:2px solid ${(props) => props.theme.button};
    background-color: ${(props) => props.theme.buttonHover};
  }
  &:active{
  padding: 0.5em 0.8em;
  border:2px solid ${(props) => props.theme.button};
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.text};
  font-weight:bold;
`;
export const H2 = styled.h2`
  color: ${(props) => props.theme.text};
  font-weight:bold;
`;
export const H3 = styled.h3`
  color: ${(props) => props.theme.text};
  font-weight:bold;
`;
export const H4 = styled.h4`
  color: ${(props) => props.theme.text};
  font-weight:bold;
`;
export const H5 = styled.h5`
  color: ${(props) => props.theme.text};
  font-weight:bold;
`;
export const H6 = styled.h6`
  color: ${(props) => props.theme.text};
  font-weight:bold;
`;

export const P = styled.p`
  color: ${(props) => props.theme.text};
`;
export const Div = styled.div`
  color: ${(props) => props.theme.text};
`;