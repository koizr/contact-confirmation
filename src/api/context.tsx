import React, { createContext, useContext } from "react";
import { Api } from "./index";
import { FirestoreApi } from "./prod";

const firestoreApi = new FirestoreApi();

const ApiContext = createContext<Api>(firestoreApi);

export const ApiContextProvider: React.FC = ({ children }) => (
  <ApiContext.Provider value={firestoreApi}>{children}</ApiContext.Provider>
);

export const useApi = (): Api => useContext(ApiContext);
