import axios from 'axios';

export default async (req, res) => {
  try {
    const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = postsRes.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: 'API error' });
  }
};
