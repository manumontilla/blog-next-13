import MDXContent from "../../../components/MDXContent";
import { getFilesBySlug } from "../../../lib/tsx";
import "./post.css";
import "../../../styles/prism-atom.css";

export default async function Post({ children, params }: any) {
  console.log(children, params);
  const { id } = params;
  const components = { Post };
  const { source, fromMatter } = await getFilesBySlug(id);

  console.log("post", source);
  console.log("fromMatter", fromMatter);
  return (
    <div className="article">
      <MDXContent source={source} />
    </div>
  );
}
