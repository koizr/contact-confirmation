import React from "react";
import Header from "@/components/organisms/HeaderWithBackButton";
import Head from "@/components/templates/Head";
import PageContainer, {
  PageContainerProps,
} from "@/components/templates/PageContainer";

const PageWithBackButton: React.FC<
  PageContainerProps & {
    title: string;
  }
> = ({ title, children, ...pageContainerProps }) => (
  <PageContainer {...pageContainerProps}>
    <Head title={title} />
    <main>
      <Header title={title} />
      {children}
    </main>
  </PageContainer>
);

export default PageWithBackButton;
