import type { FC } from "react";
import styled from "styled-components";
import Loading from "@/components/molecules/Loading";
import Head from "@/components/templates/Head";

const PageWrapper = styled.div`
  width: ${(props) => props.theme.contentWidth}px;
  height: 100vh;
  margin: 0 auto;
`;

export type PageContainerProps = {
  title: string;
  loading?: boolean;
};

const PageContainer: FC<PageContainerProps> = ({
  title,
  loading = false,
  children,
}) => (
  <PageWrapper>
    <Head title={title} />
    {loading ? <Loading /> : children}
  </PageWrapper>
);

export default PageContainer;
