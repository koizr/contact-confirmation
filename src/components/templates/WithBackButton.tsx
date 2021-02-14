import React from "react";
import Header, {
  HeaderWithBackButtonProps as HeaderProps,
} from "@/components/organisms/HeaderWithBackButton";
import PageContainer, {
  PageContainerProps,
} from "@/components/templates/PageContainer";
import MainContents from "@/components/templates/MainContents";

const PageWithBackButton: React.FC<PageContainerProps & HeaderProps> = ({
  title,
  back,
  children,
  ...pageContainerProps
}) => (
  <PageContainer title={title} {...pageContainerProps}>
    <Header title={title} back={back}></Header>
    <MainContents>{children}</MainContents>
  </PageContainer>
);

export default PageWithBackButton;
