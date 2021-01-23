import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "@/firebase/clientApp";

type Context = {
  user?: firebase.User;
  setUser: (user: firebase.User) => void;
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
  const [user, setUser] = useState<firebase.User | undefined>(undefined);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser(user);
        } else setUser(undefined);
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
