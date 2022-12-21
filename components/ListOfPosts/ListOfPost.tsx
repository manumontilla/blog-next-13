import { getAllFilesMetadata } from "../../lib/tsx";
import IconComponent from "../../app/posts/IconComponent";
import Image from "next/image";
import Tags from "../Tags";
import moment from "moment";
import "./ListOfPost.css";
import Link from "next/link";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());
};

const handleClick = () => {
  console.log("me gusta");
};

export async function ListOfPost({ page }: number) {
  const posts = await getAllFilesMetadata(page);
  return posts.map((post: any) => (
    <article className="card" key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        {/* style={{ backgroundImage: `url(${post.image})` }} */}
        <div className="card_header"></div>
        <div className="card_body">
          <div>
            <Tags tags={post.tags}></Tags>
            <h2>{post.title}</h2>
            <p>{post.resume.slice(0, 200) + "..."}</p>
          </div>

          <div className="card_footer">
            <div className="user">
              {/* <img alt="leeerob" src={post.image} className="user_image" /> */}
              <div className="user__info">
                {/* <h5>{post.author}</h5> */}
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
