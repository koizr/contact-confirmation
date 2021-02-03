import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { path } from "@/path";
import SettingButton from "@/components/atoms/SettingButton";
import Header from "@/components/atoms/Header";
import { User } from "@/models";

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
  text-align: left;
  padding-left: 1rem;
`;

const UserHeader: React.FC<{ user: Pick<User, "firstName" | "lastName"> }> = ({
  user: { firstName, lastName },
}) => {
  const fullName = `${firstName} ${lastName}`;
  const router = useRouter();
  return (
    <FlexHeader>
      <FlexItemMain>{fullName}</FlexItemMain>
      <FlexItemSide>
        <SettingButton onClick={() => router.push(path.settings)} />
      </FlexItemSide>
    </FlexHeader>
  );
};

export default UserHeader;
