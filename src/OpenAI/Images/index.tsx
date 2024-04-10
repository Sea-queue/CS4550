import React, { useState, useEffect } from "react";
import * as client from "./client";
import { ImageMessage } from "./client";

export default function Images() {
  const [conversation, setConversation] = useState<ImageMessage[]>([]);
  const [prompt, setPrompt] = useState<string>("the space shuttle");
  const [shape, setShape] = useState("square");
  const requestImage = async () => {
    const response = await client.requestImage({
      prompt,
      shape,
    });
    setConversation([...conversation, response]);
  };
  const getConversation = async () => {
    const response = await client.getConversation();
    setConversation(response);
  };

  useEffect(() => {
    getConversation();
  }, []);

  return (
    <div>
      <h2>Generate Images Screen</h2>
      <ul className="list-group">
        {conversation.map((message, index) => (
          <li key={index} className="list-group-item">
            {message.imageUrl && (
              <>
                {message.shape === "square" && (
                  <img src={message.imageUrl} width="256" height="256" />
                )}
                {message.shape === "portrait" && (
                  <img src={message.imageUrl} height="256" />
                )}
                {message.shape === "landscape" && (
                  <img src={message.imageUrl} width="256" />
                )}
                <p>{message.revisedPrompt}</p>
              </>
            )}
            {message.prompt && (
              <>
                <p>{message.prompt}</p>
                <p>{message.shape}</p>
              </>
            )}
          </li>
        ))}
        <li className="list-group-item">
          <button onClick={requestImage} className="btn btn-primary">
            Send
          </button>
          <textarea
            value={prompt}
            className="form-control"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image to generate"
          />
          <select
            className="form-control"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          >
            <option value="square">Square</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </li>
      </ul>
    </div>
  );
}
