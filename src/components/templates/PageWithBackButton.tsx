import React from "react";
import Header from "@/components/molecules/HeaderWithBackButton";
import Head from "@/components/templates/Head";
import PageContainer from "@/components/templates/PageContainer";

const PageWithBackButton: React.FC<{
  title: string;
  onClickBackButton: () => void;
}> = ({ title, onClickBackButton, children }) => (
  <PageContainer>
    <Head title={title} />
    <main>
      <Header title={title} onClickBackButton={onClickBackButton} />
      {children}
    </main>
  </PageContainer>
);

export default PageWithBackButton;
