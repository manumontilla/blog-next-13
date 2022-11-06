import Link from "next/link";

const fetchComments = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store",
    // next: { revalidate: 60 } --> Hace una peticion cada 60 seg,
  }).then((res) => res.json());
};

export default async function Comments({ params }: any) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul style={{ background: "#bbb", fontSize: "10px" }}>
      {comments.map((comment: any) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
