import axios from "axios";

export interface ImageMessage {
  imageUrl: string;
}

export const describeImage = async (image: ImageMessage) => {
  const response = await axios.post(
    "http://localhost:4000/api/openai/vision",
    image
  );
  return response.data;
};
