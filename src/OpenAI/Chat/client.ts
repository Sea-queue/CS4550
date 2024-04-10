import axios from "axios";

export const getChat = async () => {
  const response = await axios.get("http://localhost:4000/api/openai/chat");
  return response.data;
};

export const postMessage = async (message: any) => {
  const response = await axios.post(
    "http://localhost:4000/api/openai/chat",
    message
  );
  return response.data;
};
