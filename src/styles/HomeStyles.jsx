import styled from "styled-components";

export const NavBarStyled = styled.div`
  background-color: ${(props) => props.theme.navBar};
  width:100%;
  height:100%;
  margin-top:-10px;
`

export const FooterBG = styled.div`
  background-color: ${(props) => props.theme.footer};
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

export const MainNav = styled.div`
  display:flex;
  align-items:center; 
  justify-content:space-around;
  color: ${(props) => props.theme.colorCard};
  border-bottom: 4px solid ${(props) => props.theme.cardBG};
  padding:10px 10px;
  margin-bottom:30px;
  border-radius:20px;
  width:100%;
  
  button{
    border-bottom:1px solid transparent;
    &:hover{
      border-bottom:1px solid orange;
    }
  }
//   @media screen and (max-width:750px) {
//     font-size: 80px !important;
// }
`


export const CardStyled = styled.div`
  background-color: ${(props) => props.theme.cardBG};
  border: 2px solid ${(props) => props.theme.colorCard};
  color:${(props) => props.theme.colorCard};
`

export const CardForecast = styled.div`
background-color: ${(props) => props.theme.cardBG};
color:${(props) => props.theme.colorCard};
  border: 2px solid ${(props) => props.theme.colorCard};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:10rem;
  padding-bottom:10px;
    img{
    border-bottom:1px solid black;
  }
  
  hr{min-width: 170px;}
`

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
  @media screen and(width<550px){
    font-size:16px;
  }
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
export const Sup = styled.sup`
  color: ${(props) => props.theme.colorCard};
  cursor:pointer;
  margin-left:10px;
`;
