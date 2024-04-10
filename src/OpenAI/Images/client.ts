import axios from "axios";

export interface ImageMessage {
  prompt: string;
  shape?: string;
  revisedPrompt?: string;
  imageUrl?: string;
}

export const requestImage = async (request: ImageMessage) => {
  const response = await axios.post(
    "http://localhost:4000/api/openai/images/conversation",
    request
  );
  return response.data;
};

export const getConversation = async () => {
  const response = await axios.get(
    "http://localhost:4000/api/openai/images/conversation"
  );
  return response.data;
};
