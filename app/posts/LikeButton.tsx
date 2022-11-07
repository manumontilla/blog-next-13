"use client";

import { useState } from "react";
import "./ListOfPost.css";

export function LikeButton({ id }: any) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "💔"}</button>
  );
}
