import { getAllFilesMetadata } from "../../lib/tsx";
import IconComponent from "./IconComponent";
import Image from "next/image";
import Tags from "../../components/Tags";
import moment from "moment";
import "./ListOfPost.css";
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
  const posts = await getAllFilesMetadata();
  return posts.map((post: any) => (
    <article className="card" key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <div
          style={{ backgroundImage: `url(${post.image})` }}
          className="card_header"
        ></div>
        <div className="card_body">
          <div>
            <Tags tags={post.tags}></Tags>
            <h2>{post.title}</h2>
            <p>{post.resume.slice(0, 200) + "..."}</p>
          </div>

          <div className="card_footer">
            <div className="user">
              <img alt="leeerob" src={post.image} className="user_image" />
              <div className="user__info">
                <h5>{post.author}</h5>
                <small>
                  {moment.utc(post.date).local().startOf("seconds").fromNow()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  ));
}

export default ListOfPost;
