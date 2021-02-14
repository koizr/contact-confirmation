import React from "react";
import UserHeader from "@/components/organisms/UserHeader";
import PageContainer, {
  PageContainerProps,
} from "@/components/templates/PageContainer";
import MainContents from "@/components/templates/MainContents";

const WithUserHeader: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => (
  <PageContainer {...props}>
    <UserHeader />
    <MainContents>{children}</MainContents>
  </PageContainer>
);

export default WithUserHeader;
