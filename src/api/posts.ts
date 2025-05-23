export type Post = {
	id: number;
	title: string;
	content: string;
	published_at: string;
};

export async function fetchPosts(): Promise<Post[]> {
	const res = await fetch('http://localhost:8000/api/posts/');
	if (!res.ok) throw new Error('Failed to fetch posts');
	return res.json();
}
  