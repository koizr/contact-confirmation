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
  width: 3rem;
`;

const FlexItemMain = styled.div`
  text-align: center;
`;

export type HeaderWithBackButtonProps = {
  title: string;
  back: () => void;
};

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({
  title,
  back,
}) => {
  return (
    <FlexHeader>
      <FlexItemSide>
        <BackButton onClick={back} />
      </FlexItemSide>
      <FlexItemMain>{title}</FlexItemMain>
      <FlexItemSide>{/* 位置調整のために空要素を置いておく */}</FlexItemSide>
    </FlexHeader>
  );
};

export default HeaderWithBackButton;
