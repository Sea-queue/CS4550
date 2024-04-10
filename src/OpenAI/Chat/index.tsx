import React, { useState, useEffect } from "react";
import * as client from "./client";

interface Message {
  role: string;
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  const sendMessage = async () => {
    const userMessage = {
      role: "user",
      content: message,
    };
    try {
      const response = await client.postMessage(userMessage);
      setMessages([...messages, userMessage, response]);
      setMessage("");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const getMessages = async () => {
    try {
      const response = await client.getChat();
      console.log("return with: ", response);
      setMessages(response);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  // useEffect(() => {
  //   getMessages();
  // }, []);

  return (
    <div className="container-fluid">
      <h2>Chat</h2>
      <ul className="list-group">
        {messages.map((message, index) => (
          <li
            key={index}
            className={`list-group-item ${
              message.role === "user" && "list-group-item-primary"
            }
            ${message.role === "assistant" && "list-group-item-success"}`}
          >
            <strong>{message.role}</strong>:{message.content}
          </li>
        ))}
        <li className="list-group-item d-flex flex-column">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control w-75"
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary w-25 float-end mt-3"
          >
            Send
          </button>
        </li>
      </ul>
    </div>
  );
}
