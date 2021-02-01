import React from "react";
import Head from "@/components/templates/Head";
import { User } from "@/models";

type Props = {
  user: User;
};

const Home: React.FC<Props> = ({ user }) => {
  return (
    <>
      <Head title="Home" />
      <main>
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
      </main>
    </>
  );
};

export default Home;
