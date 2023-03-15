import PostPageComponent2 from "../../components/PostPage/PostPageComponent2";

async function PostPage() {
  // console.log("this params", params);
  // console.log(children);

  return (
    <>
      <PostPageComponent2 page={1} />
      {/* <PostPageComponent page={1} /> */}
    </>
  );
  // <PostPageComponent page={1} />
}

export default PostPage;
