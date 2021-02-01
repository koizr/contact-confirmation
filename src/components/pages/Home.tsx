import React from "react";
import Template from "@/components/templates/Home";
import { useRequireLogin } from "@/auth";

const Home: React.FC = () => {
  const { loadingUser, user } = useRequireLogin();

  if (loadingUser) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }

  return <Template user={user}></Template>;
};

export default Home;
