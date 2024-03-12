import { Dashboard } from "@uppy/react";
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import { useState } from "react";

export default function Uploader() {
  // IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
  const [uppy] = useState(
    () =>
      new Uppy({
        restrictions: {
          maxNumberOfFiles: 1,
          allowedFileTypes: ["image/*"],
          maxFileSize: 5 * 1000 * 1000,
        },
      })
  );

  return (
    <div>
      <Dashboard uppy={uppy} />
      <button>Upload</button>
    </div>
  );
}
