import {Post, PostsResponse} from "../lib/types/index"
import React, { useEffect, useState } from 'react';
import Spinner from "./Spinner"
import RatingsModal from "./RatingsModal"

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean | null>(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => {
    setModalVisible(false)
    console.log('Before setting state:', modalVisible)
  };
  
  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/page/posts');
        const data: PostsResponse = await response.json();
        setPosts(data.data.data);
      } catch (err) {
        setError('Failed to fetch Posts');
      }
    };
        fetchPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const showPosts = () =>{
    return(
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>ID: {post.id}</p>
              <p>Updated Time: {new Date(post.created_time).toLocaleString()}</p>
              <p> {post?.message} </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="bg-[#202020] rounded p-4 m-2 cursor-pointer"
      onClick={handleOpenModal}
      >
      <h1>Posts</h1>
      {posts.length ? (posts.length) : <Spinner />}
      { modalVisible && (
        <RatingsModal handleCloseModal={handleCloseModal}/>) }
    </div>
  );
};

export default PostList;
