import admin from "@/firebase/nodeApp";
import type { Profile } from "@/firebase/types";

export const getProfileData = async (
  username: string
): Promise<Profile | null> => {
  const db = admin.firestore();
  const profileCollection = db.collection("profile");
  const profileDoc = await profileCollection.doc(username).get();

  if (!profileDoc.exists) {
    return null;
  }

  return profileDoc.data() as Profile;
};
