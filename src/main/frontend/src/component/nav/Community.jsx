import React, { useState, useEffect } from 'react';
import './Community.css';

function Community() {
  const [text, setText] = useState('');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [audioFiles, setAudioFiles] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState(null);

  useEffect(() => {
    fetch('/api/community-posts')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          const initialComments = {};
          data.forEach((post) => {
            if (post.comment) {
              initialComments[post.id] = post.comment.split('\n');
            } else {
              initialComments[post.id] = [];
            }
          });
          setComments(initialComments);
        })
        .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleWrite = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      try {
        const response = await fetch(`/api/audio-files/${userId}`);
        const data = await response.json();
        setAudioFiles(data);
        setIsEditing(true);
      } catch (error) {
        console.error('Error fetching audio files:', error);
      }
    } else {
      alert('User ID not found in localStorage.');
    }
  };

  const handleDelete = () => {
    setText('');
    setSelectedAudio(null);
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (text.trim() && selectedAudio) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await fetch('/api/community-posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId,
              text,
              record: selectedAudio.record,
              question: selectedAudio.question,
            }),
          });

          const newPost = await response.json();
          setPosts([...posts, newPost]);
          setText('');
          setSelectedAudio(null);
          setIsEditing(false);
        } catch (error) {
          console.error('Error saving post:', error);
        }
      } else {
        alert('User ID not found in localStorage.');
      }
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddComment = async (postId, comment) => {
    try {
      const response = await fetch(`/api/community-posts/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      if (response.ok) {
        setComments({
          ...comments,
          [postId]: comments[postId] ? [...comments[postId], comment] : [comment],
        });
      } else {
        console.error('Error saving comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  const handleDeleteComment = async (postId, commentIndex) => {
    try {
      const response = await fetch(`/api/community-posts/${postId}/comment/${commentIndex}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedComments = comments[postId].filter((_, i) => i !== commentIndex);
        setComments({
          ...comments,
          [postId]: updatedComments,
        });
      } else {
        console.error('Error deleting comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
      <div className="community_real">
        {isEditing ? (
            <>
              <textarea value={text} onChange={handleChange} />
              <div className="audio_list">
                {audioFiles.map((file) => (
                    <div key={file.id}>
                      <input
                          type="radio"
                          id={`audio-${file.id}`}
                          name="audio"
                          value={file.id}
                          onChange={() => setSelectedAudio(file)}
                      />
                      <audio controls src={`/api/download/${file.id}`} />
                      <p>{file.question}</p>
                    </div>
                ))}
              </div>
            </>
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
          {posts.length > 0 ? (
              posts.map((post) => (
                  <div key={post.id} className="post_item">
                    <p>{post.text}</p>
                    <p>{post.question}</p>
                    <audio controls src={`data:audio/wav;base64,${post.record}`} />
                    <div className="comment_section">
                      {comments[post.id] &&
                          comments[post.id].map((comment, commentIndex) => (
                              <div key={commentIndex} className="comment_item">
                                <p>{comment}</p>
                                <button className="comment_button"
                                        onClick={() => handleDeleteComment(post.id, commentIndex)}>
                                  댓글 삭제
                                </button>
                              </div>


                          ))}
                      <CommentInput onAddComment={(comment) => handleAddComment(post.id, comment)} />
                    </div>



                  </div>
              ))
          ) : (
              <p>게시물이 없습니다</p>
          )}
        </div>
      </div>
  );
}

function CommentInput({onAddComment}) {
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
