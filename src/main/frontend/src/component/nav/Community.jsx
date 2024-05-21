import React, { useState } from 'react';
import './Community.css';

function Community() {
  const [text, setText] = useState('');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleWrite = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setText('');
    setIsEditing(false);
  };

  const handleSave = () => {
    if (text.trim()) {
      setPosts([...posts, text]);
      setText('');
      setIsEditing(false);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddComment = (index, comment) => {
    setComments({
      ...comments,
      [index]: comments[index] ? [...comments[index], comment] : [comment],
    });
  };

  const handleDeleteComment = (postIndex, commentIndex) => {
    const updatedComments = comments[postIndex].filter(
      (_, i) => i !== commentIndex
    );
    setComments({
      ...comments,
      [postIndex]: updatedComments,
    });
  };

  return (
    <div className="community_real">
      {isEditing ? (
        <textarea value={text} onChange={handleChange} />
      ) : (
        <p>{text}</p>
      )}
      <div className="post_button">
        {isEditing ? (
          <button className="post_real_button" onClick={handleSave}>
            저장하기
          </button>
        ) : (
          <button className="post_real_button" onClick={handleWrite}>
            작성하기
          </button>
        )}
        <button className="post_real_button" onClick={handleDelete}>
          삭제하기
        </button>
      </div>
      <div className="posts_list">
        {posts.map((post, index) => (
          <div key={index} className="post_item">
            <p>{post}</p>
            <div className="comment_section">
              {comments[index] &&
                comments[index].map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment_item">
                    <p>{comment}</p>
                    <button
                      className="comment_button"
                      onClick={() => handleDeleteComment(index, commentIndex)}
                    >
                      댓글 삭제
                    </button>
                  </div>
                ))}
              <CommentInput
                onAddComment={(comment) => handleAddComment(index, comment)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommentInput({ onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      onAddComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="comment_input">
      <input
        type="text"
        value={commentText}
        onChange={handleCommentChange}
        placeholder="댓글 쓰기"
      />
      <button className="comment_button" onClick={handleCommentSubmit}>
        댓글 저장
      </button>
    </div>
  );
}

export default Community;
