import type { FC } from "react";
import styled from "styled-components";
import LoadingIcon from "@/components/atoms/LoadingIcon";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 25px;
`;

const Loading: FC = () => (
  <LoadingWrapper>
    <LoadingIcon />
  </LoadingWrapper>
);

export default Loading;
