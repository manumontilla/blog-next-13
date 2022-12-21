import PostPageComponent from "../../components/PostPage/PostPageComponent";

async function PostPage() {
  // console.log("this params", params);
  // console.log(children);

  return (
    <>
      <PostPageComponent page={1} />
    </>
  );
  // <PostPageComponent page={1} />
}

export default PostPage;
