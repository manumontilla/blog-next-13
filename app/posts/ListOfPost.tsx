import { LikeButton } from "./LikeButton";
import Link from "next/link";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    // next: { revalidate: 60 } --> Hace una peticion cada 60 seg,
  }).then((res) => res.json());
};

const handleClick = () => {
  console.log("me gusta");
};

export async function ListOfPost() {
  const posts = await fetchPosts();
  return posts.slice(0, 5).map((post: any) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#f0f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
}
