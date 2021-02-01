import { useUser } from "@/context/userContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { User } from "@/models";

export const useRequireLogin = (): { loadingUser: boolean; user?: User } => {
  const { loadingUser, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    console.log("require login:");
    console.log({
      loadingUser,
      user,
    });
    if (!loadingUser && !user) {
      console.log("move signin");
      //   router.push("/signin");
    }
  }, [loadingUser, user, router]);

  return {
    loadingUser,
    user,
  };
};