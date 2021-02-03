import React from "react";
import WithUserHeader from "@/components/templates/WithUserHeader";
import { useRequireSignIn } from "@/auth";

const Home: React.FC = () => {
  const { loadingUser, user } = useRequireSignIn();

  if (loadingUser) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }

  return <WithUserHeader user={user}></WithUserHeader>;
};

export default Home;
