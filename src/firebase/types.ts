import { firestore } from "firebase";
import type {
  Group,
  Announcement,
  Report,
  User,
  UserPermission,
  UserReport,
} from "@/models";

export type { GroupId, AnnouncementId, ReportId, UserId } from "@/models";

// TODO: 削除
export type Profile = {
  username: string;
  message: string;
};

export type GroupDoc = Omit<Group, "id">;

export type AnnouncementDoc = Omit<Announcement, "id" | "publishedAt"> & {
  publishedAt: firestore.Timestamp;
};

export type ReportDoc = Omit<Report, "id">;

export type UserDoc = Omit<User, "id">;

export type UserPermissionDoc = UserPermission;

export type UserReportDoc = Omit<UserReport, "reportedAt"> & {
  reportedAt: firestore.Timestamp;
};
