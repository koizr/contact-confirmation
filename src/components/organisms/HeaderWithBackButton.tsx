import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackButton from "@/components/atoms/BackButton";
import Header from "@/components/atoms/Header";

const FlexHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FlexItemSide = styled.div`
  width: 3rem;
`;

const FlexItemMain = styled.div`
  text-align: center;
`;

const HeaderWithBackButton: React.FC<{
  title: string;
}> = ({ title }) => {
  const router = useRouter();
  return (
    <FlexHeader>
      <FlexItemSide>
        <BackButton onClick={() => router.back()} />
      </FlexItemSide>
      <FlexItemMain>{title}</FlexItemMain>
      <FlexItemSide>{/* 位置調整のために空要素を置いておく */}</FlexItemSide>
    </FlexHeader>
  );
};

export default HeaderWithBackButton;
