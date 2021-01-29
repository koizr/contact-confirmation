import {
  assertSucceeds,
  assertFails,
  loadFirestoreRules,
  initializeAdminApp,
  initializeTestApp,
  clearFirestoreData,
  apps,
} from "@firebase/rules-unit-testing";
import fs from "fs";

const makeTestProjectID = (prefix = "test"): string => {
  const hrTime = process.hrtime();
  return `${prefix}${(hrTime[0] * 1000000 + hrTime[1] / 1000) * 1000}`;
};

const _adminApp = (projectID: string) =>
  initializeAdminApp({
    projectId: projectID,
  });

type AuthContext = { [key in "uid" | "email"]?: string };

const app = (projectID: string, auth: AuthContext | undefined = undefined) =>
  initializeTestApp({
    projectId: projectID,
    auth: auth,
  });

const loadRules = (projectID: string) =>
  loadFirestoreRules({
    projectId: projectID,
    rules: fs.readFileSync("firestore.rules", "utf8"),
  });

const clearFirestore = (projectID: string) =>
  clearFirestoreData({ projectId: projectID });

const cleanup = () => Promise.all(apps().map((app) => app.delete()));

describe("users", () => {
  it("形式が合っていれば認証なしでも作れる", async () => {
    const projectId = makeTestProjectID();
    loadRules(projectId);
    const db = app(projectId).firestore();

    await assertSucceeds(
      db.collection("users").doc("user1").set({
        firstName: "Taro",
        lastName: "Yamada",
        phoneNumber: "080-1234-5678",
        groups: [],
      })
    );

    clearFirestore(projectId);
  });

  it("firstName なしだとエラー", async () => {
    const projectId = makeTestProjectID();
    loadRules(projectId);
    const db = app(projectId).firestore();

    await assertFails(
      db.collection("users").doc("user1").set({
        lastName: "Yamada",
        phoneNumber: "080-1234-5678",
        groups: [],
      })
    );

    clearFirestore(projectId);
  });

  afterAll(() => cleanup());
});
