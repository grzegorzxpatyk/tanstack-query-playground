import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updatePost = async (payload: { [key: string]: any }) => {
  const data = await axios.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    payload,
  );
  return data.data;
};