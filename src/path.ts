export const path = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  signout: "/signout",
  settings: "/settings",
  announcement: (id: string): string => `/announcement/${id}`,
};
