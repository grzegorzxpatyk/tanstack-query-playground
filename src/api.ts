import axios from 'axios';

type PostDto = {
  title: string;
  body: string;
  userId: number;
};

export const updatePost = async (payload: PostDto) => {
  const data = await axios.put(
    'https://jsonplaceholder.typicode.com/posts/dupa',
    payload
  );
  return data.data;
};
