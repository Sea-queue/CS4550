import axios from "axios";

export const getChat = async () => {
  // try {
  const response = await axios.get("http://localhost:4000/api/openai/chat");
  return response.data;
  // } catch (error) {
  //   alert("Check the OpenAI APIs, might be the payment due!");
  // }
};

export const postMessage = async (message: any) => {
  // try {
  const response = await axios.post(
    "http://localhost:4000/api/openai/chat",
    message
  );
  return response.data;
  // } catch (error) {
  //   alert("Check the OpenAI APIs, might be the payment due!");
  // }
};
