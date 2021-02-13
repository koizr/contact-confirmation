import React, { useState, useEffect, createContext, useContext } from "react";
import { useApi } from "@/api";
import type { User } from "@/models";

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

  const api = useApi();

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = api.onAuthStateChanged(async (user) => {
      try {
        setUser(user);
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, [api]);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = (): Context => useContext(UserContext);
