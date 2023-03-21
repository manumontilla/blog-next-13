import MDXContent from "../../../components/MDXContent";
import { getFilesBySlug } from "../../../lib/tsx";
import "./post.css";
import "../../../styles/prism-atom.css";
import Link from "next/link";

export default async function Post({ children, params }: any) {
  const { id } = params;
  const components = { Post };
  const { source, fromMatter } = await getFilesBySlug(id);

  return (
    <div className="article">
      <MDXContent source={source} />
      <div className="flex">
        <Link className="volver" href="/posts/">
          Volver
        </Link>
      </div>
    </div>
  );
}
