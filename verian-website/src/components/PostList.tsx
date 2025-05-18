import { useEffect, useState } from 'react';
import { fetchPosts, type Post } from '../api/posts';

export default function PostList() {
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data);
      setLoading(false);
    }).catch(console.error);
}, []);

if (loading) return <p>Loading posts...</p>;

return (
	<div className="bg-blue-500 text-white p-4 rounded-lg">
      Hello, Tailwind!
    </div>
  );
}
