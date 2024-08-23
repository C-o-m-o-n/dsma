import {Rating, RatingsResponse} from "../lib/types/index"
import React, { useEffect, useState } from 'react';
import Spinner from "./Spinner"

const RatingList: React.FC = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch('/api/page/posts');
        const data: RatingsResponse = await response.json();
        setRatings(data.data.data);
      } catch (err) {
        setError('Failed to fetch Posts');
      }
    };
        fetchRatings();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  // const showRatings = () =>{
  //   return(
  //     <div>
  //       <ul>
  //         {posts.map((post) => (
  //           <li key={post.id}>
  //             <p>ID: {post.id}</p>
  //             <p>Updated Time: {new Date(post.created_time).toLocaleString()}</p>
  //             <p> {post?.message} </p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }

  return (
    <div className="bg-[#202020] rounded p-4 m-2">
      <h1>Ratings</h1>
      {ratings.length ? (ratings.length) : <Spinner />}
    </div>
  );
};

export default RatingList;
