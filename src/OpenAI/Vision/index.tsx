import * as client from "./client";
import React, { useState } from "react";
export default function Vision() {
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState("");
  const describeImage = async () => {
    setUrl(imageUrl);
    setDescription("Loading...");
    const description = await client.describeImage({ imageUrl });
    setDescription(description);
  };
  return (
    <div className="w-100">
      <h2>Vision</h2>
      <button onClick={describeImage}>Describe</button>
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <textarea rows={10} value={description} />
      <img src={url} width="256" />
    </div>
  );
}
