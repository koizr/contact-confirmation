import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "@/firebase/clientApp";
import type { User } from "@/models";
import { getUser } from "@/db/user";

type Context = {
  user?: User;
  setUser: (user: User) => void;
  loadingUser: boolean;
};

export const UserContext = createContext<Context>({
  setUser: (_) => {
    /* do nothing */
  },
  loadingUser: false,
});

export default function UserContextComp({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        setUser(user ? await getUser(user.uid) : undefined);
        console.log("on auth status changed:");
        console.log(user);
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = (): Context => useContext(UserContext);
