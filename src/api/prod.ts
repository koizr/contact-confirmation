import firebase from "@/firebase/clientApp";
import { AnnouncementDoc, UserDoc } from "@/firebase/types";
import { User, Announcement, UserId } from "@/models";
import { Api } from "./index";

export class FirestoreApi implements Api {
  onAuthStateChanged(handler: (user?: User) => void): () => void {
    return firebase
      .auth()
      .onAuthStateChanged(async (user) =>
        handler(await this.getUserById(user?.uid))
      );
  }

  private async getUserById(id?: UserId): Promise<User | undefined> {
    if (!id) {
      return undefined;
    }
    const userDoc = await firebase
      .firestore()
      .collection("users")
      .doc(id)
      .get();

    const user = userDoc.data() as UserDoc | undefined;
    if (!user) {
      return undefined;
    }

    return {
      id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      groups: user.groups,
    };
  }

  async getUser(): Promise<User | undefined> {
    return this.getUserById(firebase.auth().currentUser?.uid);
  }

  async getAnnouncements(): Promise<Announcement[]> {
    const user = await this.getUser();
    if (!user) {
      return [];
    }
    const announcementDocs = await firebase
      .firestore()
      .collection("announcements")
      .where("groupId", "in", user.groups)
      .orderBy("publishedAt", "desc")
      .get();

    return announcementDocs.docs.map((doc) => {
      const id = doc.id;
      const data = doc.data() as AnnouncementDoc;
      return {
        id,
        groupId: data.groupId,
        title: data.title,
        body: data.body,
        publishedAt: data.publishedAt.toDate(),
      };
    });
  }
}
