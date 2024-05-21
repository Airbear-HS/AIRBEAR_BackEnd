import React, { useState, useEffect, useRef } from 'react';
import './Interview_Real.css';

const Interview_Real = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [questionId, setQuestionId] = useState('');
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (storedQuestions && storedQuestions.length > 0) {
      setQuestion(storedQuestions[currentQuestionIndex].question);
      setQuestionId(storedQuestions[currentQuestionIndex].questionId);
      fetchAnswersForAllQuestions(storedQuestions);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    setIsTextVisible(false);
  }, [question]);

  const fetchAnswersForAllQuestions = async (questions) => {
    const questionIds = questions.map(q => q.questionId);
    try {
      const response = await fetch('/api/answers/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ questionIds })
      });
      const data = await response.json();
      const answersMap = {};
      data.forEach(answer => {
        answersMap[answer.questionId] = answer.best_answer;
      });
      localStorage.setItem('best_answers', JSON.stringify(answersMap));
      setAnswers(data);
    } catch (error) {
      console.error('Error fetching answers:', error);
    }
  };

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const handleNextQuestion = () => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (storedQuestions && currentQuestionIndex < storedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestion(storedQuestions[currentQuestionIndex + 1].question);
      setQuestionId(storedQuestions[currentQuestionIndex + 1].questionId);
    }
  };

  const currentAnswer = answers.find(answer => answer.questionId === questionId);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          mediaRecorderRef.current.ondataavailable = event => {
            audioChunksRef.current.push(event.data);
          };
          mediaRecorderRef.current.start();
          setIsRecording(true);
        })
        .catch(error => console.error('Error accessing microphone:', error));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const formData = new FormData();
      const userId = localStorage.getItem('userId');
      formData.append('file', audioBlob, 'recording.wav');
      formData.append('questionId', questionId);
      formData.append('userId', userId);

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
          .then(response => response.json())
          .then(data => {
            console.log('File uploaded successfully:', data);
            setAudioUrl(data.audioUrl);
          })
          .catch(error => console.error('Error uploading file:', error));

      audioChunksRef.current = [];
      setIsRecording(false);
    };
  };

  const playRecording = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
      <div className="Personal">
        <div className="Personal-container">
          <div className="questions">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
            >
              <path
                  d="M30 5.625C25.1791 5.625 20.4664 7.05457 16.458 9.73293C12.4495 12.4113 9.32533 16.2181 7.48045 20.6721C5.63556 25.126 5.15285 30.027 6.09337 34.7553C7.03388 39.4836 9.35538 43.8268 12.7643 47.2357C16.1732 50.6446 20.5164 52.9661 25.2447 53.9066C29.973 54.8472 34.874 54.3644 39.3279 52.5196C43.7819 50.6747 47.5887 47.5505 50.2671 43.542C52.9454 39.5336 54.375 34.8209 54.375 30C54.3682 23.5374 51.7979 17.3415 47.2282 12.7718C42.6585 8.20209 36.4626 5.63182 30 5.625ZM30 45C29.4438 45 28.9 44.835 28.4375 44.526C27.975 44.217 27.6145 43.7777 27.4016 43.2638C27.1887 42.7499 27.133 42.1844 27.2416 41.6388C27.3501 41.0932 27.6179 40.5921 28.0113 40.1988C28.4046 39.8054 28.9057 39.5376 29.4513 39.429C29.9969 39.3205 30.5624 39.3762 31.0763 39.5891C31.5902 39.802 32.0295 40.1624 32.3385 40.625C32.6476 41.0875 32.8125 41.6312 32.8125 42.1875C32.8125 42.9334 32.5162 43.6488 31.9887 44.1762C31.4613 44.7037 30.7459 45 30 45ZM31.875 33.5812V33.75C31.875 34.2473 31.6775 34.7242 31.3258 35.0758C30.9742 35.4275 30.4973 35.625 30 35.625C29.5027 35.625 29.0258 35.4275 28.6742 35.0758C28.3226 34.7242 28.125 34.2473 28.125 33.75V31.875C28.125 31.3777 28.3226 30.9008 28.6742 30.5492C29.0258 30.1975 29.5027 30 30 30C33.1008 30 35.625 27.8906 35.625 25.3125C35.625 22.7344 33.1008 20.625 30 20.625C26.8992 20.625 24.375 22.7344 24.375 25.3125V26.25C24.375 26.7473 24.1775 27.2242 23.8258 27.5758C23.4742 27.9275 22.9973 28.125 22.5 28.125C22.0027 28.125 21.5258 27.9275 21.1742 27.5758C20.8226 27.2242 20.625 26.7473 20.625 26.25V25.3125C20.625 20.6602 24.8297 16.875 30 16.875C35.1703 16.875 39.375 20.6602 39.375 25.3125C39.375 29.3859 36.15 32.7961 31.875 33.5812Z"
                  fill="#00D8FF"
              />
            </svg>
            <h2>{question}</h2>
          </div>
          <div className="answer-button" onClick={toggleTextVisibility}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
            >
              <path
                  d="M49.9999 70.8335C54.4202 70.8335 58.6594 69.0776 61.785 65.9519C64.9106 62.8263 66.6665 58.5871 66.6665 54.1668H58.3332C58.3332 56.377 57.4552 58.4966 55.8924 60.0594C54.3296 61.6222 52.21 62.5002 49.9999 62.5002C47.7897 62.5002 45.6701 61.6222 44.1073 60.0594C42.5445 58.4966 41.6665 56.377 41.6665 54.1668H33.3332C33.3332 58.5871 35.0892 62.8263 38.2148 65.9519C41.3404 69.0776 45.5796 70.8335 49.9999 70.8335ZM27.0832 8.3335C23.2623 8.33366 19.5327 9.50113 16.3937 11.6796C13.2547 13.858 10.8562 16.9435 9.51924 20.5229C8.18231 24.1022 7.97082 28.0045 8.91308 31.7074C9.85534 35.4103 11.9064 38.7369 14.7915 41.2418C12.7149 46.9088 12.0368 52.9932 12.8148 58.9783C13.5928 64.9634 15.8039 70.6723 19.2603 75.62C22.7167 80.5677 27.3163 84.6081 32.6683 87.3979C38.0202 90.1876 43.9665 91.6444 50.002 91.6444C56.0374 91.6444 61.9837 90.1876 67.3357 87.3979C72.6877 84.6081 77.2872 80.5677 80.7436 75.62C84.2 70.6723 86.4111 64.9634 87.1891 58.9783C87.9671 52.9932 87.289 46.9088 85.2124 41.2418C87.2542 39.4683 88.8882 37.2741 90.0023 34.8097C91.1163 32.3453 91.6841 29.6691 91.6666 26.9646C91.649 24.2601 91.0466 21.5915 89.9007 19.1417C88.7548 16.692 87.0925 14.5191 85.0279 12.7722C82.9632 11.0253 80.5451 9.74574 77.9394 9.02129C75.3338 8.29684 72.6022 8.14466 69.9322 8.57519C67.2621 9.00572 64.7168 10.0088 62.4709 11.5155C60.225 13.0222 58.3316 14.997 56.9207 17.3043C52.3478 16.4502 47.6562 16.4502 43.0832 17.3043C41.4092 14.5627 39.0583 12.2976 36.2563 10.7266C33.4544 9.15561 30.2955 8.33152 27.0832 8.3335ZM16.6665 27.0835C16.663 24.6303 17.5254 22.2546 19.1018 20.3749C20.6782 18.4952 22.8674 17.2322 25.2837 16.8084C27.7 16.3846 30.1883 16.8272 32.3103 18.0583C34.4323 19.2893 36.0517 21.2297 36.8832 23.5377L38.2082 27.196L41.9499 26.1252C44.5676 25.3765 47.2772 24.9978 49.9999 25.0002C52.7999 25.0002 55.4999 25.3918 58.0499 26.1252L61.7915 27.196L63.1165 23.5377C63.6887 21.9576 64.6344 20.5393 65.8732 19.4037C67.1119 18.2682 68.607 17.449 70.2307 17.0162C71.8545 16.5834 73.5589 16.5496 75.1985 16.9179C76.8382 17.2862 78.3644 18.0455 79.6471 19.1311C80.9298 20.2168 81.931 21.5966 82.5652 23.1528C83.1993 24.709 83.4478 26.3955 83.2892 28.0685C83.1307 29.7415 82.5699 31.3513 81.6547 32.7607C80.7395 34.1701 79.497 35.3373 78.0332 36.1627L74.6415 38.0793L76.3249 41.5877C78.4466 46.0336 79.4076 50.9445 79.1183 55.8622C78.829 60.7799 77.2989 65.5443 74.6706 69.7108C72.0423 73.8773 68.4015 77.3102 64.0878 79.6893C59.7742 82.0684 54.9282 83.3161 50.002 83.3161C45.0757 83.3161 40.2298 82.0684 35.9161 79.6893C31.6024 77.3102 27.9617 73.8773 25.3334 69.7108C22.7051 65.5443 21.1749 60.7799 20.8856 55.8622C20.5963 50.9445 21.5574 46.0336 23.679 41.5877L25.3582 38.0752L21.9665 36.1585C20.3577 35.2517 19.019 33.9334 18.0876 32.3387C17.1563 30.744 16.6658 28.9303 16.6665 27.0835Z"
                  fill="#00D8FF"
              />
            </svg>
          </div>

          {/* 텍스트가 보이면 표시되는 부분 */}
          {isTextVisible && currentAnswer && (
              <div>
                <p
                    style={{
                      color: '#000',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 800,
                      lineHeight: 'normal',
                    }}
                >
                  {currentAnswer.best_answer.split('\n').map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}
                        <br/>
                      </React.Fragment>
                  ))}
                </p>
              </div>
          )}
        </div>
        <div className="recording-buttons">
          {!isRecording ? (
              <button onClick={startRecording}>녹음 시작</button>
          ) : (
              <button onClick={stopRecording}>녹음 종료</button>
          )}
          {audioUrl && (
              <button onClick={playRecording}>녹음 확인</button>
          )}
        </div>
        {currentQuestionIndex < JSON.parse(localStorage.getItem('questions')).length - 1 && (
            <div className="next_q_button" onClick={handleNextQuestion}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
              >
                <path
                    d="M6.25 50C6.25 58.6529 8.81589 67.1115 13.6232 74.3062C18.4305 81.5008 25.2633 87.1084 33.2576 90.4197C41.2519 93.7311 50.0485 94.5975 58.5352 92.9094C67.0219 91.2213 74.8174 87.0545 80.9359 80.9359C87.0545 74.8174 91.2213 67.0219 92.9094 58.5352C94.5975 50.0485 93.7311 41.2519 90.4197 33.2576C87.1084 25.2633 81.5008 18.4305 74.3062 13.6232C67.1115 8.81589 58.6529 6.25 50 6.25C38.3968 6.25 27.2688 10.8594 19.0641 19.0641C10.8594 27.2688 6.25 38.3968 6.25 50ZM25 46.875H62.9687L45.5312 29.3531L50 25L75 50L50 75L45.5312 70.5406L62.9687 53.125H25V46.875Z"
                    fill="#00D8FF"
                />
              </svg>
            </div>
        )}
      </div>
  );
};

export default Interview_Real;
