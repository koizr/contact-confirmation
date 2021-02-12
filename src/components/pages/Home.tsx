import WithUserHeader from "@/components/templates/WithUserHeader";
import React from "react";
import { useRequireSignIn } from "@/auth";
const Home: React.FC = () => {
  const { loadingUser, user } = useRequireSignIn();

  return <WithUserHeader loading={loadingUser}></WithUserHeader>;
};

export default Home;
