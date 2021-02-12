import type { FC } from "react";
import styled from "styled-components";
import Loading from "@/components/molecules/Loading";

const PageWrapper = styled.div`
  width: ${(props) => props.theme.contentWidth}px;
  height: 100vh;
  margin: 0 auto;
`;

export type PageContainerProps = {
  loading?: boolean;
};

const PageContainer: FC<PageContainerProps> = ({
  loading = false,
  children,
}) => <PageWrapper>{loading ? <Loading /> : children}</PageWrapper>;

export default PageContainer;
