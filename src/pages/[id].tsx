import type { FC } from "react";
import { useRouter } from "next/router";

const TestQuery: FC = () => {
  const router = useRouter();
  console.log(`pathname: ${router.pathname}`);
  console.log(`route: ${router.route}`);
  console.log(`asPath: ${router.asPath}`);
  console.log(`id: ${router.query.id}`);

  return <div>{router.query.id}</div>;
};

export default TestQuery;
