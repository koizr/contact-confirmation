import React from "react";
import Head from "@/components/templates/Head";
import UserHeader from "@/components/organisms/UserHeader";
import PageContainer, {
  PageContainerProps,
} from "@/components/templates/PageContainer";

const WithUserHeader: React.FC<PageContainerProps> = ({
  children,
  ...pageContainerProps
}) => (
  <PageContainer {...pageContainerProps}>
    <Head title="Home" />
    <main>
      <UserHeader />
      {children}
    </main>
  </PageContainer>
);

export default WithUserHeader;
