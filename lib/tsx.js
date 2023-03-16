import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

const root = process.cwd();

export const getFiles = () => {
  return fs.readdirSync(path.join(root, "content/posts"));
};

export const getFilesBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "content/posts", `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = await matter(mdxSource);
  // Anadir mdx markdown
  // const source = await serialize(content, {});
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  });
  return {
    source,
    fromMatter: {
      slug,
      ...data,
    },
  };
};

export const getFilesByPage = (page) => {
  return fs
    .readFileSync(path.join(root, "content/posts.txt"), "utf-8")
    .split("\r\n")
    .slice((page - 1) * 5, page * 5)
    .reverse();
};

export const isLastPage = (page) => {
  const files = fs
    .readFileSync(path.join(root, "content/posts.txt"), "utf-8")
    .split("\r\n");
  return files.length < page * 5;
};

export const getAllFilesMetadata = (page) => {
  const files = getFilesByPage(page);

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "content/posts", postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
