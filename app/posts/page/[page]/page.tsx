import PostPageComponent2 from "../../../../components/PostPage/PostPageComponent2";

async function PostPageNumber({ children, params }: any) {
  console.log("PageNumber", params);
  console.log("PageNumber", children);
  const { page } = params;

  return (
    <>
      {/* <PostPageComponent page={page} /> */}
      <PostPageComponent2 page={page} />
    </>
  );
}

// export async function getStaticProps() {
//   return { props: { title: "hola" } };
// }

export default PostPageNumber;
