import axios from 'axios';

type PostDto = {
  title: string;
  body: string;
  userId: number;
};

export const getPost = async (id: number) => {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data.data;
};

export const updatePost = async ({
  id,
  payload,
}: {
  id: number;
  payload: PostDto;
}) => {
  const data = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    payload
  );
  return data.data;
};
