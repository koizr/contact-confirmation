import firebase from "@/firebase/clientApp";
import { AnnouncementDoc, UserDoc } from "@/firebase/types";
import { User, Announcement, UserId, AnnouncementId } from "@/models";
import { Api } from "./index";

const mapUser = (id: UserId, doc: UserDoc): User => ({
  id: id,
  firstName: doc.firstName,
  lastName: doc.lastName,
  phoneNumber: doc.phoneNumber,
  groups: doc.groups,
});

const mapAnnouncement = (
  id: AnnouncementId,
  doc: AnnouncementDoc
): Announcement => ({
  id: id,
  groupId: doc.groupId,
  title: doc.title,
  body: doc.body,
  publishedAt: doc.publishedAt.toDate(),
});

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

    return mapUser(id, user);
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
      return mapAnnouncement(doc.id, doc.data() as AnnouncementDoc);
    });
  }

  async getAnnouncement(id: AnnouncementId): Promise<Announcement | undefined> {
    const doc = await firebase.firestore().doc(`announcements/${id}`).get();
    if (!doc.exists) {
      return undefined;
    }
    return mapAnnouncement(doc.id, doc.data() as AnnouncementDoc);
  }
}
