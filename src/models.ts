export type GroupId = string;

export type Group = {
  id: GroupId;
  name: string;
};

export type AnnouncementId = string;

export type Announcement = {
  id: AnnouncementId;
  groupId: GroupId;
  title: string;
  body: string;
  publishedAt: Date;
};

export type ReportId = string;

export type Report = { id: ReportId } & Pick<
  User,
  "firstName" | "lastName" | "phoneNumber"
>;

export type UserId = string;

export type User = {
  id: UserId;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  groups: GroupId[];
};

export type UserPermission = {
  admin: boolean;
  groupManager: GroupId[];
};

export type UserReport = {
  reportedAt: Date;
};

export const fullName = ({ firstName, lastName }: User): string =>
  `${lastName} ${firstName}`;
