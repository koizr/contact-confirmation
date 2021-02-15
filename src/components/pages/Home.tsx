import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { path } from "@/path";
import { useRequireSignIn } from "@/auth";
import type { Announcement } from "@/models";
import { useApi } from "@/api";
import WithUserHeader from "@/components/templates/WithUserHeader";

const Home: React.FC = () => {
  const router = useRouter();
  const { loadingUser, user } = useRequireSignIn();
  const api = useApi();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    let mounted = true;
    api.getAnnouncements().then((data) => {
      if (mounted) {
        setAnnouncements(data);
      }
    });
    return () => {
      mounted = false;
    };
  });

  if (!loadingUser && !user) {
    router.push(path.signin);
    return null;
  }

  return (
    <WithUserHeader title="Home" loading={loadingUser}>
      <ul>
        {announcements.map((a) => (
          <li key={a.id}>
            <Link href={path.announcement(a.id)}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </WithUserHeader>
  );
};

export default Home;
