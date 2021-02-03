import React from "react";
import Head from "@/components/templates/Head";
import UserHeader from "@/components/organisms/UserHeader";
import PageContainer from "@/components/templates/PageContainer";
import { useRequireSignIn } from "@/auth";

const WithUserHeader: React.FC = ({ children }) => {
  const { loadingUser, user } = useRequireSignIn();
  const dummyUser = {
    firstName: "",
    lastName: "",
  };

  let contents = children;
  if (loadingUser) {
    contents = <div>Loading...</div>;
  }
  if (!user) {
    contents = <div>User not found</div>;
  }

  return (
    <PageContainer>
      <Head title="Home" />
      <main>
        <UserHeader user={!loadingUser && user ? user : dummyUser} />
        {contents}
      </main>
    </PageContainer>
  );
};

export default WithUserHeader;
