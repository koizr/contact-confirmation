import React from "react";
import Header from "@/components/organisms/HeaderWithBackButton";
import Head from "@/components/templates/Head";
import PageContainer from "@/components/templates/PageContainer";

const PageWithBackButton: React.FC<{
  title: string;
}> = ({ title, children }) => (
  <PageContainer>
    <Head title={title} />
    <main>
      <Header title={title} />
      {children}
    </main>
  </PageContainer>
);

export default PageWithBackButton;
