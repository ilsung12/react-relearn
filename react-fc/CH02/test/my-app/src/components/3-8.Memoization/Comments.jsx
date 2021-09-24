import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

export default function Comments({ commentList }) {
  // const handleChange = useCallback(() => {
  //   console.log('handle');
  // }, []);

  // useCallback이 아닐 때,
  const handleChange = () => {
    console.log('handle');
  };

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleChange}
        />
      ))}
    </div>
  );
}
