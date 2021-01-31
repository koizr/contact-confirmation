import firebase from "@/firebase/clientApp";
import type { UserId, User } from "@/models";
import type { UserDoc } from "@/firebase/types";

export const getUser = async (userId: UserId): Promise<User | undefined> => {
  const userDoc = await firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .get();

  const user = userDoc.data();
  if (!user) {
    return undefined;
  }

  return {
    id: userId,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    groups: user.groups,
  };
};

export const updateUser = async (user: User): Promise<void> => {
  await firebase.firestore().collection("users").doc(user.id).set({
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
  });
};

export const createUser = async (
  id: UserId,
  profile: UserDoc
): Promise<void> => {
  await firebase.firestore().collection("users").doc(id).set(profile);
};
