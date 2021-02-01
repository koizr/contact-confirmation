import React from "react";
import styled from "styled-components";
import BackButton from "@/components/atoms/BackButton";
import Header from "@/components/atoms/Header";

const FlexHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexItemSide = styled.div`
  width: ${(props) => props.theme.contentWidth / 6}px;
`;

const FlexItemMain = styled.div``;

const HeaderWithBackButton: React.FC<{
  title: string;
  onClickBackButton: () => void;
}> = ({ title, onClickBackButton }) => (
  <FlexHeader>
    <FlexItemSide>
      <BackButton onClick={onClickBackButton} />
    </FlexItemSide>
    <FlexItemMain>{title}</FlexItemMain>
    <FlexItemSide>{/* 位置調整のために空要素を置いておく */}</FlexItemSide>
  </FlexHeader>
);

export default HeaderWithBackButton;
