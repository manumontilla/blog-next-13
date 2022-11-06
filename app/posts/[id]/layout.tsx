import Link from "next/link";

const fetchSinglePost = (id: any) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
    // next: { revalidate: 60 } --> Hace una peticion cada 60 seg,
  }).then((res) => res.json());
};

export default async function Post({ children, params }: any) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}> Ver comentarios </Link>
      {children}
    </article>
  );
}
