import styled from 'styled-components';

export const Button = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border-radius: 3px;
  display: inline-block;
  color: ${(props) => props.theme.fontColor};
  border: 2px solid ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.colorBtn};
`;

export default {};
