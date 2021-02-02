import React from "react";
import NextLink from "next/link";
import type { LinkProps } from "next/link";
import styled from "styled-components";

// TODO: visited で色変える
const Anchor = styled.a`
  color: ${(props) => props.theme.color.main};
`;

const Link: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <NextLink {...rest}>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
};

export default Link;
