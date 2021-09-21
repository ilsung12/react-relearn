import React, { useEffect, useState } from 'react';
import Comments from './Comments';

const commentList = [
  { title: 'comment 1', content: 'message 1', likes: 1 },
  { title: 'comment 2', content: 'message 2', likes: 2 },
  { title: 'comment 3', content: 'message 3', likes: 3 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  // memoization의 성능확인을 위한 임의의 리랜더링 상황 연출

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: `likes${prevComments.length + 1}`,
        },
      ]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}
