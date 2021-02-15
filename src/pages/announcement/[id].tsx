import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useApi } from "@/api";
import WithBackButton from "@/components/templates/WithBackButton";
import { Announcement } from "@/models";
import { path } from "@/path";

const AnnouncementPage: FC = () => {
  const router = useRouter();
  const api = useApi();
  const [announcement, setAnnouncement] = useState<Announcement | undefined>(
    undefined
  );

  useEffect(() => {
    let mounted = true;
    if (typeof router.query.id === "string") {
      api.getAnnouncement(router.query.id).then((data) => {
        if (mounted) {
          setAnnouncement(data);
        }
      });
    }
    return () => {
      mounted = false;
    };
  });

  return (
    <WithBackButton
      title={announcement?.title ?? ""}
      loading={!announcement}
      back={() => router.push(path.home)}
    >
      <h2>{announcement?.title}</h2>
      <article>
        <p>{announcement?.body}</p>
      </article>
    </WithBackButton>
  );
};

export default AnnouncementPage;
