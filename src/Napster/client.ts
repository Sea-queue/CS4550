import axios from "axios";

const NAPSTER_IMAGE_URL = "https://api.napster.com/imageserver/v2";
const KEY = process.env.REACT_APP_NAPSTER_API_KEY;
const NAPSTER_API = "https://api.napster.com/v2.2";

export const albumImageUrl = (album: any) =>
  `${NAPSTER_IMAGE_URL}/albums/${album.id}/images/300x300.jpg`;

export const fullTextSearch = async (text: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?query=${text}&apikey=${KEY}`
  );
  return response.data;
};
