import React from "react";
import Head from "@/components/templates/Head";
import UserHeader from "@/components/organisms/UserHeader";
import PageContainer from "@/components/templates/PageContainer";

const WithUserHeader: React.FC = ({ children }) => (
  <PageContainer>
    <Head title="Home" />
    <main>
      <UserHeader />
      {children}
    </main>
  </PageContainer>
);

export default WithUserHeader;
