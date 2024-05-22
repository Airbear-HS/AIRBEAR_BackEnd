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
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching community posts:', error));
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
    const userId = localStorage.getItem('userId');
    if (text.trim() && selectedAudio && userId) {
      const selectedAudioFile = audioFiles.find(file => file.id === selectedAudio);
      if (selectedAudioFile) {
        const postData = {
          userId,
          text,
          record: selectedAudioFile.record,
          date: new Date().toISOString(),
          question: selectedAudioFile.question,
        };

        try {
          const response = await fetch('/api/community-posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });

          if (response.ok) {
            const newPost = await response.json();
            setPosts([...posts, newPost]);
            setText('');
            setSelectedAudio(null);
            setIsEditing(false);
          } else {
            console.error('Error saving post:', response.statusText);
          }
        } catch (error) {
          console.error('Error saving post:', error);
        }
      }
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
                          onChange={() => setSelectedAudio(file.id)}
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
          {posts.length === 0 ? (
              <p>게시물이 없습니다</p>
          ) : (
              posts.map((post, index) => (
                  <div key={index} className="post_item">
                    <p>{post.question}</p>
                    <audio controls src={`/api/download/${post.record}`}/>
                    <p>{post.text}</p>
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
              ))
          )}
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
