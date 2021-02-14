import React from "react";
import { useRequireSignIn } from "@/auth";
import type { User } from "@/models";
import WithUserHeader from "@/components/templates/WithUserHeader";

// TODO: ちゃんとしたコンテンツに置き換える
const TempContents: React.FC<{ user: User }> = ({ user }) => (
  <table>
    <tbody>
      <tr>
        <th>first name</th>
        <td>{user.firstName}</td>
      </tr>
      <tr>
        <th>last name</th>
        <td>{user.lastName}</td>
      </tr>
      <tr>
        <th>phone number</th>
        <td>{user.phoneNumber}</td>
      </tr>
      <tr>
        <th>groups</th>
        <td>{user.groups}</td>
      </tr>
    </tbody>
  </table>
);

const Home: React.FC = () => {
  const { loadingUser, user } = useRequireSignIn();

  return (
    <WithUserHeader title="Home" loading={loadingUser}>
      {user ? <TempContents user={user} /> : null}
    </WithUserHeader>
  );
};

export default Home;
