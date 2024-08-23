"use client";
// import Image from "next/image";
import { useEffect } from "react";
import ConversationsList from "./components/ConversationList";
import PostList from "./components/PostList";
import AdsPostList from "./components/AdsPostList";
import RatingList from "./components/RatingList";

export default function Home() {
  return (
    <main>
      <div>
        <p>Welcome to dayliff social media manager</p>
        <div className="all flex items-center">
          <ConversationsList />
          <PostList />
          <AdsPostList />
          <RatingList />
        </div>
      </div>
    </main>
  );
}
