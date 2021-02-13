import type * as models from "@/models";
export { ApiContextProvider, useApi } from "./context";

type Unsubscriber = () => void;

export type Api = {
  onAuthStateChanged(handler: (user?: models.User) => void): Unsubscriber;
  getUser(): Promise<models.User | undefined>;
  getAnnouncements(): Promise<models.Announcement[]>;
};
