import { Dashboard } from "@uppy/react";
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import { useEffect, useState } from "react";
import Tus from "@uppy/tus";
import { getUser } from "@/services/getUser";
import { supabase } from "@/lib/supabase";

export default function Uploader() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function getUserId() {
      const data = await getUser();
      setUserId(data?.user?.id || null);
      console.log("UPPY USERID: ", userId);
    }
    getUserId();
  }, [userId]);

  // IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
  async function onBeforeRequest(req: any) {
    const { data } = await supabase.auth.getSession();
    req.setHeader("Authorization", `Bearer ${data.session?.access_token}`);
  }

  const [uppy] = useState(() =>
    new Uppy({
      restrictions: {
        maxNumberOfFiles: 1,
        allowedFileTypes: ["image/*"],
        maxFileSize: 5 * 1000 * 1000,
      },
    }).use(Tus, {
      endpoint:
        process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/upload/resumable",
      onBeforeRequest,
      allowedMetaFields: [
        "bucketName",
        "objectName",
        "contentType",
        "cacheControl",
      ],
    })
  );

  uppy.on("file-added", (file) => {
    file.meta = {
      ...file.meta,
      bucketName: "listing-images",
      contentType: file.type,
    };
  });

  function handleUpload() {
    const randomUUID = crypto.randomUUID();

    uppy.setFileMeta(uppy.getFiles()[0].id, {
      objectName: userId + "/" + randomUUID + "/" + uppy.getFiles()[0].name,
    });

    uppy.upload();
  }

  return (
    <div>
      <Dashboard uppy={uppy} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
