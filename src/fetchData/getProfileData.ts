import admin from "@/firebase/nodeApp";

export type Profile = {
  message: string;
};

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
