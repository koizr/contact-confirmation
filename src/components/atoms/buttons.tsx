import styled from "styled-components";

const Button = styled.button`
  height: 2em;
  padding: 0 0.8em;
  border-radius: 0.3em;
`;

export const PrimaryButton = styled(Button)`
  color: ${(props) => props.theme.color.textOnMain};
  background-color: ${(props) => props.theme.color.main};
`;

export const NegativeButton = styled(Button)`
  color: ${(props) => props.theme.color.moderate};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.color.moderate};
`;
